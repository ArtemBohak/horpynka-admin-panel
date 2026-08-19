import type { Order, OrderItem, Product, Dish } from "@/types/domain";
import { mockOrders, mockOrderItems } from "@/data/orders";
import { mockProducts } from "@/data/products";
import { mockDishes } from "@/data/dishes";

export interface OrderWithItems extends Order {
  items: OrderItem[];
}

export interface OrderItemWithDetails extends OrderItem {
  itemName: string;
  itemType: "dish" | "product";
}

class OrdersRepository {
  async getAll(): Promise<Order[]> {
    await this.simulateDelay();
    return [...mockOrders].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getById(id: number): Promise<OrderWithItems | null> {
    await this.simulateDelay();
    const order = mockOrders.find((o) => o.id === id);
    if (!order) return null;
    
    const items = mockOrderItems.filter((item) => item.orderId === id);
    return { ...order, items };
  }

  async getOrderItemsWithDetails(orderId: number): Promise<OrderItemWithDetails[]> {
    await this.simulateDelay();
    const items = mockOrderItems.filter((item) => item.orderId === orderId);
    
    return items.map((item) => {
      if (item.dishId) {
        const dish = mockDishes.find((d) => d.id === item.dishId);
        return {
          ...item,
          itemName: dish?.name ?? "Невідома страва",
          itemType: "dish" as const,
        };
      } else if (item.productId) {
        const product = mockProducts.find((p) => p.id === item.productId);
        return {
          ...item,
          itemName: product?.name ?? "Невідомий товар",
          itemType: "product" as const,
        };
      }
      return {
        ...item,
        itemName: "—",
        itemType: "product" as const,
      };
    });
  }

  private simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 300));
  }
}

export const ordersRepository = new OrdersRepository();
