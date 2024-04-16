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

export function DeleteStay() {
  const { currentUser } = useAuth();
  const { deleteCountry, getDeleteCountry, getStays } = useCountry();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDeleteStay = async () => {
    setIsLoading(true);
    const { res, data } = await http.delete(
      API.country.stay.delete,
      {
        userId: currentUser?._id,
        countryId: deleteCountry?.id,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 200) {
      getStays();
      toast.success(data?.message);
      setIsLoading(false);
      getDeleteCountry(null, null, null, null);
      router.push("/dashboard/tracker");
    } else {
      toast.error(data?.message);
      setIsLoading(false);
    }
  };

  return (
    <Modal name="delete-stay-modal" icon="Cross" size="sm">
      <div className="w-full">
        <Text
          as="h3"
          size="xl"
          weight="bold"
          color="black"
          text="Are you sure you want to delete this stay?"
          className="text-center mt-4"
        />
        <Text
          as="h3"
          size="2xl"
          weight="bold"
          color="black"
          text={deleteCountry?.name || ""}
          className="text-center my-4"
        />
        <Flex variant="columnCenterCenter" className="gap-0 mb-4">
          <Text as="h3" size="md" weight="bold" color="dark-grey">
            <span className="w-24 inline-block">Start Date:</span>{" "}
            {moment(deleteCountry?.dateFrom).format("D MMM YYYY")}
          </Text>
          <Text as="h3" size="md" weight="bold" color="dark-grey">
            <span className="w-24 inline-block">End Date:</span>{" "}
            {moment(deleteCountry?.dateTo).format("D MMM YYYY")}
          </Text>
        </Flex>

        <Loader type="BarLoader" loading={isLoading} />
        <Button
          text="Delete"
          onClick={handleDeleteStay}
          className="w-full mt-4"
          disabled={isLoading}
        />
      </div>
    </Modal>
  );
}
