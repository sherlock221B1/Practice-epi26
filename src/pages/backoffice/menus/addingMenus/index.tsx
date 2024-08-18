import BackOfficeLayout from "@/components/backOfficeLayouts";
import SingleSelect from "@/components/singleSelect";
import config from "@/config";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  menuClasses,
  TextField,
} from "@mui/material";
import { MenuCategories, Menus } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddingMenus() {
  const defaultMenu: Menus = {
    id: 1,
    name: "",
    price: 0,
    isAvailable: true,
  };

  const router = useRouter();
  const [menu, setMenu] = useState<Menus>(defaultMenu);
  const [selectedMenuCategoryId, setSelectedMenuCategoryId] = useState<
    number | undefined
  >();
  const [menuCategories, setMenuCategories] = useState<MenuCategories[]>([]);

  useEffect(() => {
    getMenuCategories();
  }, []);

  const getMenuCategories = async () => {
    const response = await fetch(`${config.backofficeApiUrl}/menuCategories`);
    const menuCategoriesJsonStr = await response.json();
    console.log(menuCategoriesJsonStr);
    const menuCategories = JSON.parse(menuCategoriesJsonStr);
    setMenuCategories(menuCategories);
    console.log(menuCategories.isAvailable);
  };

  const handleAddingMenu = async () => {
    await fetch(`${config.backofficeApiUrl}/menus`, {
      method: "POST",
      body: JSON.stringify({ ...menu, menuCategoryId: selectedMenuCategoryId }),
    });
    router.push("/backoffice/menus");
  };
  return (
    <Box
      sx={{
        bgcolor: "#023047",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#219ebc",
          width: "400px",
          height: "400px",
          borderRadius: "10px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ bgcolor: "white", width: "100%", borderRadius: "8px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Name"
            sx={{ width: "100%" }}
            value={menu.name}
            onChange={(e) => {
              setMenu({ ...menu, name: e.target.value });
            }}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            my: "20px",
            width: "100%",
            borderRadius: "8px",
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Price"
            type="number"
            sx={{ width: "100%" }}
            value={menu.price === 0 ? "" : menu.price}
            onChange={(e) => {
              console.log(e.target.value);
              setMenu({ ...menu, price: Number(e.target.value) });
            }}
          />
        </Box>
        <SingleSelect
          title="Menu Categories"
          selectedMenuCategoryId={selectedMenuCategoryId}
          setSelectedMenuCategoryId={setSelectedMenuCategoryId}
          items={menuCategories}
        />
        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Is Available"
            sx={{ color: "white" }}
            value={menu.isAvailable}
            onChange={() => {
              menu.isAvailable = !menu.isAvailable;
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#023047",
            ":hover": { bgcolor: "#8ecae6", color: "#023047" },
            mt: "10px",
          }}
          onClick={handleAddingMenu}
        >
          Add Menu
        </Button>
      </Box>
    </Box>
  );
}
