import { MoonIcon, SunIcon } from '@ui/icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          onClick={() => setTheme('light')}
        >
          <SunIcon className="h-7 w-7 fill-primary stroke-primary" />
        </button>
      )
    } else {
      return (
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          onClick={() => setTheme('dark')}
        >
          <MoonIcon className="h-7 w-7 fill-primary stroke-primary" />
        </button>
      )
    }
  }
  return { renderThemeChanger }
}
