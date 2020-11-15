import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { useState, useEffect } from "react";

import Head from "../../components/head";
import MovingAverageChart from "../../components/projects/typeracer/moving-average-chart";
const mydata = require("../../data/typeracer.json").map(x => x.wpm);

const Typeracer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      let user = "pliao39";
      if (window) {
        const params = new URLSearchParams(window.location.search);
        user = params.get("user") || user;
      }

      fetch(`https://typeracer-data.s3.amazonaws.com/users/${user}.json`)
        .then(res => res.json())
        .then(games => games.map(g => g.wpm))
        .then(games => {
          setData(games);
        })
        .catch(err => {
          console.error(
            "TODO - inform the user that the selected user has not been loaded into the dataset"
          );
        });
    }
  }, [data]);
  return (
    <div>
      <Head title={"Typeracer Data"} />
      <Layout>
        <Nav />
        <MovingAverageChart data={data} />
      </Layout>

      <style jsx global>{``}</style>
    </div>
  );
};

export default Typeracer;
