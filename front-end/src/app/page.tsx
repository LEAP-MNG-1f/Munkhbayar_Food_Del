"use client";
import Image from "next/image";
import { Router } from "next/router";
import { useEffect } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { Card } from "./_components/Card";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.DATABASE_URL}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const providers = [
  //   { id: "github", name: "GitHub" },
  //   { id: "google", name: "Google" },
  //   { id: "facebook", name: "Facebook" },
  //   { id: "twitter", name: "Twitter" },
  //   { id: "linkedin", name: "LinkedIn" },
  // ];
  // // preview-end
  // const theme = useTheme();

  // const signIn: (provider: AuthProvider) => void = async (provider) => {
  //   const promise = new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       console.log(`Sign in with ${provider.id}`);
  //       resolve();
  //     }, 500);
  //   });
  //   return promise;
  // };
  return (
    // <AppProvider theme={theme}>
    //   <SignInPage signIn={signIn} providers={providers} />
    // </AppProvider>
    <div>
      <div>
        <Card img="zurag" title="Hool" price={5000} discount={20} />
        <Card img="zurag" title="Hool" price={5500} />
        <p>Are you working ?</p>
        <p>Hello</p>
      </div>
    </div>
  );
}
