import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchUserDetails } from "../hooks/useFetchUserDetails";

const UserDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchUserDetails(id);

  if (isLoading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5">
        {data?.data.name} - {data?.data.email}
      </Typography>
    </Box>
  );
};

export default UserDetails;
