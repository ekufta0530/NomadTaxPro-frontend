import React from "react";
import { Layout } from "layout";
import { CountryDetail } from "sections/dashboard/countryDetail";

export default function Page() {
  return (
    <Layout type="Dashboard">
      <CountryDetail />
    </Layout>
  );
}
