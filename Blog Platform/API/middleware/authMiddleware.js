import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = userDetails;

  next();
};

export default isLoggedIn;