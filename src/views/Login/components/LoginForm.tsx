import React, { useEffect, useState } from 'react'
import { LockOutlined, UserOutlined, VerifiedOutlined } from '@ant-design/icons'
import { Button, Form, Input, Radio, Flex } from 'antd'
import { Vertify } from '@alex_xu/react-slider-vertify'
import styles from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { getCaptcha } from '@/services/login'

const LoginForm: React.FC = () => {
  const useNavigateTo = useNavigate()
  const [loginForm] = Form.useForm()

  useEffect(() => {
    onChangeCode()
  }, [])

  const onFinish = (values: any) => {
    console.log(values, 'values')
    if (vertify) {
      if (values.username == 'admin' && values.password == 'admin123') {
        useNavigateTo('/')
      } else {
        setVertify(false)
        loginForm.resetFields()
        alert('请填写正确的账号密码')
      }
    } else {
      setVertifyShow(true)
    }
  }

  const onChangeCode = async () => {
    const data = await getCaptcha()
    console.log(data)
  }

  const [vertifyShow, setVertifyShow] = useState<boolean>(false)
  const [vertify, setVertify] = useState<boolean>(false)

  // 验证成功逻辑
  const onVertifySuccess = () => {
    setVertify(true)
    setVertifyShow(false)
  }

  return (
    <div className={styles.vertifyPage}>
      <div
        className={styles.vertifyBox}
        style={vertifyShow ? {} : { display: 'none' }}
      >
        <Vertify
          width={320}
          height={160}
          visible={vertifyShow}
          onSuccess={onVertifySuccess} //成功触发事件
          onFail={() => setVertify(false)} // 失败触发事件
        />
      </div>

      <Form
        form={loginForm}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="code"
          rules={[
            { required: true, message: 'Please input Verification code!' },
          ]}
        >
          <Flex justify="space-between">
            <div className={styles.flex1}>
              <Input
                prefix={<VerifiedOutlined className="site-form-item-icon" />}
                placeholder="Verification code"
              />
            </div>
            <img
              className={styles.codeImg}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              onClick={onChangeCode}
            />
          </Flex>
        </Form.Item>

        <Form.Item>
          <Radio
            checked={vertify}
            onClick={() => {
              vertify ? '' : setVertifyShow(true)
            }}
          >
            <div className={styles.vertifyText}>
              {vertify ? '验证成功' : '点击验证'}
            </div>
          </Radio>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm
