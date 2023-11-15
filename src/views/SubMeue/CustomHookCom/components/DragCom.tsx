import Circle from './Circle'

const DragCom = () => {
  const circleList = [
    {
      size: 140,
      backColor: 'pink',
    },
    // {
    //   size: 130,
    //   backColor: 'red',
    // },
    // {
    //   size: 140,
    //   backColor: 'blue',
    // },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#eee',
        borderRadius: 8,
        overflowY: 'auto',
      }}
    >
      {circleList.map((t, index) => (
        <Circle key={index} size={t.size} backColor={t.backColor}></Circle>
      ))}
    </div>
  )
}

export default DragCom
