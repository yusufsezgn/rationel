import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    commentOpen: {
      type: Boolean,
    },
    linkOpen: {
      type: Boolean,
    },
    comments: {
      type: Array,
    },
    userInfos: {
      name: String,
      surname: String,
      username: String,
      avatar: String,
      email: String,
      id: String,
    },
    philosopher: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
