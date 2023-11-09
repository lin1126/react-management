import { useReducer } from 'react'

// useReducer
// useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer。

const countReducer = (state: { name: string; count: number }, action: any) => {
  // state 是只读的。即使是对象或数组也不要尝试修改它：
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - 1 }
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'reset':
      return { ...state, count: action.payload }
    default:
      throw new Error()
  }
}

const initCount = (initialCount: number) => {
  return { name: 'lcj', count: initialCount }
}

interface Counter {
  initialCount: number
}

const Counter = (prop: Counter) => {
  const { initialCount } = prop
  /**
   * useReducer(reducer, initialArg, init?)
   * @param reducer 处理状态更新的reducer
   * @param initialArg 状态初始值
   * @param init 可选，状态初始化函数
   */
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)
  const [count, dispatch] = useReducer(countReducer, {
    name: 'lcj',
    count: initialCount,
  })

  // 如果加入第三个参数，传入的参是第二个参数
  // const [count, dispatch] = useReducer(
  //   countReducer,
  //   initialCount,
  //   initCount
  // )

  const decClick = () => {
    dispatch({ type: 'dec' })
    console.log(count, 'count') // 还是旧的 state
  }

  const incClick = () => {
    const action = { type: 'inc' }
    dispatch(action)
    const nextState = countReducer(count, action)
    // 如果需要获取更新后的 state，可以手动调用 reducer 来得到结果：
    console.log(nextState, 'nextState')
  }

  return (
    <>
      <p>{count.name}</p>
      <p>{count.count}</p>
      <button onClick={decClick}>-1</button>
      <button onClick={incClick}>+1</button>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        reset
      </button>
    </>
  )
}

export default Counter
