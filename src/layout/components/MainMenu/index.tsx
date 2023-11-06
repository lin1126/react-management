import type { MenuProps } from 'antd'
import { useState } from 'react'

import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

import {
  DesktopOutlined,
  PieChartOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

import { routes } from '@/router/index'

const MainMenu = () => {
  const menuRoutes = routes[0].children
  console.log(menuRoutes, 'menuRoutes')

  const useNavigateTo = useNavigate()
  // 菜单项
  const items = [
    {
      label: '首页',
      key: '/',
      icon: <PieChartOutlined />,
    },
    {
      label: '关于',
      key: '/about',
      icon: <DesktopOutlined />,
    },
    {
      label: '子菜单',
      key: '/sub',
      icon: <PlayCircleOutlined />,
      children: [
        {
          label: '栏目一',
          key: '/SubMeueOne',
        },
        {
          label: '栏目二',
          key: '2',
        },
        {
          label: '栏目三',
          key: '3',
        },
      ],
    },
  ]

  /**
   * @pathname - 当前路径名，例如 /用户
   * @search - 当前查询字符串，例如 ?page=10
   * @hash - 当前的哈希值，例如 ＃example。
   */
  const location = useLocation()
  console.log(location, 'locationlocationlocation')

  // 默认展开选中子菜单的父菜单
  let openDefaultKeys = ''
  if (!items.find((t) => t.key === location.pathname)) {
    items.some((t) => {
      if (t.children && t.children.find((t1) => t1.key === location.pathname)) {
        openDefaultKeys = t.key
        return true
      }
    })
  }

  const [openKeys, setOpenKeys] = useState([openDefaultKeys])

  const onClickMenu = (e: { key: string }) => {
    console.log('点击菜单', e.key)
    useNavigateTo(e.key)
  }

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      openKeys={openKeys}
      onClick={onClickMenu}
      onOpenChange={onOpenChange}
    />
  )
}

export default MainMenu
