import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sub_todo",
      },
    ], //array of subtodos
  },
  { timestamps: true }
);

export const Todos = mongoose.model("Todos", userSchema);
