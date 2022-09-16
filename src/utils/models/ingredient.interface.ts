import { IngredientType } from "./ingredient-type.type";
// Интерфейс и тип пригодятся когда переедем на TS
export interface Ingredient {
    _id:              string,
    name:             string,
    type:             IngredientType,
    proteins:         number,
    fat:              number,
    carbohydrates:    number,
    calories:         number,
    price:            number,
    image:            string,
    image_mobile:     string,
    image_large:      string,
    __v:              number
 };