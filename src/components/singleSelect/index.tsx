import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MenuCategories } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  selectedMenuCategoryId: number | undefined;
  setSelectedMenuCategoryId: Dispatch<SetStateAction<number | undefined>>;
  items: MenuCategories[];
}
export default function SingleSelect({
  title,
  selectedMenuCategoryId,
  setSelectedMenuCategoryId,
  items,
}: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedMenuCategoryId}
        label="Age"
        onChange={(e) => {
          setSelectedMenuCategoryId(Number(e.target.value));
        }}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
