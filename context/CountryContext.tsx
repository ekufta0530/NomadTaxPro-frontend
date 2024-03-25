"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useAuth } from "./AuthContext";
import { http } from "utils/http";
import { API } from "utils/api";
import { StayProps } from "types/context";

interface CountryContextProps {
  favoriteCountryIds: [] | number[];
  getFavoriteCountries: (userId: string) => void;
  getStays: () => void;
  stays: StayProps[];
  isFetchedIds?: boolean;
}

const CountryContext = createContext<CountryContextProps>({
  favoriteCountryIds: [],
  getFavoriteCountries: () => {},
  getStays: () => {},
  stays: [],
  isFetchedIds: false,
});

export const useCountry = () => useContext(CountryContext);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [favoriteCountryIds, setFavoriteCountryIds] = useState<number[]>([]);
  const [isFetchedIds, setIsFetchedIds] = useState<boolean>(false);
  const [stays, setStays] = useState<StayProps[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      getFavoriteCountries(currentUser?._id);
      getStays();
    }
  }, [currentUser]);

  const getFavoriteCountries = async (userId: string) => {
    if (userId) {
      setIsFetchedIds(false);
      const { res, data } = await http.post(
        API.country.favorite.get,
        {
          userId,
        },
        {
          token: currentUser?.token,
        }
      );
      if (res.status === 200) {
        setFavoriteCountryIds(data.favoriteCountryIds);
        setIsFetchedIds(true);
      } else {
        setFavoriteCountryIds([]);
        setIsFetchedIds(true);
      }
    }
  };

  const getStays = async () => {
    const { res, data } = await http.post(
      API.country.stay.get,
      {
        userId: currentUser?._id,
      },
      {
        token: currentUser?.token,
      }
    );
    if (res.status === 200) {
      setStays(data?.data);
    }
  };

  const value = {
    favoriteCountryIds,
    getFavoriteCountries,
    stays,
    getStays,
    isFetchedIds,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
