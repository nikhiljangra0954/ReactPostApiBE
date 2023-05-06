// here we will create all Routes for the Posts

const express = require("express");
const { postModel } = require("../Model/postModel");

const postRoute = express.Router();

// <---------------Post Routes----------------->

postRoute.post("/add", async (req, res) => {
  const { name, title, description, Date } = req.body;
  if (!name || !title || !description || !Date) {
    res.send("Please fill all the details");
  }
  try {
    // save all the details in the mongodb
    const post = new postModel({
      name,
      title,
      description,
      Date,
    });
    await post.save();
    res.status(201).send("New Post created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

// --------------- Get All Post ---------------->

postRoute.get("/list", async (req, res) => {
  // Now we will get all the post from the datebase
  try {
    const posts = await postModel.find();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error });
  }
});

module.exports = {
  postRoute,
};
