import mongoose from "mongoose";

//schema data fiels like name email pass eyc last mai timestamps it will return two objec createdat updatedat
const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// model = kya model hoga kis k base pr hoga model k ander jo database mai 'users plural mai jayga '
export const Sub_todo = mongoose.model("sub_todo", subtodoSchema);
