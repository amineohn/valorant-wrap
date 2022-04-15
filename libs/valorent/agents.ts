import axios from "axios";

const endpoint = `https://valorant-api.com/v1/agents`;

export const Agent = async () => {
  return await axios.get(endpoint);
};
