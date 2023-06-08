"use client";
import "./globals.scss";

import { useState } from "react";
import Header from "../components/header";
import TransitionHandler from "../components/transition-handler";

export default function RootLayout({ children }) {
  const [url, setUrl] = useState("/");

  const chooseUrl = (getUrl) => {
    setUrl(getUrl);
    console.log(getUrl);
  };

  return (
    <html lang="it">
      <body>
        <Header chooseUrl={chooseUrl} />
        <TransitionHandler url={url}>{children}</TransitionHandler>
      </body>
    </html>
  );
}
