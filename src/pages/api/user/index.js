import User from "@/models/User";
import dbConnect from "@/utils/Mongoose";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      dbConnect();
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      toast.error(error);
    }
  }
};

export default handler;
