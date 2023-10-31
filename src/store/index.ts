/**
 * 创建store的的核心步骤分为两步
 * 1、使用toolkit的createSlice方法创建一个独立的子模块
 * 2、使用configureStore语法组合子模块
 */

import {configureStore} from '@reduxjs/toolkit'

import commonReducer from './modules/commonStore'

export default configureStore({
  reducer: {
    common: commonReducer
  }
})