import type { Dish, DishIngredient } from "@/types/domain";

export const mockDishes: Dish[] = [
  {
    id: 1,
    name: "Гречка з куркою",
    categoryId: 1,
    ownPrice: 4500,
    sellingPrice: 7500,
    selling: true,
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-15T14:30:00Z",
  },
  {
    id: 2,
    name: "Рис з овочами",
    categoryId: 1,
    ownPrice: 3200,
    sellingPrice: 5500,
    selling: true,
    createdAt: "2024-08-01T10:15:00Z",
    updatedAt: "2024-08-12T09:20:00Z",
  },
  {
    id: 3,
    name: "Борщ",
    categoryId: 3,
    ownPrice: 2800,
    sellingPrice: 5000,
    selling: true,
    createdAt: "2024-08-01T10:30:00Z",
    updatedAt: "2024-08-14T11:45:00Z",
  },
  {
    id: 4,
    name: "Суп курячий",
    categoryId: 3,
    ownPrice: 2500,
    sellingPrice: 4500,
    selling: true,
    createdAt: "2024-08-01T10:45:00Z",
    updatedAt: "2024-08-13T16:10:00Z",
  },
  {
    id: 5,
    name: "Котлета свиняча",
    categoryId: 1,
    ownPrice: 3500,
    sellingPrice: 6000,
    selling: true,
    createdAt: "2024-08-02T09:00:00Z",
    updatedAt: "2024-08-15T12:00:00Z",
  },
  {
    id: 6,
    name: "Пюре картопляне",
    categoryId: 2,
    ownPrice: 1500,
    sellingPrice: 3000,
    selling: true,
    createdAt: "2024-08-02T09:15:00Z",
    updatedAt: "2024-08-10T08:30:00Z",
  },
  {
    id: 7,
    name: "Салат овочевий",
    categoryId: 4,
    ownPrice: 2000,
    sellingPrice: 4000,
    selling: true,
    createdAt: "2024-08-02T09:30:00Z",
    updatedAt: "2024-08-14T15:20:00Z",
  },
  {
    id: 8,
    name: "Пюре з котлетою",
    categoryId: 1,
    ownPrice: 5000,
    sellingPrice: 9000,
    selling: true,
    createdAt: "2024-08-03T10:00:00Z",
    updatedAt: "2024-08-15T13:45:00Z",
  },
];

export const mockDishIngredients: DishIngredient[] = [
  // Гречка з куркою (id: 1)
  { id: 1, dishId: 1, ingredientId: 1 }, // Гречка
  { id: 2, dishId: 1, ingredientId: 3 }, // Куряче філе
  { id: 3, dishId: 1, ingredientId: 7 }, // Цибуля
  { id: 4, dishId: 1, ingredientId: 13 }, // Олія
  
  // Рис з овочами (id: 2)
  { id: 5, dishId: 2, ingredientId: 2 }, // Рис
  { id: 6, dishId: 2, ingredientId: 8 }, // Морква
  { id: 7, dishId: 2, ingredientId: 7 }, // Цибуля
  { id: 8, dishId: 2, ingredientId: 13 }, // Олія
  
  // Борщ (id: 3)
  { id: 9, dishId: 3, ingredientId: 10 }, // Буряк
  { id: 10, dishId: 3, ingredientId: 6 }, // Картопля
  { id: 11, dishId: 3, ingredientId: 9 }, // Капуста
  { id: 12, dishId: 3, ingredientId: 8 }, // Морква
  { id: 13, dishId: 3, ingredientId: 7 }, // Цибуля
  { id: 14, dishId: 3, ingredientId: 17 }, // Сметана
  
  // Суп курячий (id: 4)
  { id: 15, dishId: 4, ingredientId: 3 }, // Куряче філе
  { id: 16, dishId: 4, ingredientId: 6 }, // Картопля
  { id: 17, dishId: 4, ingredientId: 8 }, // Морква
  { id: 18, dishId: 4, ingredientId: 7 }, // Цибуля
  
  // Котлета свиняча (id: 5)
  { id: 19, dishId: 5, ingredientId: 4 }, // Свинина
  { id: 20, dishId: 5, ingredientId: 18 }, // Яйце
  { id: 21, dishId: 5, ingredientId: 7 }, // Цибуля
  
  // Пюре картопляне (id: 6)
  { id: 22, dishId: 6, ingredientId: 6 }, // Картопля
  { id: 23, dishId: 6, ingredientId: 17 }, // Сметана
  
  // Салат овочевий (id: 7)
  { id: 24, dishId: 7, ingredientId: 11 }, // Помідор
  { id: 25, dishId: 7, ingredientId: 12 }, // Огірок
  { id: 26, dishId: 7, ingredientId: 7 }, // Цибуля
  { id: 27, dishId: 7, ingredientId: 13 }, // Олія
  
  // Пюре з котлетою (id: 8)
  { id: 28, dishId: 8, ingredientId: 6 }, // Картопля
  { id: 29, dishId: 8, ingredientId: 4 }, // Свинина
  { id: 30, dishId: 8, ingredientId: 18 }, // Яйце
  { id: 31, dishId: 8, ingredientId: 17 }, // Сметана
];
