/*
  Warnings:

  - You are about to drop the `MenusCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MenusCategories";

-- CreateTable
CREATE TABLE "MenuCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MenuCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenusCategoriesAndMenus" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "menuCategoriesId" INTEGER NOT NULL,

    CONSTRAINT "MenusCategoriesAndMenus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenusCategoriesAndMenus" ADD CONSTRAINT "MenusCategoriesAndMenus_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenusCategoriesAndMenus" ADD CONSTRAINT "MenusCategoriesAndMenus_menuCategoriesId_fkey" FOREIGN KEY ("menuCategoriesId") REFERENCES "MenuCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
