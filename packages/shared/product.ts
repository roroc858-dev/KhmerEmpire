export type ProductType = "RANK" | "CRATE_KEY";
export type PaymentStatus = "PENDING" | "APPROVED" | "REJECTED" | "REFUNDED";
export type DeliveryStatus = "PENDING" | "QUEUED" | "DELIVERED" | "FAILED";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryId: string;
  productType: ProductType;
  priceMinor: number;
  currency: string;
  enabled: boolean;
  requiresOnline: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  productNameSnapshot: string;
  quantity: number;
  unitPriceMinor: number;
}

export interface Order {
  id: string;
  publicOrderReference: string;
  userId: string;
  minecraftUuid?: string;
  paymentStatus: PaymentStatus;
  deliveryStatus: DeliveryStatus;
  totalMinor: number;
  currency: string;
  createdAt: string;
}
