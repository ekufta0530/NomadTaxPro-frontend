"use client";

import React, {useEffect, useState} from "react";
import { Layout } from "layout";
import { CountryDetail } from "sections/dashboard/countryDetail";
import { useParams } from "next/navigation";
import { countryCardData } from "data/static/cardData";

export default function Page() {
  const { id } = useParams();
  const [detail, setDetail] = useState({} as any);

  useEffect(() => {
    getCountryDetail();
  }, [id])

  const getCountryDetail = ()=> { 
      const detail = countryCardData.find((item) => item.id === Number(id) );
      setDetail(detail);
  }
  

  return (
    <Layout type="Dashboard">
      <CountryDetail  detail={detail} />
    </Layout>
  );
}
