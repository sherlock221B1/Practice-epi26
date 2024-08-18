import { prisma } from "@/libs/prisma";
import { MenuCategories, Menus } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { it } from "node:test";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let menuCategories = await prisma.menuCategories.findMany();

  if (method === "GET") {
    console.log("menuC is", menuCategories);
    res.json(JSON.stringify(menuCategories));
  } else if (method === "POST") {
    const menuCategory: MenuCategories = JSON.parse(req.body);
    await prisma.menuCategories.create({
      data: {
        name: menuCategory.name,
      },
    });
    res.end();
  }else {
    res.status(405).send("not found")
  }
}
