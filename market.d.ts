export type TransactionStatus =
  | "NOT_STARTED"
  | "PENDING"
  | "PROCESSED"
  | "CONFIRMED"
  | "FINISHED"
  | "FAILED";

export type PaymentGateway = "MercadoPago" | "Stripe" | "ERC20";

export interface UserTransaction {
  id: number;
  buyer_account_id: number;
  seller_account_id: number;
  user_id: number;
  price: number;
  status: TransactionStatus;
  mercadopago_checkout_preference_id: string | null;
  mercadopago_payment_id: string | null;
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  erc20_payment_address_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface ItemTransaction {
  id: number;
  item_id: number;
  item_quantity: number;
  user_id: number;
  status: TransactionStatus;
  mercadopago_checkout_preference_id: string | null;
  mercadopago_payment_id: string | null;
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  erc20_payment_address_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface AO20PointsTransaction {
  id: number;
  account_id: number;
  qty_points: number;
  status: TransactionStatus;
  mercadopago_checkout_preference_id: string | null;
  mercadopago_payment_id: string | null;
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  erc20_payment_address_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface ItemOnSale {
  item_id: number;
  item_quantity: number;
  price_in_pesos: number;
  price_in_usd?: number;
}

export interface AO20PointsOnSale {
  id: number;
  name: string;
  qty_points: number;
  price_in_pesos: number;
  price_in_usd?: number;
}
