import User from "@/models/User";
import dbConnect from "@/utils/Mongoose";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  await dbConnect();
  const { body } = req;
  if (req.method === "POST") {
    const isMatch = await User.findOne({ email: body.email });

    if (isMatch) {
      res.status(200).json({ message: "User Already Exists." });
    } else {
      try {
        const newUser = await new User(body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        await newUser.save();
        res.status(200).json({ message: "Created Successfully" });
      } catch (error) {
        toast.error(error);
      }
    }
  }
};

export default handler;
