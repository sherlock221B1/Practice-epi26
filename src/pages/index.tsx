import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ padding: "20px" }}>
      <h1>Foodie Home Page</h1>
    </Box>
  );
}
