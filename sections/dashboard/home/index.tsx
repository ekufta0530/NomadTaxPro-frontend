import { Map } from "components/map";
import { countryCardData } from "data/static/cardData";
import { DashboardHeader } from "layout/header/dashboardHeader";
import React from "react";

export function Home() {
  return (
    <div>
      <DashboardHeader />
      <Map type="CountryCard" data={countryCardData} />
    </div>
  );
}
