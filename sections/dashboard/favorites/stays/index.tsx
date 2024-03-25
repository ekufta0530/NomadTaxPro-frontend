"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Text } from "common/widgets/basic/text";
import { Modal } from "common/widgets/advance/modal";
import { SelectMenu } from "types/common";
import { countryCardData } from "data/static/cardData";
import { Select } from "common/widgets/basic/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Flex } from "common/widgets/advance/flex";
import { Button } from "common/widgets/basic/button";
import { useAuth } from "context/AuthContext";
import { http } from "utils/http";
import { API } from "utils/api";
import { toast } from "react-toastify";
import { Toastify } from "common/loaders/toastify";
import { Loader } from "common/loaders/loader";
import { useCountry } from "context/CountryContext";
import { Icon } from "common/media/icon";
import { useRouter } from "next/navigation";

export function Stays({
  favoriteCountryListClickId,
}: {
  favoriteCountryListClickId: number | string | null;
}) {
  const { currentUser } = useAuth();
  const { getStays } = useCountry();
  const router = useRouter();
  const [countrySelectData, setCountrySelectData] = useState<SelectMenu[]>([]);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [countryId, setCountryId] = useState<string | number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCountryId, setSelectedCountryId] = useState<
    number | string | null
  >();
  const [countryName, setCountryName] = useState<string | null>(null);

  useEffect(() => {
    const countries = countryCardData?.map((country) => {
      return {
        id: country.id,
        value: country.id,
        option: country.country_name,
      };
    });
    const filterCountries = countries.filter((country) => country.id !== 1);
    setCountryId(filterCountries[0]?.id);
    setCountrySelectData(filterCountries);
    if (favoriteCountryListClickId) {
      setSelectedCountryId(favoriteCountryListClickId);
      setCountryName(
        countryCardData?.find(
          (country) => country.id === favoriteCountryListClickId
        )?.country_name || ""
      );
    } else {
      setSelectedCountryId(null);
    }
  }, [favoriteCountryListClickId]);

  const handleChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryId(e.target.value);
  };

  const handleAddStay = async () => {
    if (dateFrom > dateTo) {
      toast.error("Start Date cannot be greater than End Date!");
      return;
    }
    setIsLoading(true);
    const { res, data } = await http.post(
      API.country.stay.addUpdate,
      {
        userId: currentUser?._id,
        countryId:
          selectedCountryId != null
            ? Number(selectedCountryId)
            : Number(countryId),
        dateFrom: dateFrom,
        dateTo: dateTo,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 201) {
      setCountryId(countrySelectData[0]?.id);
      router.push("/dashboard/favorites");
      setIsLoading(false);
      toast.success(data?.message);
      getStays();
    } else {
      setIsLoading(false);
      toast.error(data?.message);
    }
  };

  return (
    <>
      <Modal name="stay-modal" icon="Cross" size="sm">
        <div className="px-4">
          <Text
            as="p"
            text="Add Stay"
            size="3xl"
            weight="bold"
            className="text-center mt-0 pt-0"
          />
          <Text
            as="p"
            text={`${
              selectedCountryId
                ? `Add Stay for ${countryName}`
                : "Select a country to add a stay for"
            }`}
            size="md"
            weight="regular"
            color="dark-grey"
            className="text-center mt-0 pt-0"
          />
          {selectedCountryId ? (
            <Flex variant="rowCenterCenter" className="mt-5 gap-2">
              <Icon icon="HeartFilled" size="xs" />
              <Text
                as="p"
                size="2xl"
                text={countryName || "Select Country"}
                className="text-center text-dark-blue font-bold"
              />
            </Flex>
          ) : (
            <Text
              as="p"
              size="sm"
              text={`${selectedCountryId ? countryName : "Select Country"}`}
              className="mt-5"
            />
          )}
          {!selectedCountryId && (
            <Select
              containerClass="mt-2"
              className="bg-soft-peach"
              data={countrySelectData}
              onChange={handleChangeCountry}
            />
          )}
          <Text as="p" className="mt-10 text-purple-blue font-medium">
            Select the start and end date of your stay. <br /> *End Date must be
            greater than Start Date.
          </Text>
          <Flex className="mt-16">
            <Text as="p" text="Start Date" className="w-24" />
            <DatePicker
              selected={dateFrom}
              onChange={(date: Date) => setDateFrom(date)}
            />
          </Flex>
          <Flex className="mt-6 mb-8">
            <Text as="p" text="End Date" className="w-24" />
            <DatePicker
              selected={dateTo}
              onChange={(date: Date) => setDateTo(date)}
            />
          </Flex>
          <Loader type="BarLoader" loading={isLoading} />
          <Button
            text="Add Stay"
            className="w-full mt-10"
            onClick={handleAddStay}
            disabled={isLoading || !countryId || !dateFrom || !dateTo}
          />
        </div>
      </Modal>
    </>
  );
}
