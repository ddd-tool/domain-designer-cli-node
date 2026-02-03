import type { RenderConfig } from '#lib/domain/diagram-agg/types'

export default function (config: RenderConfig) {
  return `
#.command: visual=class fill=#aec6cf title=bold
#.facadeCommand: visual=class fill=#779fae title=bold
#.readModel: visual=class fill=#77dd77 title=bold
#.aggregation: visual=class fill=#fdfd9d title=bold
#.service: fill=#eee8d5 title=bold
#.system: fill=#eee8d5 title=bold
#.event: visual=class fill=#ffcb81 title=bold
#.policy: fill=#b6a2db title=bold
// #.actor: padding=10

#padding: ${config.padding}
#spacing: 40
#edgeMargin: 0
#lineWidth: 2.5
#leading: 1.35
#zoom: 1
#font: Times New Roman //consolas,Monaco
#fontSize: ${config.fontSize}
#ranker: ${config.ranker}
#edges: ${config.edges}
#bendSize: ${config.bendSize}

`
}
