type IngredientData = {
  _id: string;
  name: string;
  type?: string;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  calories?: number;
  price: number;
  image: string;
  image_mobile?: string;
  image_large?: string;
  __v?: number;
};

type IngredientType = { name: string; type: string };

export type { IngredientData, IngredientType };
