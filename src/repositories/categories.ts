import type { Category } from "@/types/domain";
import { mockCategories } from "@/data/categories";

class CategoriesRepository {
  async getAll(): Promise<Category[]> {
    await this.simulateDelay();
    return [...mockCategories];
  }

  async getById(id: number): Promise<Category | null> {
    await this.simulateDelay();
    return mockCategories.find((c) => c.id === id) ?? null;
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 50 + Math.random() * 150));
  }
}

export const categoriesRepository = new CategoriesRepository();
