import { Box } from "@mui/material";

export default function TopBar() {
  return (
    <Box
      sx={{
        bgcolor: "#023047",
        color: "white",
        height: "13vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "17px",
        fontSize: "20px",
      }}
    >
      <h3>Foodie POS</h3>
      <h3>Natmauk</h3>
      <h3>Log Out</h3>
    </Box>
  );
}
