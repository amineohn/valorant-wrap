import axios from "axios";

const endpoint = `https://valorant-api.com/v1/maps`;

export const Maps = async () => {
  return await axios.get(endpoint);
};
