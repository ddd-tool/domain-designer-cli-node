import chalk from 'chalk'

export default {
  print(...args: any[]) {
    console.log(...args)
  },
  printError(...args: any[]) {
    console.error(this.error(...toString(...args)))
  },
  printSuccess(...args: any[]) {
    console.log(this.success(...toString(...args)))
  },
  printWarn(...args: any[]) {
    console.log(this.warn(...toString(...args)))
  },
  printInfo(...args: any[]) {
    console.log(this.info(...toString(...args)))
  },
  printDebug(...args: any[]) {
    if (process.argv.includes('--debug')) {
      console.log(this.debug(...toString(...args)))
    }
  },
  error(...args: any[]) {
    return chalk.red(...toString(...args))
  },
  success(...args: any[]) {
    return chalk.green(...toString(...args))
  },
  warn(...args: any[]) {
    return chalk.yellow(...toString(...args))
  },
  info(...args: any[]) {
    return chalk.blueBright(...toString(...args))
  },
  debug(...args: any[]) {
    return chalk.gray(...toString(...args))
  },
}

function toString(...args: any[]): string[] {
  if (!args) {
    return ['']
  }
  return args.reduce((arr, item) => {
    if (!item) {
      arr.push('')
    }
    if (item instanceof Error) {
      arr.push(item.message + '\n' + item.stack)
    } else if (typeof item === 'string') {
      arr.push(item)
    } else if (typeof item === 'object') {
      arr.push(JSON.stringify(item, null, 2))
    } else {
      arr.push(item.toString())
    }
    return arr
  }, [] as string[])
}
