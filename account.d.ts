import type { Character } from "./user";
import type { MercadoPagoAccountData, StripeAccountData, Erc20AccountData } from "./payment";

export interface Account {
  id: number;
  email: string;
  date_created: string;
  is_banned: number;
  banned_by: string;
  ban_reason: string;
  credits: number;
  is_donor: number;
  credits_used: number;
  last_access: string;
  last_ip: string;
  is_active_patron: number;
  offline_patron_credits: number;
  last_patron_credits_payment: string;
  code_timestamp: string;
}

export interface AccountDetail {
  account_email: string;
  characters: Character[];
}

export interface AccountWithPayments extends Account {
  mercado_pago?: MercadoPagoAccountData;
  stripe?: StripeAccountData;
  erc20?: Erc20AccountData;
}

export type PatronTier = "AVENTURERO" | "HEROE" | "LEYENDA";
