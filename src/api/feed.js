import { useCallback } from "react";

export default async function getFeed(callback) {
  const response = await fetch("http://192.168.1.104:3030/feed");
  const responsefeed = await response.json();
  console.log(responsefeed);
  callback(responsefeed);
}
