const mongoose = require("mongoose");
<<<<<<< HEAD

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));
=======
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://essa192168_db_user:Mohammed192168@cluster0.uhfbpvj.mongodb.net/todoApp",
  )
  .then(() => console.log("mongoDB connected"))
  .catch((e) => console.log(e));
  
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
