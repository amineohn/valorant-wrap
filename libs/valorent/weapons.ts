import axios from "axios";

const endpoint = `https://valorant-api.com/v1/bundles`;

export const Weapons = async () => {
  return await axios.get(endpoint);
};
