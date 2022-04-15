import axios from "axios";

const endpoint = `https://valorant-api.com/v1/seasons`;
const endpointtwo = `https://valorant-api.com/v1/seasons/competitive`;

export const Seasons = async () => {
  return await axios.get(endpoint);
};
export const SeasonsCompetitive = async () => {
  return await axios.get(endpointtwo);
};
