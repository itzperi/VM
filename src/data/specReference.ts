// "Corrugated Carton Specification Reference": the original-data GEO asset.
// TODO(owner): fill ONLY from real production records (product, carton inner
// size, ply, board/BF, notes). The /carton-specification-reference route is
// registered automatically once there is at least one row, so no empty table
// is ever published.
export interface SpecRow {
  product: string; // e.g. '32-inch LED TV'
  cartonSize: string; // inner L x W x H in mm
  ply: string; // e.g. '7-ply'
  board: string; // e.g. 'BF 22, 150 GSM liners'
  notes?: string; // fitments, stacking, print
}

export const SPEC_ROWS: SpecRow[] = [];
