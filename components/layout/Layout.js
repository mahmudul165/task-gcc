import Head from "next/head";
import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title = "Misi" }) => {
  //console.log("layout", title)
  const [mobileNavsidebar, setMobileNavsidebar] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="\admin\MiSi High Res.png" />
      </Head>

      <div className="flex bg-white min-h-screen relative">
        <div className="flex-grow text-gray-800">
          <Header
            mobileNavsidebar={mobileNavsidebar}
            setMobileNavsidebar={setMobileNavsidebar}
          />
          {children}
        </div>

        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default Layout;