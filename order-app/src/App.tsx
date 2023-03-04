import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Container, Link, Typography } from "@mui/material";
import Copyright from "./components/layout/Copyright";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}