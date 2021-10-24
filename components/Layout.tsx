import { NextPage } from "next";
import Head from "next/head";
import { Children } from "react";
import { Nav } from "./Nav";
import Script from "next/script";
import { Footer } from "./Footer";

interface Props {
  children: any;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Nav />

      <div className="app-wrapper">{children}</div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Footer />
    </>
  );
};

export default Layout;
