import type { Ingredient } from "@/types/domain";
import { mockIngredients } from "@/data/ingredients";

class IngredientsRepository {
  async getAll(): Promise<Ingredient[]> {
    await this.simulateDelay();
    return [...mockIngredients].sort((a, b) => a.name.localeCompare(b.name, "uk"));
  }

  async getById(id: number): Promise<Ingredient | null> {
    await this.simulateDelay();
    return mockIngredients.find((i) => i.id === id) ?? null;
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const ingredientsRepository = new IngredientsRepository();
