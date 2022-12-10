import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    console.log("getPosts", postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ messsage: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  console.log("id", _id);

  const post = req.body;
  console.log(post);

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with this ID");
  }

  const updatedPost = await postMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  console.log("updatedPost", updatedPost);

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with this ID");
  }
  await postMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
