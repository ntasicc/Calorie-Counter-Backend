import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  summary: String,
  calories: Number,
  carbs: Number,
  fat: Number,
  protein: Number,
});
