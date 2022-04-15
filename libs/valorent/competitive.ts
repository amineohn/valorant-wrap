import axios from "axios";

const endpoint = `https://valorant-api.com/v1/competitivetiers`;

export const Competitive = async () => {
  return await axios.get(endpoint);
};
