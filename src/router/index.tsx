import React, { lazy } from 'react'
import Home from '@/views/Home'
import Layout from '@/layout/index'
// 路由懒加载
// 懒加载模式的组件写法，外面需要套一层loading
const About = lazy(() => import('@/views/About'))

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
    ],
  },
]

export default routes
