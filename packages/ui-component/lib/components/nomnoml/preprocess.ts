import { isClassNodeLike, isNodeLike } from '#lib/domain/common'
import { useDiagramAgg } from '#lib/domain/diagram-agg'
import { isDomainDesignInfo, type DomainDesignNote, type DomainDesignObject } from '@ddd-tool/domain-designer-core'

export function preprocessSvg(diagramAgg: ReturnType<typeof useDiagramAgg>, domStr: string): HTMLElement {
  const parser = new DOMParser()
  if (/^\s+$/.test(domStr)) {
    return document.createElement('svg')
  }
  const svgDoc = parser.parseFromString(domStr, 'image/svg+xml')
  const context = diagramAgg.commands.filterContext()
  for (const node of Object.values(context.getIdMap())) {
    if (!isNodeLike(node)) {
      continue
    }

    // =========================== common styles ============================
    const nodeDoc = svgDoc.querySelector(`[data-name="${node._attributes.__id}"]`)! as HTMLElement
    if (!nodeDoc) {
      continue
    }
    let index = 0
    for (const p of nodeDoc.querySelectorAll('path')) {
      if (index !== 0) {
        p.setAttribute('stroke-width', '1')
      }
      index++
    }
    const nodeTitle = nodeDoc.querySelector('[data-compartment="0"]')! as HTMLElement
    nodeTitle.parentElement!.classList.add('node')
    nodeTitle.onmouseover = () => {
      nodeTitle.parentElement!.classList.add('highlight-node')
    }
    nodeTitle.onmouseout = () => {
      nodeTitle.parentElement!.classList.remove('highlight-node')
    }
    nodeTitle.onclick = () => {
      handleActive(diagramAgg, node)
    }

    // =========================== note ============================
    if (node._attributes.note) {
      const noteDocs = nodeDoc.querySelectorAll(
        `text[data-compartment="${
          (node as Record<string, any>).inner ? Object.keys((node as Record<string, any>).inner).length + 1 : 1
        }"]`
      ) as unknown as HTMLElement[]
      handleNote(diagramAgg, noteDocs, node._attributes.note)
    }

    if (!isClassNodeLike(node)) {
      continue
    }

    // =========================== info ============================
    index = 0
    for (const key of Object.keys(node.inner)) {
      index++
      const info = node.inner[key]
      const infoId = info._attributes.__id
      const infoDoc = nodeDoc.querySelector(`[data-compartment="${index}"]`) as HTMLElement
      if (!infoDoc) {
        continue
      }
      infoDoc.dataset.id = infoId
      {
        const text = infoDoc.querySelector('text')!
        text.setAttribute('font-family', 'Monaco, Fira Code, consolas')
        text.setAttribute('font-size', '0.98rem')
      }

      setTimeout(() => {
        infoDoc.onmouseover = () => {
          for (const el of document.body.querySelectorAll(`[data-id="${infoId}"]`)) {
            console.debug('highlight-info', (el as HTMLElement).dataset.id)
            el.classList.add('highlight-info')
          }
        }
        infoDoc.onclick = () => {
          handleActive(diagramAgg, info)
        }
        infoDoc.onmouseout = () => {
          for (const el of document.body.querySelectorAll(`[data-id="${infoId}"]`)) {
            el.classList.remove('highlight-info')
          }
        }
      })
    }
  }

  let svg: HTMLElement | Element | null = svgDoc.querySelector('*')
  if (!svg) {
    return document.createElement('svg')
  }
  return svg as HTMLElement
}

function handleNote(diagramAgg: ReturnType<typeof useDiagramAgg>, els: HTMLElement[], note: DomainDesignNote) {
  if (!note || !els) {
    return ''
  }
  out: for (const i of note._attributes.inject) {
    const name = i._attributes.name
    const id = i._attributes.__id
    for (const el of els) {
      if (el.innerHTML.includes(`&lt;${name}&gt;`)) {
        el.innerHTML = el.innerHTML.replace(`&lt;${name}&gt;`, `&lt;<tspan data-id="${id}">${name}</tspan>&gt;`)
        continue out
      } else {
        continue
      }
    }
  }
  setTimeout(() => {
    for (const i of note._attributes.inject) {
      const id = i._attributes.__id
      const notes = document.body.querySelectorAll(
        `[data-compartment] [data-id="${id}"]`
      ) as unknown as SVGTSpanElement[]
      for (const note of notes) {
        if (note.onmouseover) {
          continue
        }
        note.onclick = () => {
          handleActive(diagramAgg, i)
        }
        note.onmouseover = () => {
          note.classList.add('highlight-note')
        }
        note.onmouseout = () => {
          note.classList.remove('highlight-note')
        }
      }
    }
  })
}

function handleActive(diagramAgg: ReturnType<typeof useDiagramAgg>, node: DomainDesignObject) {
  const needActive = diagramAgg.states.currentNode.value !== node._attributes.__id
  const isNode = !isDomainDesignInfo(node)

  if (needActive) {
    diagramAgg.commands.setCurrentNode(node._attributes.__id)
    document.body.querySelectorAll(`[data-name].node`)?.forEach((el) => el.classList.remove('active'))
    if (isNode) {
      document.body.querySelector(`[data-name="${node._attributes.__id}"].node`)?.classList.add('active')
    }
  } else {
    diagramAgg.commands.setCurrentNode(undefined)
    document.body.querySelectorAll(`[data-name].node`)?.forEach((el) => el.classList.remove('active'))
  }
  for (const el of document.body.querySelectorAll(`[data-id]`)) {
    if ((el as HTMLElement).dataset.id === node._attributes.__id && needActive) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  }
}
