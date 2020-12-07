import React from "react";
import Head from "next/head";

const gaID = process.env.NEXT_PUBLIC_ANALYTICS_ID;
console.log("gaID is ", gaID);

class MyHead extends React.Component {
  // TODO - define the props
  constructor(props) {
    super(props);
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaID}');
      `
    };
  }

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
        ></script>
        <script dangerouslySetInnerHTML={this.setGoogleTags()} />

        {/* Meta description for SEO */}
        {this.props.description && (
          <meta name="description" content={this.props.description} />
        )}

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        {this.props.slug && (
          <meta
            property="og:url"
            content={`https://philipliao.com/${this.props.slug}`}
          />
        )}
        <meta property="og:title" content={this.props.title} />
        {this.props.description && (
          <meta property="og:description" content={this.props.description} />
        )}
        {this.props.img && (
          <meta property="og:image" content={this.props.img} />
        )}

        {/* HOLY SHIT Twitter needs the name field, not property. AARGGHGHGHH  https://cards-dev.twitter.com/validator */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@philipliao_" />
        <meta name="twitter:creator" content="@philipliao_" />
        {this.props.slug && (
          <meta
            name="twitter:url"
            content={`https://philipliao.com/${this.props.slug}`}
          />
        )}
        <meta name="twitter:title" content={this.props.title} />
        {this.props.description && (
          <meta name="twitter:description" content={this.props.description} />
        )}
        {this.props.img && (
          <meta name="twitter:image" content={this.props.img} />
        )}
      </Head>
    );
  }
}

export default MyHead;
