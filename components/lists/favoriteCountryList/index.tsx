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

export function FavoriteCountryList({
  id,
  image,
  country_name,
  date,
  favoriteCountryListClickId,
  onFavoriteCountryListClick,
}: FavoriteCountryListProps) {
  const { currentUser } = useAuth();
  const { getFavoriteCountries } = useCountry();

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
        <Text
          as="h1"
          size="md"
          text={country_name}
          color="nile-blue"
          weight="semiBold"
          className="leading-tight"
        />
        <Text
          as="p"
          size="xs"
          text="15 Jan 2024- 21 Feb 2024"
          color="cold-purple"
          weight="regular"
        />
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
