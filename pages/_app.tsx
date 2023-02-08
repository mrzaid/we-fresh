import Layout from "../components/layout";
import "../styles/index.css";
import "../styles/header.css";
function MyApp({ Component, pageProps }: any) {
 console.log('page',pageProps)
 const {websiteDetails} =pageProps
  return (
    // layoutData={pageProps}
    <Layout data={websiteDetails} >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
