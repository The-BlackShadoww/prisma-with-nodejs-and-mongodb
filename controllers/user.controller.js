// bring in prisma and cookie
const prisma = require("../prisma");
const cookieToken = require("../utils/cookieToken");

// user signup
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if ([name, email, password].includes("")) {
      throw new Error("All fields are required");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// user login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if ([email, password].includes("")) {
      throw new Error("Please provide email and password");
    }

    // TODO: find a user with the email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // TODO: when there is no user, throw an error
    if (!user) {
      throw new Error("User does not exist");
    }

    // TODO: check if the password is correct
    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// user logout
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
