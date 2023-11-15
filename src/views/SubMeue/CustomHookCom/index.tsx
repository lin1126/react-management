import { Select } from 'antd'
import { useState } from 'react'
import DragCom from './components/DragCom'
import FireworksAnimationCom from './components/FireworksAnimationCom'

const CustomHookCom = () => {
  const options = [
    { value: 'drap', label: '自定义拖拽效果' },
    { value: 'fireworks', label: '烟花动画效果' },
  ]
  const [defaultValue, setDefaultValue] = useState('drap')
  const handleChange = (value: string) => {
    setDefaultValue(value)
  }

  const ShowCom: React.FC<any> = () => {
    let com = <></>
    switch (defaultValue) {
      case 'drap':
        com = <DragCom />
        break
      case 'fireworks':
        com = <FireworksAnimationCom />
        break
      default:
        break
    }
    return com
  }
  return (
    <div style={{ padding: '12px', display: 'flex', height: '100%' }}>
      <div style={{ width: 500 }}>
        <h1 style={{ textAlign: 'center', margin: '20px', fontSize: '20px' }}>
          自定义hooks
        </h1>
        <p>
          自定义hooks是在react-hooks基础上的一个拓展，可以根据业务需要制定满足业务需要的hooks，更注重的是逻辑单元。
        </p>
        <Select
          defaultValue={defaultValue}
          style={{ width: 240, marginTop: 20 }}
          options={options}
          onChange={handleChange}
        />
      </div>
      <div style={{ flex: 1 }}>{<ShowCom />}</div>
    </div>
  )
}

export default CustomHookCom
