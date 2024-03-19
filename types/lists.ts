export type FavoriteCountryListProps = {
  id: number | string;
  image: string;
  country_name: string;
  date: string;
  onFavoriteCountryListClick: (id: number) => void;
  favoriteCountryListClickId: number;
};
