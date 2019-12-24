import React from 'react'
import PostBody from './post-body'
import Head from 'next/head'
import Nav from '../components/nav'

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
        </Head>

        <Nav />

        <h1 className="title">{this.props.post.title}</h1>
        <PostBody value={this.props.post.html} />

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .post {
            max-width: 880px;
            width: 100%;
            margin: 10px auto 40px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        `}</style>
      </div>
    )
  }
}
export default Post
