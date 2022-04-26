import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PageNotFound = () => {
  return (
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <Typography
        data-cy="error-text"
        color="error.main"
        variant="h6"
        component="h1"
      >
        PageNotFound
      </Typography>
    </Box>
  );
};

export default PageNotFound;
