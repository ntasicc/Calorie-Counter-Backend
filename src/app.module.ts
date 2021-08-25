import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from 'enviroments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeController } from './recipe/controller/recipe.controller';
import { RecipeModule } from './recipe/modules/recipe.module';
import { RecipeService } from './recipe/service/recipe.service';

@Module({
  imports: [RecipeModule, MongooseModule.forRoot(environment.mongooseURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
