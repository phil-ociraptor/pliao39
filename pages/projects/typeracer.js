import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import Head from "../../components/head";
import RaceChart from "../../components/projects/typeracer/race-chart";

const Typeracer = () => (
  <div>
    <Head title={"Typeracer Data"} />
    <Layout>
      <Nav />
      <RaceChart />
    </Layout>

    <style jsx global>{``}</style>
  </div>
);

export default Typeracer;
