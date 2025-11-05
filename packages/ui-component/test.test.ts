type Vector = { x: number; y: number }
type Point = { x: number; y: number }

function calculateIntersection(line1Start: Point, line1End: Point, line2Start: Point, line2End: Point): Point | null {
  const x1 = line1Start.x
  const y1 = line1Start.y
  const x2 = line1End.x
  const y2 = line1End.y
  const x3 = line2Start.x
  const y3 = line2Start.y
  const x4 = line2End.x
  const y4 = line2End.y

  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

  // 如果分母为零，则两条线平行或重合
  if (denominator === 0) {
    return null
  }

  const intersectX = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator
  const intersectY = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator

  // 检查交点是否在两个线段内
  const onLine1 =
    Math.min(x1, x2) <= intersectX &&
    intersectX <= Math.max(x1, x2) &&
    Math.min(y1, y2) <= intersectY &&
    intersectY <= Math.max(y1, y2)

  const onLine2 =
    Math.min(x3, x4) <= intersectX &&
    intersectX <= Math.max(x3, x4) &&
    Math.min(y3, y4) <= intersectY &&
    intersectY <= Math.max(y3, y4)

  if (onLine1 && onLine2) {
    return { x: intersectX, y: intersectY }
  } else {
    return null // 交点不在两个线段上
  }
}

function findCircleAndIntersections(A: Vector, B: Vector, C: Vector, radius: number) {
  // 判断方向（顺时针或逆时针）
  const angleDirection = determineAngleDirection(A, B, C)
  // 计算 BA 和 BC 的向量
  const BA = { x: A.x - B.x, y: A.y - B.y }
  const BC = { x: C.x - B.x, y: C.y - B.y }

  // 计算 BA 和 BC 的单位向量
  const lenBA = Math.sqrt(BA.x ** 2 + BA.y ** 2)
  const lenBC = Math.sqrt(BC.x ** 2 + BC.y ** 2)

  const unitBA = { x: BA.x / lenBA, y: BA.y / lenBA }
  const unitBC = { x: BC.x / lenBC, y: BC.y / lenBC }

  const dB1 = {
    x: B.x + unitBC.x * radius,
    y: B.y + unitBC.y * radius,
  }
  const dA1 = {
    x: A.x + unitBC.x * radius,
    y: A.y + unitBC.y * radius,
  }
  const dB2 = {
    x: B.x + unitBA.x * radius,
    y: B.y + unitBA.y * radius,
  }
  const dC2 = {
    x: C.x + unitBA.x * radius,
    y: C.y + unitBA.y * radius,
  }
  const center = calculateLineIntersection(dA1, dB1, dC2, dB2)

  const P1 = { x: B.x + unitBA.x * radius, y: B.y + unitBA.y * radius }
  const P2 = { x: B.x + unitBC.x * radius, y: B.y + unitBC.y * radius }

  return {
    center,
    tangentPoints: [P1, P2],
    angleDirection,
  }
}

type AngleDirection = 'Clockwise' | 'Counterclockwise' | 'Collinear'

function determineAngleDirection(A: Point, B: Point, C: Point): AngleDirection {
  const ABx = B.x - A.x
  const ABy = B.y - A.y
  const BCx = C.x - B.x
  const BCy = C.y - B.y

  // 计算叉积
  const crossProduct = ABx * BCy - ABy * BCx

  if (crossProduct > 0) {
    return 'Counterclockwise' // Counterclockwise
  } else if (crossProduct < 0) {
    return 'Clockwise' // Clockwise
  } else {
    return 'Collinear' // Collinear
  }
}

// function rotateVector(vector: Point, degrees: number): Point {
//   // 将角度转换为弧度
//   const radians = (Math.PI / 180) * degrees

//   // 计算旋转后的坐标
//   const rotatedX = vector.x * Math.cos(radians) - vector.y * Math.sin(radians)
//   const rotatedY = vector.x * Math.sin(radians) + vector.y * Math.cos(radians)

//   return { x: rotatedX, y: rotatedY }
// }

function calculateLineIntersection(A: Point, B: Point, C: Point, D: Point): Point | null {
  const x1 = A.x,
    y1 = A.y
  const x2 = B.x,
    y2 = B.y
  const x3 = C.x,
    y3 = C.y
  const x4 = D.x,
    y4 = D.y

  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

  // 如果分母为零，则两条线平行或重合
  if (denominator === 0) {
    return null // 没有交点
  }

  const intersectX = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator
  const intersectY = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator

  // 检查交点是否在两条线段上
  const onLineAB =
    Math.min(x1, x2) <= intersectX &&
    intersectX <= Math.max(x1, x2) &&
    Math.min(y1, y2) <= intersectY &&
    intersectY <= Math.max(y1, y2)

  const onLineCD =
    Math.min(x3, x4) <= intersectX &&
    intersectX <= Math.max(x3, x4) &&
    Math.min(y3, y4) <= intersectY &&
    intersectY <= Math.max(y3, y4)

  if (onLineAB && onLineCD) {
    return { x: intersectX, y: intersectY }
  } else {
    return null // 交点不在两条线段上
  }
}

{
  // 示例
  const A = { x: 0, y: 0 }
  const B = { x: 10, y: 0 }
  const C = { x: 10, y: 10 }
  const radius = 1

  const result = findCircleAndIntersections(A, B, C, radius)
  console.log('圆心 O:', result.center)
  console.log('切点 T1 和 T2:', result.tangentPoints)
  console.log('方向:', result.angleDirection)
}

{
  // 示例
  const A = { x: 0, y: 0 }
  const B = { x: 0, y: 10 }
  const C = { x: 10, y: 10 }
  const radius = 1

  const result = findCircleAndIntersections(A, B, C, radius)
  console.log('圆心 O:', result.center)
  console.log('切点 T1 和 T2:', result.tangentPoints)
  console.log('方向:', result.angleDirection)
}
