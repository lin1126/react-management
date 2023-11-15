import { useDrapDrop } from '@/hooks/useDrag'

interface Circle {
  size?: number | string
  backColor?: string
  ref?: any
  style?: {
    x: number
    y: number
  }
}

const Circle = (prop: Circle) => {
  const { size, backColor } = prop

  const config = {
    size: size || 120,
    backColor: backColor || 'pink',
  }
  const [style, dropRef]: any = useDrapDrop()

  
  return (
    <div
      ref={dropRef}
      style={{
        width: config.size,
        height: config.size,
        backgroundColor: config.backColor,
        borderRadius: '50%',
        cursor: 'grab',
        transform: `translate(${style.x}px, ${style.y}px)`,
      }}
    ></div>
  )
}

export default Circle
