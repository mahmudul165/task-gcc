import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Meta from "/components/seo/Meta";
import AuthProvider from "/contexts/AuthProvider";
import { AnimatePresence } from "framer-motion";
import Layout from "/components/layout/Layout";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // const LoginRedirect = () => {
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (localStorage.getItem("token") == null) {
  //       return router.push("/account/login");
  //     } else {
  //       return router.push("/");
  //     }
  //   }, []);
  // };

  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <Meta />
      </Head>

      <Script
        src="https://kit.fontawesome.com/61a6132c09.js"
        crossOrigin="anonymous"
      ></Script>
      {/* Bootstrap Bundle with Popper   */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      /> */}

      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </Layout>
          </AuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
