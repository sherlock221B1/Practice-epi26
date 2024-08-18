import { prisma } from "@/libs/prisma";
import { Menu } from "@mui/material";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const menuId = Number(req.query.id);

  const menuToBeUpdatedOrDeleted = await prisma.menus.findFirst({
    where: { id: menuId },
    include: { menusCategoriesAndMenus: true },
  });
  console.log("hello");
  if (!menuToBeUpdatedOrDeleted) {
    res.status(404).send("Not Found");
  }
  if (method === "GET") {
    res.json(JSON.stringify(menuToBeUpdatedOrDeleted));
  } else if (method === "DELETE") {
    console.log("hello motherfucker");
    await prisma.menus.delete({ where: { id: menuId } });

    res.end();
  }
  res.status(405).send("invalid method");
}
