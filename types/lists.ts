export type FavoriteCountryListProps = {
  id: number | string;
  image: string;
  country_name: string;
  dateFrom: Date;
  dateTo: Date;
  onFavoriteCountryListClick: (id: number) => void;
  favoriteCountryListClickId: number;
};

export type ScheduleListProps = {
  country_name: string;
  dateFrom: Date;
  dateTo: Date;
  key_consideration: string;
};
