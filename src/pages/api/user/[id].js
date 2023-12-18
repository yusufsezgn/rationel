import User from "@/models/User";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    try {
      const id = req.query.id;
      const user = await User.findOne({ _id: id });
      res.status(200).json({ user });
    } catch (error) {
      toast.error(error);
    }
  }

  if (method === "PUT") {
    try {
      const id = req.query.id;
      const updatedUserData = req.body;

      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        { $set: updatedUserData }
      );

      res.status(200).json({ updatedUser });
    } catch (error) {
      console.log(error)
    }
  }
};

export default handler;
