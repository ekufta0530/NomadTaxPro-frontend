"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuthHook() {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (!user && pathname.includes("dashboard")) {
      router.push("/login");
    }
  }, []);
}
