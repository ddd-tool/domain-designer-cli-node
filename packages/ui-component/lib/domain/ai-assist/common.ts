export function svgToBase64(svgStr: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`
}

export function genId(offset = 0) {
  return offset + new Date().getTime().toString() + Math.floor(Math.random() * 100000)
}

export function readableSize(size: number): string {
  if (size < 1024) {
    return `${size} B`
  } else if (size < 1024 * 1024) {
    const kb = Math.ceil((size / 1024) * 100) / 100
    return `${kb.toFixed(2)} KB`
  } else if (size < 1024 * 1024 * 1024) {
    const mb = Math.ceil((size / 1024 / 1024) * 100) / 100
    return `${mb.toFixed(2)} MB`
  } else {
    const gb = Math.ceil((size / 1024 / 1024 / 1024) * 100) / 100
    return `${gb.toFixed(2)} GB`
  }
}
