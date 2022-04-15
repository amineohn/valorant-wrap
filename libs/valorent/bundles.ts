import axios from "axios";

const endpoint = `https://valorant-api.com/v1/bundles`;

export const Bundles = async () => {
  return await axios.get(endpoint);
};
