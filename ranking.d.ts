/**
 * A user entry in the ranking leaderboard.
 * Derived from User.controller.js (ranking method) and ranking_presenter.js (presentUser).
 */
export interface RankingUser {
  character_name: string;
  class_id: number;
  race_id: number;
  genre_id: number;
  head_id: number;
  level: number;
  exp: number;
  elo: number;
  total_kills: number;
  criminales_matados: number;
  ciudadanos_matados: number;
  puntos_pesca: number;
  deaths: number;
  killed_npcs: number;
  faction_score: number;
  is_locked_in_mao: boolean;
  /** Added by ranking_presenter.js */
  race_name: string;
  /** Added by ranking_presenter.js */
  gender_name: string;
  /** Added by ranking_presenter.js */
  class_name: string;
  /** Added by ranking_presenter.js */
  exp_next_level: number;
  /** Added by ranking_presenter.js (percentage 0–100) */
  exp_percentage: number;
}

/**
 * Valid sort-by columns for the ranking endpoint.
 * Derived from User.controller.js (rankingsAvailable array).
 */
export type RankingSortBy =
  | "elo"
  | "level"
  | "total_kills"
  | "total_gold"
  | "puntos_pesca"
  | "killed_npcs"
  | "criminales_matados"
  | "ciudadanos_matados"
  | "deaths"
  | "faction_score";
