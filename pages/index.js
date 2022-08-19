// import Dashboard from "../components/dashboard/Dashboard";
// import Layout from "../components/layout/Layout";
import Meta from "/components/seo/Meta";
import dynamic from "next/dynamic";
import { AuthContext } from "../contexts/auth-context";
import { useRouter } from "next/router";
import React from "react";
//const Card = dynamic(() => import("../components/dashboard/Card"));
export default function Index() {
  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  // React.useEffect(() => {
  //   authContext?.isUserAuthenticated()
  //     ? router.push("/")
  //     : router.push("/account/login");
  // }, []);
  return (
    <>
      <Meta
        title="GCC Limited"
        keywords="GCC Limited"
        description="GCC Limited is the bigest software company in bangladesh"
        image="test purpose"
      />
      {/* inside of container */}

      <main className="p-6  space-y-6">
        <h1>miss u </h1>
        {/* <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card
            name="Create New Patient"
            number="6"
            bgColor="bg-gradient-to-r from-violet-300 to-violet-400 "
          />
          <Card
            name="Create New Tickets"
            number="55"
            bgColor="bg-gradient-to-l from-cyan-500 to-cyan-400"
          />
          <Card
            name="All Tickets"
            number="6"
            bgColor="bg-gradient-to-l from-purple-500   to-purple-400"
          />
          <Card
            name="All Patients"
            number="65"
            bgColor="bg-gradient-to-l from-pink-500   to-pink-400"
          />
        </section> */}
      </main>
    </>
  );
}
{
  /* <Layout title='Home Layout'>
<Dashboard />
</Layout> */
}

// https://github.com/flatlogic/sofia-react-template
// https://github.com/themesberg/volt-react-dashboard
// https://github.com/DesignRevision/shards-dashboard-react
