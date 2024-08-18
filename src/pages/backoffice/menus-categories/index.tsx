import BackOfficeLayout from "@/components/backOfficeLayouts";
import config from "@/config";
import { Box, Button } from "@mui/material";
import { MenuCategories } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MenusCategories() {
  const [menusCategories, setMenuCategories] = useState<MenuCategories[]>([]);
  const router = useRouter();

  useEffect(() => {
    getMenuCategories();
  }, []);
  const getMenuCategories = async () => {
    const response = await fetch(`${config.backofficeApiUrl}/menuCategories`);
    const menuCategoriesJsonStr = await response.json();
    const menuCategories = JSON.parse(menuCategoriesJsonStr);
    setMenuCategories(menuCategories);
  };

  if (menusCategories.length === 0) {
    return (
      <BackOfficeLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 2.5,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              router.push("/backoffice/menus-categories/addingMenuCategories");
            }}
          >
            Create New
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            mt: "20px",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fb8500",
              color: "#black",
              width: "fit-content",
              height: "fit-content",
              padding: "15px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <h1>There is no Menu Categories yet</h1>
          </Box>
        </Box>
      </BackOfficeLayout>
    );
  }

  return (
    <BackOfficeLayout>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 2.5 }}
      >
        <Button
          variant="contained"
          onClick={() => {
            router.push("/backoffice/menus-categories/addingMenuCategories");
          }}
        >
          Create New
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          mt: "20px",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {menusCategories.map((menuCategory) => {
          return (
            <Box
              sx={{
                backgroundColor: "#fb8500",
                color: "#black",
                width: "180px",
                height: "180px",
                padding: "10px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginRight: 3,
                marginBottom: 3,
                textAlign: "center",
              }}
            >
              <h1>{menuCategory.name}</h1>
            </Box>
          );
        })}
      </Box>
    </BackOfficeLayout>
  );
}
