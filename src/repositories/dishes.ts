import type { Dish } from "@/types/domain";
import { mockDishes } from "@/data/dishes";

class DishesRepository {
  async getAll(): Promise<Dish[]> {
    await this.simulateDelay();
    return [...mockDishes].sort((a, b) => a.name.localeCompare(b.name, "uk"));
  }

  async getById(id: number): Promise<Dish | null> {
    await this.simulateDelay();
    return mockDishes.find((d) => d.id === id) ?? null;
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const dishesRepository = new DishesRepository();
