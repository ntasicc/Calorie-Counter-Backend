export class CreateRecipeDto {
  readonly name: string;
  readonly image: string;
  readonly summary: string;
  readonly calories: number;
  readonly carbs: number;
  readonly fat: number;
  readonly protein: number;
}
