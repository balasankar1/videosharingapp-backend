import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) res.status(401).json({ msg: "u r not authenticated" });

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
    if (err) res.status(403).json({ msg: "Token is not valid" });
    req.user = user;
    next();
  });
};
