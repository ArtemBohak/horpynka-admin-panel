import type { Inventory } from "@/types/domain";

const mockInventories: Inventory[] = [
  {
    id: 1,
    createdAt: "2024-08-19T09:00:00Z",
    finishedAt: null,
    status: "IN_PROGRESS",
    responsible: "Марія Коваленко",
    items: [
      { id: 1, name: "Гречка", measurementUnit: "g", expectedQuantity: 5000, actualQuantity: 4800 },
      { id: 2, name: "Рис", measurementUnit: "g", expectedQuantity: 4500, actualQuantity: 4500 },
    ],
  },
  {
    id: 2,
    createdAt: "2024-08-15T14:00:00Z",
    finishedAt: "2024-08-15T16:30:00Z",
    status: "WITH_DIFFERENCES",
    responsible: "Олександр Петренко",
    items: [
      { id: 3, name: "Гречка", measurementUnit: "g", expectedQuantity: 6000, actualQuantity: 5800 },
      { id: 4, name: "Рис", measurementUnit: "g", expectedQuantity: 5000, actualQuantity: 5000 },
      { id: 5, name: "Картопля", measurementUnit: "g", expectedQuantity: 8000, actualQuantity: 7500 },
      { id: 6, name: "Цибуля", measurementUnit: "g", expectedQuantity: 3000, actualQuantity: 3000 },
      { id: 7, name: "Морква", measurementUnit: "g", expectedQuantity: 3500, actualQuantity: 3200 },
    ],
  },
  {
    id: 3,
    createdAt: "2024-08-10T10:00:00Z",
    finishedAt: "2024-08-10T12:00:00Z",
    status: "COMPLETED",
    responsible: "Марія Коваленко",
    items: [
      { id: 8, name: "Гречка", measurementUnit: "g", expectedQuantity: 5500, actualQuantity: 5500 },
      { id: 9, name: "Рис", measurementUnit: "g", expectedQuantity: 4800, actualQuantity: 4800 },
      { id: 10, name: "Макарони", measurementUnit: "g", expectedQuantity: 3000, actualQuantity: 3000 },
    ],
  },
];

class InventoryRepository {
  async getAll(): Promise<Inventory[]> {
    await this.simulateDelay();
    return [...mockInventories].sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getById(id: number): Promise<Inventory | null> {
    await this.simulateDelay();
    return mockInventories.find((inv) => inv.id === id) ?? null;
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const inventoryRepository = new InventoryRepository();
