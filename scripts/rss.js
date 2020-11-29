const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const RSS = require("rss");
import notes from "../data/notes";
import notesMeta from "../data/notes-meta";
import posts from "../data/posts";

/* lets create an rss feed */
let feed = new RSS({
  title: "Phil Liao",
  description: "Phil's home on the internet",
  feed_url: "https://philipliao.com/rss.xml",
  site_url: "https://philipliao.com",
  image_url: "https://philipliao.com/phil.jpg",
  ttl: "60"
});

/* loop over data and add to feed */
Object.keys(notesMeta).forEach(title => {
  const meta = notesMeta[title];
  const url = `https://philipliao.com/weekly_notes/${title}`;
  feed.item({
    title,
    url,
    author: "Phil Liao",
    date: title,
    custom_elements: [
      {
        content: [
          { _attr: { type: "html", "xml:base": url } },
          notes[title].html
        ]
      }
    ],
    description: `This week's topics: ${meta.sections.join(", ")}`
  });
});

Object.keys(posts).forEach(title => {
  const post = posts[title];
  const url = `https://philipliao.com/${post.slug}`;
  feed.item({
    title,
    description: post.custom_excerpt || post.excerpt,
    url,
    author: "Phil Liao",
    // custom_elements: [
    //   {
    //     content: [{ _attr: { type: "html", "xml:base": url } }, post.html]
    //   }
    // ],
    date: post.published_at
  });
});

// cache the xml to send to clients
let xml = feed.xml();

let rssFilePath = path.join(__dirname, "..", "public", "rss.xml");
fsPromises.writeFile(rssFilePath, xml);
