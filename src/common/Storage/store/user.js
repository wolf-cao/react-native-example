import { storageSave } from '../index'

export default {
  // sync方法的名字必须和所存数据的key完全相同
  // 方法接受的参数为一整个object，所有参数从object中解构取出
  // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
  user(params) {
    let {
      resolve,
      reject,
      syncParams: { extraFetchOptions, someFlag }
    } = params

    var userA = {
      name: 'AAAAAAA',
      age: 20,
      tags: ['geek', 'nerd', 'otaku']
    }

    if (!!userA) {
      storageSave({
        key: 'user',
        data: userA,
        expires: 1000 * 5
      })

      if (someFlag) {
        // 根据syncParams中的额外参数做对应处理
      }

      // 成功则调用resolve
      resolve && resolve(userA)
    } else {
      reject && reject(new Error('data parse error'))
    }
  }
}
