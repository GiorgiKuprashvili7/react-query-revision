import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchUsers } from "../hooks/useFetchUsers";

const Home = () => {
  const [num, setnum] = useState(1);

  const { data, isLoading } = useFetchUsers(num);

  if (isLoading) {
    return (
      <Box sx={{ display: "grid", placeItems: "center", height: 200 }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Container>
      {data?.data.map((user: any, index: any) => {
        return (
          <Paper key={user.id} sx={{ padding: 2, marginTop: 2 }}>
            <Typography>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </Typography>
          </Paper>
        );
      })}

      <ButtonGroup variant="contained" sx={{ marginTop: 2 }}>
        <Button onClick={() => setnum((prev) => prev - 1)} disabled={num === 1}>
          prev
        </Button>
        <Button onClick={() => setnum((prev) => prev + 1)} disabled={num === 5}>
          next
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Home;
