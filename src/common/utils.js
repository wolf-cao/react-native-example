export default {
  sortBy(data, sortKey, reverse) {
    const that = this
    let reverseKey = 0

    switch (reverse) {
      case 'asc': {
        reverseKey = 1
        break
      }
      case 'desc': {
        reverseKey = -1
        break
      }
      default: {
        reverseKey = 2
        break
      }
    }

    const datas = data
      .map(item => {
        return {
          value: item,
          key: that.getValueByPath(item, sortKey)
        }
      })
      .sort((a, b) => {
        if (a.key > b.key) {
          return 1 * reverseKey
        } else if (a.key < b.key) {
          return -1 * reverseKey
        } else {
          return 0 * reverseKey
        }
      })
      .map(item => item.value)
    return datas
  },
  getValueByPath(object, prop) {
    prop = prop || ''
    const paths = prop.split('.')
    let current = object
    let result = null
    for (let i = 0, j = paths.length; i < j; i++) {
      const path = paths[i]
      if (!current) break

      if (i === j - 1) {
        result = current[path]
        break
      }
      current = current[path]
    }
    return result
  }
}
