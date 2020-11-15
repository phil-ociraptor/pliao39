import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
  }
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

function getObject(params) {
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function putObject(params) {
  return new Promise((resolve, reject) => {
    s3.putObject(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

const getTyperacerGamesByUser = async username => {
  try {
    const res = await getObject({
      Bucket: "typeracer-data",
      Key: `users/${username}.json`
    });
    return JSON.parse(res.Body);
  } catch {
    return [];
  }
};

const putTyperacerGamesByUser = async (username, games) => {
  return await putObject({
    Bucket: "typeracer-data",
    Key: `users/${username}.json`,
    Body: JSON.stringify(games),
    ACL: "public-read",
    ContentType: "json"
  });
};

export { getTyperacerGamesByUser, putTyperacerGamesByUser };
