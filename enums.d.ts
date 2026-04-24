/** Numeric union of class IDs (1–12) */
export type ClassId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** Numeric union of race IDs (1–6) */
export type RaceId = 1 | 2 | 3 | 4 | 5 | 6;

/** Numeric union of gender IDs (1 = male, 2 = female) */
export type GenderId = 1 | 2;

/** Structure of the LABELS object from src/utils/enums.js (Spanish) */
export interface GameLabels {
  classes: Record<ClassId, string>;
  races: Record<RaceId, string>;
  gender: Record<GenderId, string>;
  attributes: Record<number, string>;
  skills: Record<number, string>;
}

/** Structure of the LABELS_ENGLISH object from src/utils/enums.js */
export interface GameLabelsEnglish {
  classes: Record<ClassId, string>;
  races: Record<RaceId, string>;
  gender: Record<GenderId, string>;
  attributes: Record<number, string>;
  skills: Record<number, string>;
}

/** Faction mapping (FACCIONES) — keys 0–5 */
export interface Faccion {
  0: "Criminal";
  1: "Ciudadano";
  2: "Legion del Caos";
  3: "Armada Real";
  4: "Concilio de las Sombras";
  5: "Consejo Real";
}

/** City mapping (CIUDADES) — keys 1–9 */
export interface Ciudad {
  1: "Ullathorpe";
  2: "Nix";
  3: "Banderbill";
  4: "Lindos";
  5: "Arghal";
  6: "Arkhein";
  7: "Forgat";
  8: "Eldoria";
  9: "Penthar";
}
