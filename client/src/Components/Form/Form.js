import { useStyles } from "./styles";
import { Typography, TextField, Button, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };

  const handleCreatorChange = () => {};

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" display="flex" justifyContent="center">
            {currentId ? "Editing" : "Creating"} a Memory
          </Typography>
          <div
            display="flex"
            justifycontent="center"
            style={{ padding: "2rem" }}
          >
            <label>Creator</label>
            <TextField
              name="Creator"
              placeholder="Creator"
              variant="outlined"
              sx={{ pt: 2 }}
              fullWidth
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <label>title</label>

            <TextField
              name="title"
              placeholder="title"
              variant="outlined"
              sx={{ pt: 2 }}
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <label>message</label>

            <TextField
              name="message"
              placeholder="message"
              variant="outlined"
              sx={{ pt: 2 }}
              fullWidth
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
            <label>tags</label>

            <TextField
              name="tags"
              placeholder="tags"
              variant="outlined"
              sx={{ pt: 2 }}
              fullWidth
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
          </div>

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ pt: 1 }}
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
            sx={{ mt: 1 }}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
