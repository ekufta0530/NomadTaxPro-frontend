"use client";

import React, { MouseEvent } from "react";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { Icon } from "common/media/icon";
import { Text } from "common/widgets/basic/text";
import { Button } from "common/widgets/basic/button";
import { CountryCardProps } from "types/cards";
import { API } from "utils/api";
import { http } from "utils/http";
import { toast } from "react-toastify";
import { useAuth } from "context/AuthContext";
import { useCountry } from "context/CountryContext";
import { useRouter } from "next/navigation";

export function CountryCard({
  id,
  image,
  country_name,
  cost_of_living_single,
  key_consideration,
  Tagline,
}: CountryCardProps) {
  const { currentUser } = useAuth();
  const { favoriteCountryIds, getFavoriteCountries } = useCountry();
  const router = useRouter();

  const handleFavoriteCountry = async (e: MouseEvent<HTMLDetailsElement>) => {
    e.stopPropagation();
    const alreadyFav = favoriteCountryIds.includes(id as never);
    const endpoint = alreadyFav ? "remove" : "add";
    const { res, data } = await http.post(
      API.country.favorite[endpoint],
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

  const handleRequestInfo = async () => {
    const { res, data } = await http.post(
      API.country.info.request,
      {
        action: "Country Requested",
        country: country_name,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 200) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  };

  const handleCountryUrl = () => {
    if (Tagline) {
      router.push(`/dashboard/country-detail/${id}`);
    }
  };

  const isLivingCost =
    cost_of_living_single !== null &&
    cost_of_living_single !== undefined &&
    cost_of_living_single > 0;

  return (
    <div
      onClick={handleCountryUrl}
      className={`${
        key_consideration ? "bg-white" : "bg-white opacity-60"
      } shadow-grey py-5 px-5 w-[21.5rem] relative rounded-[1.25rem] cursor-pointer`}
    >
      {image && (
        <Image
          src={image}
          alt="anguilla"
          className="rounded-[1.5rem] h-[15.188rem] w-[20.563rem] object-cover"
        />
      )}
      <Text
        as="h1"
        className="text-left mt-5"
        text={country_name}
        color="nile-blue"
        size="lg"
        weight="bold"
      />

      <Flex variant="rowBetweenCenter" className="mt-5 mb-2">
        {isLivingCost && (
          <Text
            as="p"
            className="text-left"
            text={`Cost of living: $${cost_of_living_single}`}
            color="purple-blue"
            size="sm"
            weight="bold"
          />
        )}
        <Button
          variant="solid-dark-blue"
          text={key_consideration ? "Details" : "Request Info"}
          size="md"
          className="rounded-full text-sm"
          onClick={key_consideration ? undefined : handleRequestInfo}
          link={
            key_consideration ? `/dashboard/country-detail/${id}` : undefined
          }
        />
      </Flex>
      <Icon
        icon={
          favoriteCountryIds?.some((countryId: number) => countryId === id)
            ? "HeartFilled"
            : "HeartOutline"
        }
        size="sm"
        variant="circle"
        className="border-none w-[2.25rem] h-[2.25rem] bg-white p-[.6rem] absolute top-9 right-8"
        onClick={(e: MouseEvent<HTMLDetailsElement>) =>
          handleFavoriteCountry(e)
        }
      />
    </div>
  );
}
