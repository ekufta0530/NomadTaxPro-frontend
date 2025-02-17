"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useHashHook = () => {
  const params = useParams();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    setHash(currentHash);
  }, [params]);

  return hash;
};
