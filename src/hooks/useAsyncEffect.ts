import { useEffect } from 'react'

/**
 * 自定义支持async await的useEffect
 * @param callback 回调函数
 * @param deps 依赖项
 */
const useAsyncEffect = (callback: Function, deps: []) => {
  useEffect(() => {
    callback()
  }, deps)
}

export default useAsyncEffect
