import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from '../interface/recipe.interface';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    return await this.recipeModel.find();
  }

  async findOne(id: string): Promise<Recipe> {
    return await this.recipeModel.findOne({ _id: id });
  }

  async create(recipe: Recipe): Promise<Recipe> {
    const newRecipe = new this.recipeModel(recipe);
    return await newRecipe.save();
  }

  async delete(id: string): Promise<Recipe> {
    return await this.recipeModel.findByIdAndRemove(id);
  }

  async update(id: string, recipe: Recipe): Promise<Recipe> {
    return await this.recipeModel.findByIdAndUpdate(id, recipe, { new: true });
  }
}
