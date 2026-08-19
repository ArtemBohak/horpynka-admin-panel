import type { Product } from "@/types/domain";
import { mockProducts } from "@/data/products";

class ProductsRepository {
  async getAll(): Promise<Product[]> {
    await this.simulateDelay();
    return [...mockProducts].sort((a, b) => a.name.localeCompare(b.name, "uk"));
  }

  async getById(id: number): Promise<Product | null> {
    await this.simulateDelay();
    return mockProducts.find((p) => p.id === id) ?? null;
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const productsRepository = new ProductsRepository();
