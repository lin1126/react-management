import { useState } from 'react'

/**
 *
 * @param incBy 递增的数值
 * @returns increment递增内部值，log记录当前值。
 */
const createIncrement = (incBy: number) => {
  let value = 0

  const increment = () => {
    value += incBy
    console.log('incrementLog=>>>>>', value)
  }

  const message = `Current value is ${value}`
  // log() 是一个陈旧的闭包。闭包 log() 捕获 message 了具有 "Current value is 0"
  // 即使 value 变量在调用 increment() 时多次递增，该 message 变量也不会更新，并且始终保持过时的值 "Current value is 0" 。
  const log = () => {
    console.log(message)
  }
  return [increment, log]
}

/**
 * @修复方式
 * 将message移到log方法里面
 */

const createIncrementFix = (incBy: number) => {
  let value = 0

  const increment = () => {
    value += incBy
    console.log('incrementLog=>>>>>', value)
  }

  const log = () => {
    // message 每次 log() 调用时访问实际 value 变量。
    const message = `Current value is ${value}`
    console.log(message)
  }
  return [increment, log]
}

const ClosureStaleCom = () => {
  const [increment, log] = createIncrement(1)
  const [incrementFix, logFix] = createIncrementFix(1)

  const [count, setCount] = useState(0)
  /**
   * 1 秒的延迟异步递增计数器
   * 快速单击 2 次“增加异步”按钮。计数器仅由 1 更新，而不是预期的 2
   */
  const handleClickAsync = () => {
    setTimeout(function delay() {
      setCount(count + 1)
    }, 1000)
  }

  /**
   * 采用函数式，
   * 当一个基于前一个状态返回新状态的回调被提供给状态更新函数时，React 会确保将最新的状态值作为该回调的参数提供：
   */
  const handleClickAsyncFix = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1)
    }, 1000)
    console.log(count)
  }

  return (
    <>
      <h1>ClosureStaleCom</h1>
      <button
        onClick={() => {
          increment()
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          log()
        }}
      >
        打印
      </button>

      <br />
      <h1>修复后=========</h1>
      <button
        onClick={() => {
          incrementFix()
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          logFix()
        }}
      >
        打印
      </button>
      <div style={{ height: '20px' }}></div>

      <h1>useState()中的过时闭包</h1>
      <div>{count}</div>
      <button onClick={handleClickAsync}>Increase async</button>
      <button onClick={handleClickAsyncFix}>Increase async Fix</button>
    </>
  )
}

export default ClosureStaleCom
