import { Button } from 'antd'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '@/store/modules/commonStore'
import { StoreType } from '@/store/types'

const ShowBtn = (props: { t: number; val: number; onChangeVal: any }) => {
  const { t, val, onChangeVal } = props
  if (t === val) {
    return (
      <Button
        type="primary"
        danger
        onClick={() => {
          onChangeVal(t)
        }}
      >
        {t}
      </Button>
    )
  } else {
    return (
      <Button
        type="primary"
        onClick={() => {
          onChangeVal(t)
        }}
      >
        {t}
      </Button>
    )
  }
}

const Home = () => {
  // 获取仓库数据
  const { count } = useSelector((state: StoreType) => state.common)
  // 修改数据
  const dispatch = useDispatch()

  const btnList = [5, 10, 15,20]

  const [value, setValue] = useState(5)
  const onChangeVal = (val: number) => {
    setValue(val)
  }

  const addCount = () => {
    // 1. 生成action对象
    const action = add(value)
    // 2. 提交action进行数据更新
    dispatch(action)
  }
  return (
    <>
      <p>Home</p>
      <p style={{ fontSize: '32px', color: 'red' }}>{count}</p>
      {btnList.map((t) => (
        <ShowBtn
          key={t}
          t={t}
          val={value}
          onChangeVal={(t: number) => {
            onChangeVal(t)
          }}
        />
      ))}
      <br></br>
      <Button type="primary" danger onClick={addCount}>
        +{value}
      </Button>
    </>
  )
}

export default Home
