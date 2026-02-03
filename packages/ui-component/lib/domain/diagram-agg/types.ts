export const EMPTY_STORY = '__Empty__'

export const Ranker = Object.freeze({
  NetworkSimplex: 'network-simplex',
  TightTree: 'tight-tree',
  LongestPath: 'longest-path',
} as const)

export type Ranker = Enum<typeof Ranker>

export const EdgeType = Object.freeze({
  Rounded: 'rounded',
  Hard: 'hard',
} as const)

export type EdgeType = Enum<typeof EdgeType>

export type RenderConfig = {
  ranker: Ranker
  padding: number
  fontSize: number
  edges: EdgeType
  bendSize: number
}

export function defaultRenderConfig(): RenderConfig {
  return {
    ranker: Ranker.NetworkSimplex,
    padding: 4,
    fontSize: 14,
    edges: EdgeType.Hard,
    bendSize: 0.3,
  }
}
