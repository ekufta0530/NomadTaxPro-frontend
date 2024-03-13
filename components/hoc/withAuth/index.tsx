"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const withAuth = (WrappedComponent: any) => {
  const Auth = (props: any) => {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user") as string);
      if (!user && pathname.includes("dashboard")) {
        setIsLoggedIn(false);
        router.push("/login");
      } else {
        setIsLoggedIn(true);
        router.push("/dashboard");
      }
    }, []);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };

  return Auth;
};

export default withAuth;
