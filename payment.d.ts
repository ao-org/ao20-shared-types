export interface MercadoPagoAccountData {
  access_token?: string;
  refresh_token?: string;
  mercadopago_user_id: string;
  is_enabled: number;
  email?: string;
  fullname?: string;
  permalink?: string;
  thumbnail?: string;
  needsReauthorization?: boolean;
  error?: string;
}

export interface StripeAccountData {
  stripe_connect_id: string;
  is_enabled: boolean;
  login_links?: { url: string };
  enable_account?: { url: string };
}

export interface Erc20AccountData {
  erc20_wallet_address: string;
  is_enabled: boolean;
  link_created_at: number;
}

export interface Erc20PaymentDetails {
  payment_address: string;
  detected_at: string | null;
  amount_received: number | null;
  transaction_hash: string | null;
  token_contract: object | null;
  payment_status: string;
}
