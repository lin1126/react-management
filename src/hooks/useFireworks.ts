import { useRef, useLayoutEffect, useMemo, useEffect } from 'react'

export const useFireworks = () => {
  console.log(444);
  
  // 图片下标
  const imgIndex = useRef(0)
  // 定时器
  const timeInter: any = useRef(null)
   // const timeInter = null
  const config = useRef({
    size: 0,
  })
  // 图片dom
  const imgDom: any = useRef(null)
  /* 获取当前的元素实例 */
  const currentDom = useRef(null)

  const [initImgDom, setImgDom, destoryTimer] = useMemo(() => {
    // 创建img节点
    const initImgDom = () => {
      const newDom: any = document.createElement('img')
      newDom.style = `display:none;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); width: ${config.current.size}px; height: ${config.current.size}px`
      newDom.src = `/images/Particular/${imgIndex.current}.png`
      return newDom
    }
    // 修改图片路径
    const changeImgDom = (index: number) => {
      imgDom.current.src = `/images/Particular/${index}.png`
    }
    // 暴露方法
    const setImgDom: any = () => {
      if (timeInter.current) return
      imgDom.current.style.display = 'block'
      initTimer()
    }
    const initTimer = () => {
      timeInter.current = setInterval(() => {
        imgIndex.current++
        changeImgDom(imgIndex.current)
        if (imgIndex.current > 62) {
          imgIndex.current = 0
          changeImgDom(imgIndex.current)
          imgDom.current.style.display = 'none'
          destoryTimer()
        }
      }, 100)
    }
    const destoryTimer = () => {
      if (timeInter.current) {
        clearInterval(timeInter.current)
      }
      timeInter.current = null
      imgIndex.current = 0
    }
    return [initImgDom, setImgDom, destoryTimer]
  }, [])

  // 界面渲染前加上节点
  useLayoutEffect(() => {
    const dom: any = currentDom.current
    config.current.size = Math.min(dom.offsetWidth, dom.offsetHeight)
    imgDom.current = initImgDom()
    dom.appendChild(imgDom.current)
  }, [])

  useEffect(() => {
    return () => {
      destoryTimer()
    }
  }, [])
  return [currentDom, setImgDom]
}
