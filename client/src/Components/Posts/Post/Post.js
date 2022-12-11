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
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  console.log("post prop", post);
  const dispatch = useDispatch();

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
            <div className={classes.overlay2}>
              <Button style={{ color: "white" }} size="small">
                <MoreHorizIcon
                  fontSize="default"
                  onClick={() => setCurrentId(post._id)}
                />
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> &nbsp;Like &nbsp;
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon /> Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
