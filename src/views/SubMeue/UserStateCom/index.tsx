import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'

/**
 * @useState const [state, setState] = useState(initialState);
 * 1、惰性State
 * initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
 * 2、复杂初始state的定义
 * 初始state需要通过复杂计算获得，则可以传入一个函数。在函数中计算并返回初始的state
 * useState派发更新函数的执行，就会让整个function组件从头到尾执行一次，
 * @如果更新的数据与上次一样 ，React讲跳过子组件的渲染以及effect的执行
 * 3、setState在react的事件处理中是一个异步调用，
 */

const UserStateCom = () => {
  console.log('start App render')
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count3: ', count)
  }, [count])

  const changeHandle = () => {
    setCount((count) => count + 1)
    console.log('count1', count)
    setCount((count) => count + 1)
    console.log('count2', count)
  }

  // 从打印顺序来看，使用 flushSync() 包裹之后的 setState() 是同步执行的,因为触发了两次start App render
  // 允许你强制 React 在提供的回调函数内同步刷新任何更新，这将确保 DOM 立即更新。
  // 大多数时候都不需要使用 flushSync，请将其作为最后的手段使用。
  const asyncChangeHandle = () => {
    // 这边还是打印0
    /**
     * 这是因为合成事件的事件处理器的调用是发生在当前的渲染周期中，
     * 如此编写代码，实际上产生了「closure stale」(过时闭包)的现象
     */
    flushSync(() => {
      setCount((count) => count + 1)
    })
    console.log('count1', count)
    console.log('h1Ref1', h1Ref.current?.innerText)

    flushSync(() => {
      setCount((count) => count + 1)
    })
    console.log('count2', count)
    console.log('h1Ref2', h1Ref.current?.innerText)
  }

  return (
    <>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={changeHandle}>+1(异步打印)</button>
      <button onClick={asyncChangeHandle}>+1(同步打印)</button>
    </>
  )
}
export default UserStateCom
