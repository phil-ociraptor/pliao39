import React from 'react'
import Head from 'next/head'

class MyHead extends React.Component {

  // TODO - define the props
  constructor(props) {
    super(props)
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155190391-1');
      `
    };
  }

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155190391-1"></script>
        <script dangerouslySetInnerHTML={this.setGoogleTags()} />
      </Head>

    )
  }
}

export default MyHead