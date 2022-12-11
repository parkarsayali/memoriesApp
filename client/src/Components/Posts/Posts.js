import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, Skeleton } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts); //state is the global store and 'posts' is from reducers

  console.log("posts", posts);
  const classes = useStyles();

  return !posts.length ? (
    <Skeleton variant="rectangular" width={210} height={210} />
  ) : (
    <>
      <Grid
        className={classes.mainContainer}
        container
        alignItems="strech"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
