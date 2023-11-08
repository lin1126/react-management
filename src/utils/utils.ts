/**
 * 构造路由结构
 * @param data 路由数据源
 * @param label 将路由name转化为的字段
 * @param key 将路由path转化为的字段
 */
export const formatRouter = (data: any, label?: string, key?: string) => {
  let config = {
    label: label || 'label',
    key: key || 'key',
  }

  const formatList: any = []
  // if (t.meta) {
  //   if (t.meta.menuShow === undefined || t.meta.menuShow) {
  //     return true
  //   } else {
  //     return false
  //   }
  // } else {
  //   return true
  // }
  console.log(data, 'data')

  const buildChildrenRouter = (
    list: any,
    retList: any,
    fatharPath?: string
  ) => {
    for (let [index, t] of list.entries()) {
      if (t.meta) {
        if (t.meta.menuShow === undefined || t.meta.menuShow) {
          retList.push({
            [config.label]: t.meta.name,
            [config.key]: fatharPath ? `${fatharPath}/${t.path}` : t.path || '',
            icon: t.meta.icon,
          })
          if (t.children) {
            retList[index].children = retList[index].children || []
            buildChildrenRouter(t.children, retList[index].children, t.path)
          }
        }
      } else {
        formatList.push(t)
      }
    }
  }

  buildChildrenRouter(data, formatList)
  console.log(formatList, 'routerData')
  return formatList
}
