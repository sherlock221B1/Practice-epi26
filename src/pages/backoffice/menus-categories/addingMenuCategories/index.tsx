import BackOfficeLayout from "@/components/backOfficeLayouts";
import config from "@/config";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  TextField,
} from "@mui/material";
import { MenuCategories } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddingMenuCategories() {
  const defaultMenuCategory: Partial<MenuCategories> = {
    name: "",
  };

  const router = useRouter();
  const [menuCategory, setMenuCategory] =
    useState<Partial<MenuCategories>>(defaultMenuCategory);

  const handleAddingMenuCategory = async () => {
    await fetch(`${config.backofficeApiUrl}/menuCategories`, {
      method: "POST",
      body: JSON.stringify(menuCategory),
    });
    router.push("/backoffice/menus-categories");
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
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <h1>Adding Menu Categories</h1>
        </Box>

        <Box sx={{ bgcolor: "white", width: "100%", borderRadius: "8px" }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Name"
            sx={{ width: "100%" }}
            value={menuCategory.name}
            onChange={(e) => {
              setMenuCategory({ ...menuCategory, name: e.target.value });
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
          onClick={handleAddingMenuCategory}
        >
          Add MenuCategory
        </Button>
      </Box>
    </Box>
  );
}
