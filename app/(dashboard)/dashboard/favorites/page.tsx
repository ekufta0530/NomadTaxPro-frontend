import { Layout } from "layout";
import React from "react";
import { Favorites } from "sections/dashboard/favorites";

export default function Page() {
  return (
    <Layout type="Dashboard">
      <Favorites />
    </Layout>
  );
}
