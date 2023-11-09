import { useCallback, useState, memo } from 'react'

// useCallback 是一个允许你在多次渲染中缓存函数的 React Hook。
// const cachedFn = useCallback(fn, dependencies)
// 这里应该提醒的是，useCallback ，
// 必须配合 react.memo pureComponent ，否则不但不会提升性能，还有可能降低性能
const UseCallbackCom = () => {
  const [counter, setCounter] = useState(1)

  const handleClick = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  // 如果不用useCallback包裹，仍然会导致子组件更新
  // const childClick = () => {
  //   console.log(1111);
  // }
  const childClick = useCallback(() => {
    console.log(1111)
  }, [])

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+1</button>
      <Child click={childClick}></Child>
    </>
  )
}

const Child = memo((prop: { click: Function }) => {
  const { click } = prop
  console.log('子组件更新了')
  return (
    <button
      onClick={() => {
        click()
      }}
    >
      hello world
    </button>
  )
})

export default UseCallbackCom
