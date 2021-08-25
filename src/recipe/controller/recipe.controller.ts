import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { Recipe } from '../interface/recipe.interface';
import { RecipeService } from '../service/recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Recipe> {
    return this.recipeService.findOne(id);
  }

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeService.create(createRecipeDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Recipe> {
    return this.recipeService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateRecipeDto: CreateRecipeDto,
    @Param('id') id,
  ): Promise<Recipe> {
    return this.recipeService.update(id, updateRecipeDto);
  }
}
