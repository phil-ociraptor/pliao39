import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { useState, useEffect } from "react";
import { Input } from "antd";
const { Search } = Input;
import "antd/dist/antd.css";

import Head from "../../components/head";
import MovingAverageChart from "../../components/projects/typeracer/moving-average-chart";
const mydata = require("../../data/typeracer.json").map(x => x.wpm);

const Typeracer = () => {
  let initialUser = "pliao39";
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    initialUser = params.get("user") || initialUser;
  }
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async user => {
    if (user !== currentUser) {
      setIsLoading(true);
      await fetch("https://fxh9rrtz78.execute-api.us-east-1.amazonaws.com", {
        method: "post",
        body: JSON.stringify({ user })
      });
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    console.log("detected user change to", currentUser);
    fetch(`https://typeracer-data.s3.amazonaws.com/users/${currentUser}.json`)
      .then(res => res.json())
      .then(games => games.map(g => g.wpm))
      .then(games => {
        setData(games);
      })
      .catch(err => {
        console.error(
          "TODO - inform the user that the selected user has not been loaded into the dataset"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentUser]);
  return (
    <div>
      <Head title={"Typeracer Data"} />
      <Layout>
        <Nav />
        <MovingAverageChart data={data} />
        <Search
          placeholder="user"
          enterButton="Get User Data"
          loading={isLoading}
          onSearch={onSearch}
        ></Search>
      </Layout>

      <style jsx global>{``}</style>
    </div>
  );
};

export default Typeracer;
