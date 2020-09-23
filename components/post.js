import React from "react";
import PostBody from "./post-body";
import Head from "../components/head";
import Nav from "../components/nav";
import Datestamp from "../components/datestamp";
import Pill from "../components/pill";
import Layout from "./layout";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <Head title={this.props.post.title} />

          <Nav />
          <h1 className="title">{this.props.post.title}</h1>
          <div className="subtitle">
            {this.props.post.published_at && (
              <div className="subtitle-item">
                <Datestamp
                  className="subtitle-item"
                  value={this.props.post.published_at}
                />
              </div>
            )}
            {this.props.post.reading_time && (
              <div className="subtitle-item">
                <Pill
                  className="subtitle-item"
                  value={`${this.props.post.reading_time} Minutes`}
                />
              </div>
            )}

            {/* {Object.keys(this.props.post).join('\n')} */}
          </div>
          <PostBody value={this.props.post.html} />
        </Layout>

        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
              "Open Sans", sans-serif;
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
          }
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
          .post-container {
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
          .post {
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
export default Post;
