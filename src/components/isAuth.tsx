import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utilities/auth";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = isAuthenticated;
    const router = useRouter();

    useEffect(() => {
      if (!auth) {
        router.push("/");
      }
    }, [auth]);
    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
