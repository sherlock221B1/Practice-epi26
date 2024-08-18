-- CreateTable
CREATE TABLE "Menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER DEFAULT 0,
    "isAvailable" BOOLEAN DEFAULT true,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenusCategories" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MenusCategories_pkey" PRIMARY KEY ("id")
);
