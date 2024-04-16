export type FavoriteCountryCollapseProps = {
  id: string | number;
  image: string;
  country_name: string;
  dateFrom: Date;
  dateTo: Date;
  key_consideration: string;
};

export type DeleteCountryProps = {
  id: number | null;
  name: string | null;
  dateFrom: Date | null;
  dateTo: Date | null;
};
