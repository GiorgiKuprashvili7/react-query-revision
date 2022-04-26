import {
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import UserDetails from "./components/UserDetails";
import { useAddUser } from "./hooks/useFetchUsers";

function App() {
  const { mutate } = useAddUser();

  useEffect(() => {
    mutate({ name: "gio", lastname: "ragaca" });
  }, [mutate]);

  return (
    <>
      <input type="email" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
