import { colors } from "data/static/colorData";
import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const { darkBlue, nileBlue } = colors;
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  backgroundColor: nileBlue,
};

type LoaderTypes = {
  [key: string]: any;
};

const loaders: LoaderTypes = {
  BarLoader,
};

export function Loader({ loading, type }: { loading: boolean; type: string }) {
  const LoaderComponent = loaders[type];

  return (
    <LoaderComponent
      color={darkBlue}
      loading={loading}
      cssOverride={override}
      height={5}
      aria-label="Loading Spinner"
      data-testid="loader"
      width={250}
    />
  );
}
