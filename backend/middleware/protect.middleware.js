import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRouter = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if(!token){
        res.statu(401).json({message: "Unauthorized - No Token Provided"})
    }

    const decode = jwt.verify(token,process.env.JWT_TOKEN);
    if(!decode){
        res.statu(401).json({message: "Unauthorized - Invalid Token "})
    }

    const user = await User.findById(decode.userId).select("-password");

    if(!user){
        return res.status(401).json({message: "User Not Found"});
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRouter middleware", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default protectRouter;
