import { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/index.css";
import "../styles/header.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
