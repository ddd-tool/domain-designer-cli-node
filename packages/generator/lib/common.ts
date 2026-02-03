export namespace strUtil {
  export function stringToUpperCamel(str: string | String) {
    return str
      .trim()
      .split(str.includes('_') || str.includes('-') || str.includes(' ') ? /_|\s|-/ : /(?=[A-Z])/g)
      .map((s) => s.charAt(0).toUpperCase() + s.toLowerCase().slice(1))
      .join('')
  }
  export function stringToLowerCamel(str: string | String) {
    let first = true
    return str
      .trim()
      .split(str.includes('_') || str.includes('-') || str.includes(' ') ? /_|\s|-/ : /(?=[A-Z])/g)
      .map((s) => {
        if (first) {
          first = false
          return s.toLowerCase()
        }
        return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
      })
      .join('')
  }
  export function stringToLowerSnake(str: string | String) {
    str = str.trim()
    if (str.includes('_')) {
      return str.toLowerCase()
    }
    if (str.includes(' ') || str.includes('-')) {
      return str.split(/\s|-/).join('_').toLowerCase()
    }
    return camelToLowerSnake(str)
  }
  export function camelToUpperSnake(str: string | String) {
    return str
      .trim()
      .split(/(?=[A-Z])/g)
      .join('_')
      .toUpperCase()
  }
  export function camelToLowerSnake(str: string | String) {
    return str
      .trim()
      .split(/(?=[A-Z])/g)
      .join('_')
      .toLowerCase()
  }
  export function snakeToUpperCamel(str: string | String) {
    return str
      .trim()
      .split('_')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('')
  }
  export function lowerFirst(str: string | String) {
    return str.trim().charAt(0).toLowerCase() + str.slice(1)
  }
  export function upperFirst(str: string | String) {
    return str.trim().charAt(0).toUpperCase() + str.slice(1)
  }
}
