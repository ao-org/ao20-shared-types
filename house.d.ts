/**
 * User data attached to a house owner.
 * Derived from House.controller.js (getHousesWithLandlords — user join fields).
 */
export interface HouseOwnerUser {
  name: string;
  genre_id: number;
  race_id: number;
  class_id: number;
  home_id: number;
  description: string;
  body_id: number;
  head_id: number;
  weapon_id: number;
  helmet_id: number;
  shield_id: number;
  is_dead: boolean;
}

/**
 * An occupied house with its landlord info.
 * Derived from House.controller.js (getHousesWithLandlords) and Landlord.controller.js (getAllLandlords).
 */
export interface House {
  description: string;
  owner_email: string;
  patron_tier: string | null;
  user?: HouseOwnerUser | null;
}

/**
 * A house without an owner (available for claiming).
 * Derived from House.controller.js (getFreeHouses).
 */
export interface FreeHouse {
  description: string;
  obj_index: number;
  patron_tier: string | null;
}
