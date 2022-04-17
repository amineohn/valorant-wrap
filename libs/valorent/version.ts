import axios from "axios";

const endpoint = `https://valorant-api.com/v1/version`;

export const Version = async () => {
  return await axios.get(endpoint);
};
