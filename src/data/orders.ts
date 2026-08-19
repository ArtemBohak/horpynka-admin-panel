import type { Order, OrderItem } from "@/types/domain";

export const mockOrders: Order[] = [
  {
    id: 1,
    status: "CLOSED",
    createdAt: "2024-08-19T08:15:00Z",
    updatedAt: "2024-08-19T08:18:00Z",
    orderPrice: 17000,
    paidWithCash: 17000,
    paidWithCard: 0,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 2,
    status: "CLOSED",
    createdAt: "2024-08-19T08:32:00Z",
    updatedAt: "2024-08-19T08:35:00Z",
    orderPrice: 12500,
    paidWithCash: 0,
    paidWithCard: 12500,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 3,
    status: "CLOSED",
    createdAt: "2024-08-19T09:05:00Z",
    updatedAt: "2024-08-19T09:10:00Z",
    orderPrice: 25000,
    paidWithCash: 10000,
    paidWithCard: 15000,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 4,
    status: "REFUNDED",
    createdAt: "2024-08-19T09:45:00Z",
    updatedAt: "2024-08-19T09:50:00Z",
    orderPrice: 7500,
    paidWithCash: 7500,
    paidWithCard: 0,
    refundedWithCash: 7500,
    refundedWithCard: 0,
  },
  {
    id: 5,
    status: "CLOSED",
    createdAt: "2024-08-19T10:20:00Z",
    updatedAt: "2024-08-19T10:23:00Z",
    orderPrice: 34500,
    paidWithCash: 0,
    paidWithCard: 34500,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 6,
    status: "CREATED",
    createdAt: "2024-08-19T10:55:00Z",
    updatedAt: "2024-08-19T10:55:00Z",
    orderPrice: 19000,
    paidWithCash: 0,
    paidWithCard: 0,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 7,
    status: "CLOSED",
    createdAt: "2024-08-18T14:10:00Z",
    updatedAt: "2024-08-18T14:15:00Z",
    orderPrice: 28000,
    paidWithCash: 28000,
    paidWithCard: 0,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 8,
    status: "CLOSED",
    createdAt: "2024-08-18T15:20:00Z",
    updatedAt: "2024-08-18T15:25:00Z",
    orderPrice: 15500,
    paidWithCash: 0,
    paidWithCard: 15500,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 9,
    status: "CLOSED",
    createdAt: "2024-08-17T11:30:00Z",
    updatedAt: "2024-08-17T11:35:00Z",
    orderPrice: 42000,
    paidWithCash: 20000,
    paidWithCard: 22000,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
  {
    id: 10,
    status: "PAID",
    createdAt: "2024-08-19T11:10:00Z",
    updatedAt: "2024-08-19T11:12:00Z",
    orderPrice: 9000,
    paidWithCash: 9000,
    paidWithCard: 0,
    refundedWithCash: 0,
    refundedWithCard: 0,
  },
];

export const mockOrderItems: OrderItem[] = [
  // Чек #1
  { id: 1, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 1 },
  { id: 2, sellingPrice: 5000, discount: null, discountType: "NONE", dishId: 3, productId: null, orderId: 1 },
  { id: 3, sellingPrice: 4500, discount: null, discountType: "NONE", productId: 2, dishId: null, orderId: 1 },
  
  // Чек #2
  { id: 4, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 2 },
  { id: 5, sellingPrice: 3500, discount: null, discountType: "NONE", productId: 8, dishId: null, orderId: 2 },
  
  // Чек #3
  { id: 6, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 3 },
  { id: 7, sellingPrice: 5500, discount: null, discountType: "NONE", dishId: 2, productId: null, orderId: 3 },
  { id: 8, sellingPrice: 6000, discount: null, discountType: "NONE", dishId: 5, productId: null, orderId: 3 },
  { id: 9, sellingPrice: 2200, discount: null, discountType: "NONE", productId: 1, dishId: null, orderId: 3 },
  { id: 10, sellingPrice: 2500, discount: null, discountType: "NONE", productId: 17, dishId: null, orderId: 3 },
  { id: 11, sellingPrice: 1300, discount: null, discountType: "NONE", productId: null, dishId: null, orderId: 3 },
  
  // Чек #4 (повернення)
  { id: 12, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 4 },
  
  // Чек #5
  { id: 13, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 5 },
  { id: 14, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 5 },
  { id: 15, sellingPrice: 4500, discount: null, discountType: "NONE", productId: 2, dishId: null, orderId: 5 },
  { id: 16, sellingPrice: 4500, discount: null, discountType: "NONE", productId: 18, dishId: null, orderId: 5 },
  { id: 17, sellingPrice: 2500, discount: null, discountType: "NONE", productId: 17, dishId: null, orderId: 5 },
  { id: 18, sellingPrice: 5000, discount: null, discountType: "NONE", dishId: 3, productId: null, orderId: 5 },
  
  // Чек #6 (відкритий)
  { id: 19, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 6 },
  { id: 20, sellingPrice: 4500, discount: null, discountType: "NONE", dishId: 4, productId: null, orderId: 6 },
  { id: 21, sellingPrice: 4000, discount: null, discountType: "NONE", dishId: 7, productId: null, orderId: 6 },
  { id: 22, sellingPrice: 3000, discount: null, discountType: "NONE", productId: 11, dishId: null, orderId: 6 },
  
  // Чек #7
  { id: 23, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 7 },
  { id: 24, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 7 },
  { id: 25, sellingPrice: 5000, discount: null, discountType: "NONE", dishId: 3, productId: null, orderId: 7 },
  { id: 26, sellingPrice: 5000, discount: null, discountType: "NONE", dishId: 3, productId: null, orderId: 7 },
  
  // Чек #8
  { id: 27, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 8 },
  { id: 28, sellingPrice: 4000, discount: null, discountType: "NONE", dishId: 7, productId: null, orderId: 8 },
  { id: 29, sellingPrice: 4000, discount: null, discountType: "NONE", productId: 7, dishId: null, orderId: 8 },
  
  // Чек #9
  { id: 30, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 9 },
  { id: 31, sellingPrice: 7500, discount: null, discountType: "NONE", dishId: 1, productId: null, orderId: 9 },
  { id: 32, sellingPrice: 5500, discount: null, discountType: "NONE", dishId: 2, productId: null, orderId: 9 },
  { id: 33, sellingPrice: 6000, discount: null, discountType: "NONE", dishId: 5, productId: null, orderId: 9 },
  { id: 34, sellingPrice: 4500, discount: null, discountType: "NONE", dishId: 4, productId: null, orderId: 9 },
  { id: 35, sellingPrice: 4500, discount: null, discountType: "NONE", productId: 2, dishId: null, orderId: 9 },
  { id: 36, sellingPrice: 5000, discount: null, discountType: "NONE", productId: 12, dishId: null, orderId: 9 },
  
  // Чек #10
  { id: 37, sellingPrice: 9000, discount: null, discountType: "NONE", dishId: 8, productId: null, orderId: 10 },
];
