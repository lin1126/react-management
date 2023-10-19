import { Empty, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import style from './index.module.scss'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const goback = () => {
    navigate(-1)
  }
  return (
    <div className={style['empty-box']}>
      <Empty description="404，找不到该页面了！">
        <Button type="primary" onClick={goback}>
          返回上一页
        </Button>
      </Empty>
    </div>
  )
}

export default NotFound
