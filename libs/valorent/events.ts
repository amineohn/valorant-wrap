import axios from "axios";

const endpoint = `https://valorant-api.com/v1/events`;

export const Events = async () => {
  return await axios.get(endpoint);
};
