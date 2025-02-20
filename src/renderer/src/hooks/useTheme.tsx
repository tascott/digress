import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'
type UseThemeReturn = {
  onToggleTheme: () => void
  isDarkTheme: boolean
}

const useTheme = (): UseThemeReturn => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const onToggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const isDarkTheme = theme === 'dark'

  return {
    onToggleTheme,
    isDarkTheme
  }
}

export default useTheme
