import { useState, useEffect } from 'react'
import useAsyncEffect from '@/hooks/useAsyncEffect'

/* 模拟数据交互 */
function getUserInfo(a: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: a,
        age: 16,
      })
    }, 1000)
  })
}

const subMeueOne = () => {
  const [count, setCount] = useState(0)

  interface MsgType {
    name?: string
    age?: number
  }

  const [userMessage, setUserMessage]: any = useState<MsgType>({
    name: '',
    age: 0,
  })

  // 模拟生命周期,异步调用不能直接用 async await 语法糖
  // useEffect(() => {
  //   // 异步获取接口
  //   getUserInfo('lcj').then((res) => {
  //     setUserMessage(res)
  //   })

  //   console.log('组件挂载了')
  //   return () => {
  //     console.log('组件卸载了')
  //   }
  // }, [])

  // 如果我们想要用 async effect 可以对effect进行一层包装
  useAsyncEffect(async () => {
    const res = await getUserInfo('lcj')
    setUserMessage(res)
  }, [])

  // 根据特定值去修改
  useEffect(() => {
    console.log('count更新后effect的值', count)
  }, [count])

  const handleClick = () => {
    console.log('count更新了')
    setCount(() => {
      if (count > 3) {
        return count
      } else {
        return count + 1
      }
    })
    // 调用setCount后不能马上获取更新后的数据
    console.log(count) // 第一次还是0
  }

  return (
    <>
      <p>UseEffect</p>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
      <br />
      <p>用户信息:</p>
      <p>姓名：{userMessage.name}</p>
      <p>年龄：{userMessage.age}</p>
    </>
  )
}

export default subMeueOne
