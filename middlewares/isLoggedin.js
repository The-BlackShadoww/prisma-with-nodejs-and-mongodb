// bring in prisma and cookie
const prisma = require("../prisma");
const jwt = require("jsonwebtoken");

const isLoggedin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("Not authorized");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });
    if (!user) {
      throw new Error("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = isLoggedin;