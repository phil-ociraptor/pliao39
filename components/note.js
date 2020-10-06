import React from "react";
import PostBody from "./post-body";
import Head from "../components/head";
import Nav from "../components/nav";
import Datestamp from "../components/datestamp";
import Pill from "../components/pill";
import Layout from "./layout";
import ButtondownSubscribe from "./buttondown-subscribe";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <Head title={this.props.note.title} />

          <Nav />
          <h1 className="title">{this.props.note.title}</h1>
          <ButtondownSubscribe />
          <hr />
          <PostBody value={this.props.note.html} />
          <hr />
          <ButtondownSubscribe />
        </Layout>

        <style jsx global>{`
          body hr {
            height: 1px;
            border: none;
            background-color: gray;
          }
          .page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            // width: 100%;
          }
          .note-container {
            display: flex;
            flex-direction: column;
            align-items: left;
            max-width: 600px;
            width: 100%;
          }
          .subtitle {
            padding: 10px 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            // width: 400px;
          }
          .subtitle-item {
            margin: 0px 10px 0px 0px;
          }
          .title {
            margin: 0;
            width: 100%;
            max-width: 880px;
            //padding-top: 80px;
            line-height: 1.15;
            font-size: 40px;
          }
          .title,
          .description {
            text-align: left;
          }
          .note {
            max-width: 880px;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .kg-image {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
export default Note;
