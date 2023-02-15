import Layout from "../components/layout";
import "../styles/index.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: any) {
  const websiteDetails = pageProps?.websiteDetails;
  return (
    <Layout data={websiteDetails}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
