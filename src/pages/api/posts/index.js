import Posts from "@/models/Posts";
import dbConnect from "@/utils/Mongoose";
import { toast } from "react-toastify";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      dbConnect();
      const posts = await Posts.find();
      res.status(200).json({ posts });
    } catch (error) {
      toast.error(error);
    }
  }
};

export default handler;
