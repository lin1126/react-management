import { useState } from 'react'

// import './comp1.scss' //  全局引入，会影响其他组件

// 模块化引入
import style from './comp1.module.scss'
import Comp2 from '../Comp2'

const Comp = (props: { initState: number }) => {
  /**
   * @使用hook注意事项
   * 1、Hook不能在class组件中使用
   * 2、只能在函数最外层调用Hook，不要在循环、条件判断或者子函数中调用
   * 3、只能在React的函数组件中调用Hook，不要再其他js函数中调用
   */
  console.log(111)
  const [person, setPerson] = useState({
    name: 'lcj',
    age: '23',
  })
  const changePersonName = (name: string) => {
    setPerson(() => {
      return {
        ...person,
        name,
      }
    })
  }

  /**
   * @useState
   * 1、惰性State
   * initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
   * 2、复杂初始state的定义
   * 初始state需要通过复杂计算获得，则可以传入一个函数。在函数中计算并返回初始的state
   * @如果更新的数据与上次一样 ，React讲跳过子组件的渲染以及effect的执行
   */
  const [counter, setCounter] = useState(() => {
    console.log(props, 898)
    if (props.initState > 10) {
      return 100
    } else {
      return 0
    }
  })
  return (
    <div className={style.box}>
      <p>这是Com1里面的内容</p>
      <p>惰性加载: {counter}</p>
      <p>姓名：{person.name}</p>
      <p>年龄：{person.age}</p>
      <button onClick={() => setCounter(() => counter + props.initState)}>
        更改计数器的值
      </button>
      <button onClick={() => changePersonName('qll')}>更改对象的属性</button>

      <h1>子组件:useContext的使用</h1>
      <Comp2></Comp2>
    </div>
  )
}

export default Comp
