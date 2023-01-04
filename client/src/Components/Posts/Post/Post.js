import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlinedIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  return (
    <>
      {/* <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>
              {post.message}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => {}}>
              <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => {}}>
              <DeleteIcon /> Delete
            </Button>
          </CardActions>
        </div>
      </Card> */}

      {/* mui  */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={post.selectedFile}
            title={post.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>

            <Typography
              className={classes.title}
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {post.message}
            </Typography>
            <div className={classes.overlay}>
              <Typography variant="h6" textAlign="right" component="p">
                {post.creator}
              </Typography>
              <Typography variant="body2" textAlign="right">
                {moment(post.createdAt).fromNow()}
              </Typography>
            </div>
            {(user?.result?.googleId === post?.creator ||
              user?.result?._id === post?.creator) && (
              <div className={classes.overlay2}>
                <Button
                  onClick={() => setCurrentId(post._id)}
                  style={{ color: "white" }}
                  size="small"
                >
                  <MoreHorizIcon fontSize="default" />
                </Button>
              </div>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="secondary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
