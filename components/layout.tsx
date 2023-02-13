import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Children } from "react";

function Layout({ children, data }: any) {
  const footerdata = data?.footerCollection;
  const headerdata = data?.headerCollection;
  return (
    <div className="layout">
      <Head>
        <title>WeFresh</title>
        <link href="../public/assets/logo.png" />
      </Head>
      <header>
        <Header headerdata={headerdata} />
      </header>
      <main className="">{children}</main>

      <Footer footerdata={footerdata} />
    </div>
  );
}

export default Layout;
