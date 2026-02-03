//函数节流
export function throttle<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timer: any = null
  const throttledFunction = function (this: any, ...args: Parameters<T>): void {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, wait)
    }
  }
  return throttledFunction as T
}

export function getOSType():
  | 'Windows Phone'
  | 'Windows'
  | 'Android'
  | 'Linux'
  | 'iOS'
  | 'MacOS'
  | 'Unknown OS' {
  const userAgent = window.navigator.userAgent

  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone'
  }
  if (/win/i.test(userAgent)) {
    return 'Windows'
  }
  if (/android/i.test(userAgent)) {
    return 'Android'
  }
  if (/linux/i.test(userAgent)) {
    return 'Linux'
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS'
  }
  if (/macintosh|mac os x/i.test(userAgent)) {
    return 'MacOS'
  }
  return 'Unknown OS'
}
