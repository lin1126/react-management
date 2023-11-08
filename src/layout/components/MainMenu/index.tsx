import type { MenuProps } from 'antd'
import { useState, useMemo } from 'react'

import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

import routes from '@/router/index'
import { formatRouter } from '@/utils/utils'

// 格式化路由工具
const MainMenu = () => {
  const useNavigateTo = useNavigate()

  const items = useMemo(() => {
    return formatRouter(routes[0].children)
  }, [routes])
  // 菜单项

  /**
   * @pathname - 当前路径名，例如 /用户
   * @search - 当前查询字符串，例如 ?page=10
   * @hash - 当前的哈希值，例如 ＃example。
   */
  const location = useLocation()
  console.log(location, 'locationlocationlocation')

  // 默认展开选中子菜单的父菜单
  let openDefaultKeys = ''
  if (!items.find((t: any) => t.key === location.pathname)) {
    items.some((t: any) => {
      if (
        t.children &&
        t.children.find((t1: any) => t1.key === location.pathname)
      ) {
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
