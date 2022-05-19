import axios from "axios";

const endpoint = `https://valorant-api.com/v1/contracts`;

export const Contracts = async () => {
  return await axios.get(endpoint);
};
