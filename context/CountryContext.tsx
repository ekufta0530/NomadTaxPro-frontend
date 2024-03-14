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

interface CountryContextProps {
  favoriteCountryIds: [] | number[];
  getFavoriteCountries: (userId: string) => void;
}

const CountryContext = createContext<CountryContextProps>({
  favoriteCountryIds: [],
  getFavoriteCountries: () => {},
});

export const useCountry = () => useContext(CountryContext);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [favoriteCountryIds, setFavoriteCountryIds] = useState<number[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      getFavoriteCountries(currentUser?._id);
    }
  }, [currentUser]);

  const getFavoriteCountries = async (userId: string) => {
    if (userId) {
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
      }
    }
  };

  const value = {
    favoriteCountryIds,
    getFavoriteCountries,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
