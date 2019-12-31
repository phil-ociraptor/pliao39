import React from 'react'
import PostBody from './post-body'
import Head from 'next/head'
import Nav from '../components/nav'
import Datestamp from '../components/datestamp'
import Pill from '../components/pill'

class Post extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <Head>
          <title>{this.props.post.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        </Head>

        <Nav />
        <div className="page-container">
          <div className="post-container">
            <h1 className="title">{this.props.post.title}</h1>
            <div className="subtitle">
              <div className="subtitle-item">
                <Datestamp className="subtitle-item" value={this.props.post.published_at}/>
              </div>
              <div className="subtitle-item">
                <Pill className="subtitle-item" value={`${this.props.post.reading_time} Minutes`}/>
              </div>

              {/* {Object.keys(this.props.post).join('\n')} */}

            </div>
            <PostBody value={this.props.post.html} />
          </div>

        </div>

        <style jsx global>{`
          body {
            font-family: 'Open Sans', sans-serif;
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
            width: 400px;
          }
          .subtitle-item {
            margin: 0px 10px 0px 0px;

          }
          .hero {
            width: 100%;
            color: #333;
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
          figure {
            width: 100%;
            max-width: 880px;
            margin: 10px 0px;
          }
          figcaption {
            font-style: italic;
            text-align: center;
            font-size: 10pt;
          }
          .kg-image {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}
export default Post
