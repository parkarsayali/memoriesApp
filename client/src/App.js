import { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { getPosts } from "./actions/posts";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import { useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
