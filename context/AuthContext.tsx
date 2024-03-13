"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserProps } from "types/user";

interface AuthContextProps {
  currentUser: UserProps | null;
  getCurrentUser: (user: UserProps) => void;
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  getCurrentUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    getLocalUser();
  }, []);

  const getLocalUser = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user) {
      router.push("/dashboard");
      setCurrentUser(user);
    }
    if (!user && pathname.includes("dashboard")) {
      router.push("/login");
    }
  };

  const getCurrentUser = (user: UserProps) => {
    setCurrentUser(user);
  };

  const value = {
    currentUser,
    getCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
