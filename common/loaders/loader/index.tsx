import { colors } from "data/static/colorData";
import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

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
  ClimbingBoxLoader,
  BeatLoader,
};

export function Loader({
  loading,
  type,
}: {
  loading: boolean;
  type: "BarLoader" | "ClimbingBoxLoader" | "BeatLoader";
}) {
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
