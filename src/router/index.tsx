import React, { lazy } from 'react'
import Home from '@/views/Home'
import Layout from '@/layout/index'
import Login from '@/views/Login/index.tsx'

// 路由懒加载
// 懒加载模式的组件写法，外面需要套一层loading
const About = lazy(() => import('@/views/About'))
const NotFound = lazy(() => import('@/views/404/index'))
const UseContextCom = lazy(() => import('@/views/SubMeue/UseContextCom/index'))
const UseEffectCom = lazy(() => import('@/views/SubMeue/UseEffectCom'))
const UseReducerCom = lazy(() => import('@/views/SubMeue/UseReducerCom'))
const UseCallbackCom = lazy(() => import('@/views/SubMeue/UseCallbackCom'))
const UserStateCom = lazy(() => import('@/views/SubMeue/UserStateCom'))
const ClosureStaleCom = lazy(() => import('@/views/SubMeue/ClosureStaleCom'))
const CustomHookCom = lazy(() => import('@/views/SubMeue/CustomHookCom'))
// import { Navigate } from 'react-router-dom'

// 引入图标
import {
  DesktopOutlined,
  PieChartOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

const routes = [
  // {
  //   path: '/',
  //   element: <Navigate to="/home" />,
  // },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        element: <Home></Home>,
        index: true,
        meta: {
          name: '首页',
          icon: <PieChartOutlined />,
        },
      },
      {
        path: '/about',
        element: <About></About>,
        meta: {
          name: '关于',
          icon: <DesktopOutlined />,
        },
      },
      {
        path: '/SubMeue',
        meta: {
          name: 'react-hooks',
          icon: <PlayCircleOutlined />,
        },
        children: [
          {
            path: 'usecontext',
            element: <UseContextCom></UseContextCom>,
            meta: {
              name: 'useContext',
              menuShow: true,
            },
          },
          {
            path: 'userstateCom',
            element: <UserStateCom></UserStateCom>,
            meta: {
              name: 'userState',
              menuShow: true,
            },
          },
          {
            path: 'useeffect',
            element: <UseEffectCom></UseEffectCom>,
            meta: {
              name: 'UseEffect',
            },
          },
          {
            path: 'useReducerCom',
            element: <UseReducerCom></UseReducerCom>,
            meta: {
              name: 'useReducer',
            },
          },
          {
            path: 'UseCallbackCom',
            element: <UseCallbackCom></UseCallbackCom>,
            meta: {
              name: 'UseCallback',
            },
          },
          {
            path: 'ClosureStaleCom',
            element: <ClosureStaleCom></ClosureStaleCom>,
            meta: {
              name: 'ClosureStale（过时闭包）',
            },
          },
          {
            path: 'CustomHookCom',
            element: <CustomHookCom></CustomHookCom>,
            meta: {
              name: '自定义Hook',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]

export default routes
