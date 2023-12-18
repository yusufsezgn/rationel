import Posts from "@/models/Posts";
import User from "@/models/User";
import dbConnect from "@/utils/Mongoose";

const handler = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    try {
      await dbConnect();
      const { body } = req;
      const newPost = await new Posts(body);
      await newPost.save();

      const userId = body.userInfos.id;

      const userPost = await User.findByIdAndUpdate(userId, {
        $inc: { posts: 1 },
      });

      res.status(200).json({ newPost, userPost });
    } catch (error) {
      toast.error(error);
    }
  }
};

export default handler;
