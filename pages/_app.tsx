import Layout from "../components/layout";
import "../styles/index.css";
import "../styles/header.css";
function MyApp({ Component, pageProps }: any) {
  // console.log('page',pageProps)
  return (
    // layoutData={pageProps}
    <Layout  >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
