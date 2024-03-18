export type FavoriteCountryListProps = {
  id: number | string;
  image: string;
  country_name: string;
  date: string;
  onClickIcon: (id: number | string) => void;
};
