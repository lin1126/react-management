// import './comp1.scss' //  全局引入，会影响其他组件

// 模块化引入
import style from './comp1.module.scss'

const Comp = () => {
  return (
    <div className={style.box}>
      <p>这是Com1里面的内容</p>
    </div>
  )
}

export default Comp
