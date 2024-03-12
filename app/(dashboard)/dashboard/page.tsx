import React from "react";
import { Layout } from "layout";
import { Home } from "sections/dashboard/home";

export default function Page() {
  return (
    <Layout type="Dashboard">
      <Home />
    </Layout>
  );
}
