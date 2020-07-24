/*
* Storage封装
* */
const STORAGE_KEY = 'mall'
export default {
  /**
   * 存储值
   * @param key
   * @param value
   * @param module_name
   */
  setItem (key, value, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name)
    }
    const val = this.getStorage()
    val[key] = value
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  /**
   * 获取值
   * @param key
   * @param module_name
   */
  getItem (key, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  /**
   * 获取全部值
   * @returns {any}
   */
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清除值
  clear (key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
