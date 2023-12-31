import { createContext } from 'react'


export const themes = {
  light: {
    color: '#000000',
    background: '#ffffff',
  },
  dark: {
    color: '#ffffff',
    background: '#000000',
  },
}

export const ThemeContext = createContext(themes.light)