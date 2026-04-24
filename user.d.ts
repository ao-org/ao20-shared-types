export interface User {
  id: number;
  name: string;
  level: number;
  exp: number;
  elo: number;
  class_id: number;
  race_id: number;
  genre_id: number;
  head_id: number;
  body_id: number;
  weapon_id: number;
  shield_id: number;
  helmet_id: number;
  gold: number;
  bank_gold: number;
  status: number;
  is_banned: boolean;
  is_locked_in_mao: boolean;
  deleted: boolean;
  account_id: number;
  home_id: number;
}

export interface InventoryItem {
  item_id: number;
  amount: number;
  number: number;
}

export interface BankItem {
  item_id: number;
  amount: number;
  number: number;
}

export interface Skin {
  skin_id: number;
  type_skin: number;
  skin_equipped: number;
}

export interface Attributes {
  strength: number;
  agility: number;
  intelligence: number;
  constitution: number;
  charisma: number;
}

export type Skillpoints = Record<string, number>;

export interface UserExtraData {
  inventoryItem: InventoryItem[];
  bankInventoryItem: BankItem[];
  spells: string[];
  attributes: Attributes;
  skillpoints: Skillpoints;
  skins: Skin[];
}

export interface UserOnSale {
  name: string;
  level: number;
  price_in_mao: number;
  price_in_usd: number;
  class: string;
  race: string;
  status: string;
  is_guild_member?: boolean;
  has_spouse?: boolean;
  canvasImage?: string;
}

export interface Character {
  user_id: number;
  user_name: string;
  user_gold: number;
  user_bank_gold: number;
  inventory_items: InventoryItem[];
  bank_items: BankItem[];
}
