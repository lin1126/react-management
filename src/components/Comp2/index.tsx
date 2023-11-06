 import {useContext} from 'react'
 import { ThemeContext} from '@/views/SubMeueOne/context'
 
 /**
   * @useContext的使用
   * 接收一个content对象并返回该context的当前值，使用useContext可以实现跨级组件之间的数据通信
   */

const Comp2 = () => {
  const value = useContext(ThemeContext)
  return <div style={value}>Com2</div>
}

export default Comp2
