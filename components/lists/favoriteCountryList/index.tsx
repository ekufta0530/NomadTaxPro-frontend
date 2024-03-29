import React, { useState } from "react";
import { Flex } from "common/widgets/advance/flex";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import Image from "next/image";
import { FavoriteCountryListProps } from "types/lists";
import { API } from "utils/api";
import { http } from "utils/http";
import { toast } from "react-toastify";
import { useAuth } from "context/AuthContext";
import { useCountry } from "context/CountryContext";
import Link from "next/link";
import { Button } from "common/widgets/basic/button";
import moment from "moment";
import { formatDateRange } from "utils/helpers/date";

export function FavoriteCountryList({
  id,
  image,
  country_name,
  dateFrom,
  dateTo,
  favoriteCountryListClickId,
  onFavoriteCountryListClick,
}: FavoriteCountryListProps) {
  const { currentUser } = useAuth();
  const {
    getFavoriteCountries,
    getEditCountryName,
    getEditId,
    getEditCountryStartDate,
    getEditCountryEndDate,
    stays,
  } = useCountry();

  const handleRemoveFavoriteCountry = async () => {
    const { res, data } = await http.post(
      API.country.favorite.remove,
      {
        userId: currentUser?._id,
        countryId: id,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 201) {
      toast.success(data?.message);
      if (currentUser) {
        getFavoriteCountries(currentUser?._id);
      }
    } else {
      toast.error(data?.message);
    }
  };

  const handleLinkAddStay = () => {
    const findStay = stays.find((stay) => stay.countryId === id);
    if (findStay) {
      if (getEditId) {
        getEditId(id as number);
      }
      if (getEditCountryName) {
        getEditCountryName(country_name);
      }
      if (getEditCountryStartDate) {
        getEditCountryStartDate(new Date(dateFrom));
      }
      if (getEditCountryEndDate) {
        getEditCountryEndDate(new Date(dateTo));
      }
    } else {
      if (getEditId) {
        getEditId(null);
      }
      if (getEditCountryName) {
        getEditCountryName("");
      }
      if (getEditCountryStartDate) {
        getEditCountryStartDate(new Date());
      }
      if (getEditCountryEndDate) {
        getEditCountryEndDate(new Date());
      }
    }
  };

  return (
    <Flex
      onClick={() => onFavoriteCountryListClick(id as number)}
      variant="rowStartStart"
      className={`${
        id === favoriteCountryListClickId ? "bg-light-grey" : "bg-white"
      } rounded-[1.063rem] w-full  relative gap-2 p-2 cursor-pointer`}
    >
      <Image
        src={image}
        alt="albania"
        className="w-[5rem] h-[4rem] rounded-[.75rem] object-cover"
      />
      <div className="p-2">
        <Link
          href={`/dashboard/country-detail/${id}`}
          className="hover:underline"
        >
          <Text
            as="h1"
            size="md"
            text={country_name}
            color="nile-blue"
            weight="semiBold"
            className="leading-tight"
          />
        </Link>
        {id !== 1 && (
          <Link
            href="/dashboard/tracker#stay-modal"
            onClick={handleLinkAddStay}
          >
            <Button
              variant="rounded-dark-blue"
              size="xs"
              text={
                stays.find((stay) => stay.countryId === id) ? "Edit" : "+Stay"
              }
              className="mt-2 text-[.7rem] px-3 py-[.1rem] rounded-xl w-14"
            />
          </Link>
        )}
        {/* <Text
          as="p"
          size="xs"
          text={formatDateRange(dateFrom, dateTo)}
          color="cold-purple"
          weight="regular"
          className="mt-1"
        /> */}
      </div>
      <Icon
        icon="HeartFilled"
        size="xs"
        className="absolute top-3 right-4"
        onClick={handleRemoveFavoriteCountry}
      />
    </Flex>
  );
}
