import {
  getTyperacerGamesByUser,
  putTyperacerGamesByUser
} from "../../../utils/aws";
import { getAllGamesSince } from "../../../utils/typeracer";
import mydata from "../../../data/typeracer.json";

export default async function handler(req, res) {
  let user = req.query.user;
  console.log("about to update user ", user);
  // Fetch from S3
  let games = await getTyperacerGamesByUser(user);
  console.log("games length in s3 is ", games.length);

  // Fetch additional games
  let start = 0;
  if (games.length > 1) {
    let mostRecent = games[games.length - 1];
    start = mostRecent.t;
  }
  let newGames = await getAllGamesSince(user, start);
  console.log("found more games in Typeracer ", newGames.length);

  // Update games and S3 if necessary
  if (newGames.length > 1) {
    console.log("updating games");
    games = games.concat(newGames);
    console.log("new games is", games.length);
    const s3response = await putTyperacerGamesByUser(user, games);
  }

  // Return
  console.log("success");
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(games));
}
