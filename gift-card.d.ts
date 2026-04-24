export interface GiftCard {
  id: number;
  code: string;
  reward_type: string;
  points_value: number;
  is_redeemed: number;
  is_archived: number;
  batch_id: string;
  created_at: string;
  expires_at: string | null;
  redeemed_by_account_id: number | null;
  redeemed_at: string | null;
  redeemed_by_email?: string | null;
}

export interface GiftCardBulkGenerateResult {
  batch_id: string;
  codes_generated: number;
  sample_codes: string[];
}

export interface GiftCardRedemptionStats {
  batch_id: string;
  total_codes: number;
  redeemed_count: number;
  unredeemed_count: number;
  redemption_rate: number;
  total_points_issued: number;
  batch_created_at: string;
  batch_expires_at: string | null;
}

export interface CardValidationResult {
  valid: boolean;
  reason?: string;
}
