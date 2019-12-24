let GhostContentAPI = require("@tryghost/content-api")
const fs = require('fs');
const path = require('path');


// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'bff3a3c5f399533e5040aa863b',
  version: "v3"
});

async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

async function run() {
  let posts = await getPosts()
  let postMap = posts.reduce((acc, curr) => {
    if (curr.slug) {
      acc[curr.slug] = curr
    }
    return acc
  }, {})

  console.log('Updating post data for:')
  console.log(Object.keys(postMap))

  var outputPath = path.join(__dirname, '..', 'posts', 'data.js');
  fs.writeFileSync(outputPath, `export default ${JSON.stringify(postMap)}`);
}

run()