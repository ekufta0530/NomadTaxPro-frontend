import { useEffect } from "react";
import { Modal } from "common/widgets/advance/modal";
import { useAuth } from "context/AuthContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API } from "utils/api";
import { http } from "utils/http";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { Loader } from "common/loaders/loader";
import { Flex } from "common/widgets/advance/flex";
import { useCountry } from "context/CountryContext";
import moment from "moment";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserProps } from "types/user";

export function UpdatePeriod() {
  const { currentUser, getCurrentUser } = useAuth();
  const [periodStartDate, setPeriodStartDate] = useState<Date | null>(
    new Date()
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (currentUser?.periodStartDate) {
      setPeriodStartDate(new Date(currentUser?.periodStartDate));
    }
  }, [currentUser]);

  const handleUpdatePeriodStartDate = async () => {
    const currentDate = new Date();
    if (periodStartDate === null) {
      toast.error("Please select a valid date");
      return;
    }
    if (periodStartDate.getTime() > currentDate.getTime()) {
      toast.error("Please select a date before today's date");
      return;
    }
    setIsLoading(true);
    const { res, data } = await http.patch(
      API.auth.periodStartDate.update,
      { userId: currentUser?._id, periodStartDate },
      { token: currentUser?.token }
    );
    if (res.status === 200) {
      toast.success(data?.message);
      setIsLoading(false);
      router.push("/dashboard/tracker");
      const localhostUser = localStorage.getItem("user");
      const user: UserProps = JSON.parse(localhostUser as string);
      user.periodStartDate = periodStartDate;
      localStorage.setItem("user", JSON.stringify(user));
      const newUser: any = { ...currentUser, periodStartDate: periodStartDate };
      getCurrentUser(newUser);
    } else {
      toast.error(data?.message);
      setIsLoading(false);
      router.push("/dashboard/tracker");
    }
  };
  return (
    <Modal name="update-period-modal" icon="Cross" size="sm">
      <div className="w-full">
        <Text
          as="h3"
          size="2xl"
          weight="bold"
          color="black"
          text="Update Period Start Date"
          className="text-center mt-10"
        />
        <Flex variant="columnCenterCenter" className="gap-0 my-10">
          <Text as="h3" size="lg" weight="bold" color="dark-grey">
            <span>Period Start Date</span>
          </Text>
          <Text as="h3" size="md" weight="bold" color="dark-grey">
            {moment(currentUser?.periodStartDate).format("D MMM YYYY")}{" "}
          </Text>
        </Flex>
        <Flex variant="columnCenterCenter" className="my-10">
          <Text as="p" text="Select Period Start Date" size="lg" />
          <DatePicker
            selected={periodStartDate}
            onChange={(date: Date) => setPeriodStartDate(date)}
          />
        </Flex>
        <Loader type="BarLoader" loading={isLoading} />
        <Button
          text="Update"
          className="w-full mt-4"
          disabled={isLoading}
          onClick={handleUpdatePeriodStartDate}
        />
      </div>
    </Modal>
  );
}
