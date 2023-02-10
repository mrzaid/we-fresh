import Layout from "../components/layout";
import "../styles/index.scss";
import "../styles/header.scss";
function MyApp({ Component, pageProps }: any) {
  const { websiteDetails } = pageProps;
  return (
    <Layout data={websiteDetails}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
