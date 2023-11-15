import { useFireworks } from '@/hooks/useFireworks'
import { useState } from 'react'
const FireworksAnimationCom = () => {
  const [count, setCount] = useState(0)
  const [myRef, setMyRef] = useFireworks()
  return (
    <div
      style={{
        width: '100%',
        height: 600,
        background: '#eee',
        borderRadius: 8,
        overflowY: 'auto',
        textAlign: 'center',
        paddingTop: 100,
      }}
    >
      <div
        ref={myRef}
        style={{
          position: 'relative',
          width: 200,
          height: 80,
          lineHeight: '70px',
          cursor: 'pointer',
          display: 'inline-block',
          border: '1px solid',
        }}
        onClick={() => {
          setMyRef()
        }}
      >
        点击触发烟花效果
      </div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
    </div>
  )
}

export default FireworksAnimationCom
