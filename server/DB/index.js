const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://essa192168_db_user:Mohammed192168@cluster0.uhfbpvj.mongodb.net/todoApp",
  )
  .then(() => console.log("mongoDB connected"))
  .catch((e) => console.log(e));
  