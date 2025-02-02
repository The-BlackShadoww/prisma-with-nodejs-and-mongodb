const prisma = require("../prisma");
const cookieToken = require("../utils/cookieToken");

// create a post
exports.createPost = async (req, res, next) => {
  try {
    const { slug, title, body, authorId } = req.body;

    // if ([title, body].includes("")) {
    //   throw new Error("All fields are required");
    // }

    const post = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: {
          connect: {
            id: authorId,
          },
        },
        // authorId: req.user.id,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// update a post
exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        body,
      },
    });

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// delete a post
exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    // const posts = await prisma.post.findMany({
    //   include: {
    //     author: true,
    //   },
    // });
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
