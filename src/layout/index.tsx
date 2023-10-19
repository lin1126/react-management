import { Breadcrumb, Layout, Button } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

import MainMenu from './components/MainMenu'

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const NavigateTo = useNavigate()

  const gotoLogin = () => {
    NavigateTo('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-side">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <MainMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            paddingLeft: '16px',
            paddingRight: '16px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Breadcrumb style={{ lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Button type="primary" onClick={gotoLogin}>
              登录
            </Button>
          </div>
        </Header>
        <Content
          style={{ margin: '16px 16px 0' }}
          className="site-layout-background"
        >
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center', lineHeight: '48px', padding: 0 }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
