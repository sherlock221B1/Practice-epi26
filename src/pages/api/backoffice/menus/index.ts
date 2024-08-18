import { prisma } from "@/libs/prisma";
import { Menus } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { it } from "node:test";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let menus = await prisma.menus.findMany();

  if (method === "GET") {
    res.json(menus);
  } else if (method === "POST") {
    const menu = JSON.parse(req.body);
    const menuCategoryId = menu.menuCategoryId;

    const addedMenu = await prisma.menus.create({
      data: {
        name: menu.name,
        price: menu.price,
        isAvailable: menu.isAvailable,
      },
    });

    await prisma.menusCategoriesAndMenus.create({
      data: { menuId: addedMenu.id, menuCategoriesId: menuCategoryId },
    });
    res.end();
  } else if (method === "PUT") {
    const menu = JSON.parse(req.body);
    console.log("menu is", menu);
    await prisma.menus.update({
      data: {
        name: menu.name,
        price: menu.price,
        isAvailable: menu.isAvailable,
      },
      where: { id: menu.id },
    });
    const sameMenuCategoryId =
      menu.menuCategoryId == menu.menusCategoriesAndMenus[0].menuCategoriesId;
    if (!sameMenuCategoryId) {
      console.log("not same");
      await prisma.menusCategoriesAndMenus.update({
        data: { menuCategoriesId: menu.menuCategoryId },
        where: { id: menu.menusCategoriesAndMenus[0].id },
      });
    }

    res.end();
  }
}
