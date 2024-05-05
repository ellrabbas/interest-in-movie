const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    occupation: { type: String, required: false },
    image: { type: String, required: false },
    gender: { type: String, required: false },
    nationality: { type: String, required: false },
    age: { type: Number, required: false },
    zodiacSign: { type: String, required: false },
    bio: { type: String, required: false },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    collection: "Artists",
  }
);

module.exports = mongoose.model("Artist", artistSchema);
