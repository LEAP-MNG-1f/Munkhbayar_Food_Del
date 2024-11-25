import { Schema, model } from "mongoose";

const animeSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  year: Number,
});

const animeModel = model("anime", animeSchema);

export default animeModel;
