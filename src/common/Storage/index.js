// 具体使用方法:
// https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md

import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import StorageSync from './syncStorage'

let storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: 1000 * 3600 * 24,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

  // 如果storage中没有相应数据，或数据已过期，
  // 则会调用相应的sync方法，无缝返回最新数据。
  // sync方法的具体说明会在后文提到
  // 你可以在构造函数这里就写好sync的方法
  // 或是在任何时候，直接对storage.sync进行赋值修改
  // 或是写到另一个文件里，这里require引入
  sync: StorageSync
})

// save
export function storageSave(params) {
  storage.save({
    key: params.key,
    data: params.data,
    expires: params.expires || storage.defaultExpires
  })
}

// load
export function storageLoad(params) {
  return new Promise((resolve, reject) => {
    storage
      .load({
        key: params.key,
        autoSync: true,
        syncInBackground: true,
        syncParams: {
          extraFetchOptions: {
            // 各种参数
          },
          someFlag: true
        }
      })
      .then(res => {
        resolve && resolve(res)
      })
      .catch(error => {
        reject && reject(error)
      })
  })
}
