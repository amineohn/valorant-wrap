import type { NextApiResponse } from "next";
import { Weapons } from "../../libs/valorent/weapons";
export default async (_: any, res: NextApiResponse) => {
  const response = await Weapons();
  return res.status(200).json(response.data);
};
