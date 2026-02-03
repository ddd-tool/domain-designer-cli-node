import fs from 'fs'
import path from 'path'

/**
 * 递归复制文件夹内容
 * @param {string} src 源文件夹路径
 * @param {string} dest 目标文件夹路径
 * @param {object} opts 配置选项
 * @param {string[]} [opts.ignore] 要忽略的文件或文件夹名称
 */
export function copyFolderRecursive(
  src: string,
  dest: string,
  opts: { ignore?: string[]; pattern?: RegExp } = {},
) {
  // 检查源文件夹是否存在
  if (!fs.existsSync(src)) {
    throw new Error(`Source folder does not exist: ${src}`)
  }

  // 如果目标文件夹不存在，则创建
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  // 读取源文件夹中的所有文件和子文件夹
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name) // 源路径
    const destPath = path.join(dest, entry.name) // 目标路径

    // 检查是否需要忽略
    if (opts.ignore && opts.ignore.includes(entry.name)) {
      continue // 跳过忽略的文件或文件夹
    }
    if (opts.pattern && !opts.pattern.test(entry.name)) {
      continue // 跳过不匹配的文件或文件夹
    }

    if (entry.isDirectory()) {
      // 如果是文件夹，递归复制
      copyFolderRecursive(srcPath, destPath)
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// 递归删除
export function deleteFolderRecursive(path: string) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = path + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}
