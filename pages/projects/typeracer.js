import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";

import Head from "../../components/head";
import MovingAverageChart from "../../components/projects/typeracer/moving-average-chart";
const mydata = require("../../data/typeracer.json").map(x => x.wpm);

const Typeracer = () => (
  <div>
    <Head title={"Typeracer Data"} />
    <Layout>
      <Nav />
      <MovingAverageChart data={mydata} />
    </Layout>

    <style jsx global>{``}</style>
  </div>
);

export default Typeracer;
