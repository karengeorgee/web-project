import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [false, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;
  const salt = await bcrypt.genSalt();
  const hashedPassword = bcrypt.hashSync(password, salt);
  this.password = hashedPassword;

  next();
});

// comparePassword
userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

export default User;
