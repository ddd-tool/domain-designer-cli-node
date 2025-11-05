export const EMPTY_STORY = '__Empty__'

export const VALID_RANKERS = Object.freeze({
  NetworkSimplex: 'network-simplex',
  TightTree: 'tight-tree',
  LongestPath: 'longest-path',
})

export type Ranker = (typeof VALID_RANKERS)[keyof typeof VALID_RANKERS]

export const VALID_EDGE_TYPES = Object.freeze({
  Rounded: 'rounded',
  Hard: 'hard',
})

export type EdgeType = (typeof VALID_EDGE_TYPES)[keyof typeof VALID_EDGE_TYPES]

export type RenderConfig = {
  ranker: Ranker
  padding: number
  fontSize: number
  edges: EdgeType
  bendSize: number
}

export function defaultRenderConfig(): RenderConfig {
  return {
    ranker: VALID_RANKERS.NetworkSimplex,
    padding: 4,
    fontSize: 14,
    edges: VALID_EDGE_TYPES.Hard,
    bendSize: 0.3,
  }
}
