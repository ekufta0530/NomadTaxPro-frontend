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
import { DeleteCountryProps } from "types/collapsibles";

interface CountryContextProps {
  favoriteCountryIds: [] | number[];
  getFavoriteCountries: (userId: string) => void;
  getStays: () => void;
  stays: StayProps[];
  isFetchedIds?: boolean;
  editId?: number | null;
  getEditId?: (id: number | null) => void;
  getEditCountryName?: (name: string) => void;
  editCountryName: string;
  editCountryStartDate?: Date | null;
  editCountryEndDate?: Date | null;
  getEditCountryStartDate?: (date: Date | null) => void;
  getEditCountryEndDate?: (date: Date | null) => void;
  isFetchedStay?: boolean;
  deleteCountry?: DeleteCountryProps;
  getDeleteCountry: (
    id: number | null,
    name: string | null,
    dateFrom: Date | null,
    dateTo: Date | null,
  ) => void;
}

const CountryContext = createContext<CountryContextProps>({
  favoriteCountryIds: [],
  getFavoriteCountries: () => {},
  getStays: () => {},
  stays: [],
  isFetchedIds: false,
  editId: null,
  getEditId: () => {},
  getEditCountryName: () => {},
  editCountryName: "",
  editCountryStartDate: null,
  editCountryEndDate: null,
  getEditCountryStartDate: () => {},
  getEditCountryEndDate: () => {},
  isFetchedStay: false,
  deleteCountry: {
    id: null,
    name: "",
    dateFrom: null,
    dateTo: null,
  },
  getDeleteCountry: () => {},
});

export const useCountry = () => useContext(CountryContext);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [favoriteCountryIds, setFavoriteCountryIds] = useState<number[]>([]);
  const [isFetchedIds, setIsFetchedIds] = useState<boolean>(false);
  const [stays, setStays] = useState<StayProps[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editCountryName, setEditCountryName] = useState<string>("");
  const [editCountryStartDate, setEditCountryStartDate] = useState<Date | null>(
    null
  );
  const [editCountryEndDate, setEditCountryEndDate] = useState<Date | null>(
    null
  );
  const [isFetchedStay, setIsFetchedStay] = useState<boolean>(false);
  const { currentUser } = useAuth();

  // Delete country
  const [deleteCountry, setDeleteCountry] = useState<DeleteCountryProps>({
    id: 0,
    name: null,
    dateFrom: null,
    dateTo: null,
  });

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
    setIsFetchedStay(false);
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
      setIsFetchedStay(true);
    } else {
      setStays([]);
      setIsFetchedStay(true);
    }
  };

  const getEditId = (id: number | null) => {
    setEditId(id);
  };
  const getEditCountryName = (name: string) => {
    setEditCountryName(name);
  };
  const getEditCountryStartDate = (date: Date | null) => {
    setEditCountryStartDate(date);
  };
  const getEditCountryEndDate = (date: Date | null) => {
    setEditCountryEndDate(date);
  };

  // Delete country
  const getDeleteCountry = (
    id: null | number,
    name: string | null,
    dateFrom: Date | null,
    dateTo: Date | null,
  ) => {
    setDeleteCountry({ id, name, dateFrom, dateTo });
  };
  const value = {
    favoriteCountryIds,
    getFavoriteCountries,
    stays,
    getStays,
    isFetchedIds,
    editId,
    getEditId,
    getEditCountryName,
    editCountryName,
    editCountryStartDate,
    editCountryEndDate,
    getEditCountryStartDate,
    getEditCountryEndDate,
    isFetchedStay,
    getDeleteCountry,
    deleteCountry,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
