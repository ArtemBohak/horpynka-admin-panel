import type { MenuItem } from "@/types/domain";
import { mockDishes } from "@/data/dishes";
import { mockProducts } from "@/data/products";

class MenuRepository {
  async getAll(): Promise<MenuItem[]> {
    await this.simulateDelay();
    
    const dishItems: MenuItem[] = mockDishes
      .filter((dish) => dish.selling)
      .map((dish) => ({
        id: `dish-${dish.id}`,
        kind: "DISH" as const,
        entityId: dish.id,
        name: dish.name,
        categoryId: dish.categoryId,
        sellingPrice: dish.sellingPrice,
        ownPrice: dish.ownPrice,
        selling: dish.selling,
        updatedAt: dish.updatedAt,
      }));

    const productItems: MenuItem[] = mockProducts
      .filter((product) => product.selling)
      .map((product) => ({
        id: `product-${product.id}`,
        kind: "PRODUCT" as const,
        entityId: product.id,
        name: product.name,
        categoryId: product.categoryId,
        sellingPrice: product.sellingPrice,
        ownPrice: product.ownPrice,
        selling: product.selling,
        updatedAt: product.updatedAt,
      }));

    return [...dishItems, ...productItems].sort((a, b) =>
      a.name.localeCompare(b.name, "uk")
    );
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const menuRepository = new MenuRepository();
