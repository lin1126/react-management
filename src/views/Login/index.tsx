import React, { useEffect } from 'react'
import styles from './login.module.scss'
import initLoginBg from './bg'
import LoginForm from './components/LoginForm'
const Login = () => {
  useEffect(() => {
    initLoginBg()
    window.onresize = () => {
      initLoginBg()
    }
  }, [])

  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      {/* 登录部分 */}
      <div className={styles.loginBox}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>React通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Login
