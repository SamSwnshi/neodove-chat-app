import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });

  res.cookie("jwt",token,{
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
  })
};

export default generateToken;
