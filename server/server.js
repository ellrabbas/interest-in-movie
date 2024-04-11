const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const { authenticationToken } = require("./middleware/Auth");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("API is running");
});

const userRouter = require("./routes/UsersRouter");
const movieRouter = require("./routes/MoviesRouter");
const categoryRouter = require("./routes/CategoriesRouter");
const artistRouter = require("./routes/ArtistRouter");

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/artists", artistRouter);

app.use(errorHandler, authenticationToken);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
