import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../utlis/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

    if (!user ||!isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

    generateToken(user._id, res);
    res.status(200).json({
      id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in login Controller", error.message);
    res.status(500).json({ message: "Invalid Server Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullname,username, password, email, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ message: "Password don't Match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      email,
    });

    if(newUser){
      generateToken(newUser._id,res)
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
      });
    }else{
      res.status(400).json({ message: "Invalid User Data" })
    }

    
  } catch (error) {
    console.log("Error in Signup Controller", error.message);
    res.status(500).json({ message: "Invalid Server Error" });
  }
};
export const logout = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logout Successfull"})
  
  }catch(error){
    console.log("Error in Logout Cotroller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
  };
  