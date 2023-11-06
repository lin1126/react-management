import { useState } from 'react'
import Comp1 from '@/components/Comp1'
import { themes, ThemeContext } from './context'

const subMeueOne = () => {
  const [thems, setThems] = useState(themes.dark)
  const onChangeMode = () => {
    setThems(thems == themes.light ? themes.dark : themes.light)
  }
  return (
    <ThemeContext.Provider value={thems}>
      <Comp1 initState={11}></Comp1>
      <button onClick={onChangeMode}>change mode</button>
    </ThemeContext.Provider>
  )
}

export default subMeueOne
