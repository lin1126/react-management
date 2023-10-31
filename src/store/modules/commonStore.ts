/**
 * 创建store的的核心步骤分为两步
 * 1、使用toolkit的createSlice方法创建一个独立的子模块
 * 2、使用configureStore语法组合子模块
 */

import { createSlice } from '@reduxjs/toolkit'

const common = createSlice({
  // 模块名称独一无二
  name: 'common',
  // 初始数据
  initialState: {
    count: 20,
  },
  reducers: {
    add(state, action) {
      const num = action.payload || 1
      state.count += num
    },
  },
})

const { add } = common.actions
const commonReducer = common.reducer

export { add }

export default commonReducer
