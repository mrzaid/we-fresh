import Head from "next/head";
import { ReactNode } from "react";
import Header from "../components/common/Header";

import Footer from "../components/common/Footer";
import Link from "next/link";
type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
         <Head>
        <title>WeFresh</title>
        <link  href="../public/assets/logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
   
      <Footer/>
    </div>
  );
}

export default Layout;
