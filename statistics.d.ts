/**
 * A row from the gold_statistics table.
 * Derived from Statistic.controller.js (getGoldStatistics — select *).
 */
export interface GoldStatistic {
  id: number;
  total_gold: number;
  datetime: string;
}

/**
 * An item statistics entry.
 * Derived from Statistic.controller.js (getItemsStatistics).
 */
export interface ItemStatistic {
  item_id: number;
  total_quantity: number;
  datetime: string;
}

/**
 * A character transfer record.
 * Derived from MarketStatistics.controller.js (getAllUserTransfersWithAO20Points).
 */
export interface CharTransferRecord {
  id: number;
  old_owner: number;
  new_owner: number;
  timestamp: string;
}

/**
 * A row from the patreon_shop_audit table.
 * Derived from MarketStatistics.controller.js (getAO20PointsShopAudit).
 */
export interface ShopAuditEntry {
  id: number;
  account_id: number;
  item_id: number;
  quantity: number;
  points_spent: number;
  time: string;
}

/**
 * Paginated response from the shop audit endpoint.
 * Derived from MarketStatistics.controller.js (getAO20PointsShopAudit).
 */
export interface ShopAuditResponse {
  results: ShopAuditEntry[];
  totalCount: number;
}
