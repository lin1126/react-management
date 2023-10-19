import React, { lazy } from 'react'
import Home from '@/views/Home'
import Layout from '@/layout/index'
import Login from '@/views/Login/index.tsx'
// 路由懒加载
// 懒加载模式的组件写法，外面需要套一层loading
const About = lazy(() => import('@/views/About'))
const NotFound = lazy(() => import('@/views/404/index'))
const Test = lazy(() => import('@/components/Comp1'))
// import { Navigate } from 'react-router-dom'

const withLoadingCom = (com: JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>{com}</React.Suspense>
)

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
      },
      {
        path: '/about',
        element: withLoadingCom(<About></About>),
      },
      {
        path: '/test',
        element: withLoadingCom(<Test></Test>),
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '*',
    element: withLoadingCom(<NotFound></NotFound>),
  },
]

export default routes
