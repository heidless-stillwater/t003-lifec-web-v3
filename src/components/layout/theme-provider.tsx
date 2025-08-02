'use client'

import * as React from 'react'
import { appThemes, type ThemeDefinition, type ThemeMode, type ThemeCategory, defaultTheme } from '@/lib/themes'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultMode?: ThemeMode
  defaultCategory?: ThemeCategory
  defaultThemeName?: string
  storageKey?: string
}

type ThemeProviderState = {
  mode: ThemeMode
  category: ThemeCategory
  themeName: string
  currentTheme: ThemeDefinition | null
  setMode: (mode: ThemeMode) => void
  setTheme: (category: ThemeCategory, name: string) => void
  toggleMode: () => void
}

const initialState: ThemeProviderState = {
  mode: defaultTheme.mode,
  category: defaultTheme.category,
  themeName: defaultTheme.name,
  currentTheme: null,
  setMode: () => null,
  setTheme: () => null,
  toggleMode: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultMode = defaultTheme.mode,
  defaultCategory = defaultTheme.category,
  defaultThemeName = defaultTheme.name,
  storageKey = 'app-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [mode, setModeState] = React.useState<ThemeMode>(defaultMode)
  const [category, setCategoryState] = React.useState<ThemeCategory>(defaultCategory)
  const [themeName, setThemeNameState] = React.useState<string>(defaultThemeName)

  // Find current theme from nested themes object
  const getCurrentTheme = React.useCallback((cat: ThemeCategory, name: string): ThemeDefinition | null => {
    const themes = appThemes[cat]
    return themes.find(theme => theme.name === name) || null
  }, [])

  const [currentTheme, setCurrentTheme] = React.useState<ThemeDefinition | null>(
    getCurrentTheme(category, themeName)
  )

  React.useEffect(() => {
    const root = window.document.documentElement

    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    root.classList.add(mode)

    // Apply theme CSS variables
    if (currentTheme) {
      const themeColors = currentTheme[mode]
      
      Object.entries(themeColors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value)
      })
    }
  }, [mode, currentTheme])

  React.useEffect(() => {
    const newTheme = getCurrentTheme(category, themeName)
    setCurrentTheme(newTheme)
  }, [category, themeName, getCurrentTheme])

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const { mode: storedMode, category: storedCategory, themeName: storedThemeName } = JSON.parse(stored)
        if (storedMode) setModeState(storedMode)
        if (storedCategory) setCategoryState(storedCategory)
        if (storedThemeName) setThemeNameState(storedThemeName)
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error)
    }
  }, [storageKey])

  const setMode = React.useCallback((newMode: ThemeMode) => {
    setModeState(newMode)
    try {
      const stored = localStorage.getItem(storageKey)
      const current = stored ? JSON.parse(stored) : {}
      localStorage.setItem(storageKey, JSON.stringify({ ...current, mode: newMode }))
    } catch (error) {
      console.warn('Failed to save mode to localStorage:', error)
    }
  }, [storageKey])

  const setTheme = React.useCallback((newCategory: ThemeCategory, newThemeName: string) => {
    setCategoryState(newCategory)
    setThemeNameState(newThemeName)
    try {
      const stored = localStorage.getItem(storageKey)
      const current = stored ? JSON.parse(stored) : {}
      localStorage.setItem(storageKey, JSON.stringify({ 
        ...current, 
        category: newCategory, 
        themeName: newThemeName 
      }))
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }, [storageKey])

  const toggleMode = React.useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }, [mode, setMode])

  const value = {
    mode,
    category,
    themeName,
    currentTheme,
    setMode,
    setTheme,
    toggleMode,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
