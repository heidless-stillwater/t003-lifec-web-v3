'use client'

import * as React from 'react'
import { Check, Palette, Sun, Moon, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/layout/theme-provider'
import { appThemes, type ThemeCategory, type ThemeDefinition } from '@/lib/themes'

const categoryLabels: Record<ThemeCategory, string> = {
  primaryColorsThemes: 'Primary Colors',
  daisyUIThemes: 'DaisyUI Themes',
  bespokeThemes: 'Bespoke',
  greyscaleThemes: 'Greyscale'
}

const categoryIcons: Record<ThemeCategory, string> = {
  primaryColorsThemes: '🎨',
  daisyUIThemes: '🌈',
  bespokeThemes: '✨',
  greyscaleThemes: '⚫'
}

function ThemeColorSwatch({ theme, size = 'sm' }: { theme: ThemeDefinition; size?: 'sm' | 'md' }) {
  const sizeClasses = size === 'md' ? 'w-4 h-4' : 'w-3 h-3'
  
  return (
    <div className={`${sizeClasses} rounded-full border border-border`} 
         style={{ backgroundColor: `hsl(${theme.swatchColor})` }} />
  )
}

function ModeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <div className="flex items-center justify-between px-3 py-2 mb-1">
      <div className="flex items-center gap-2">
        {mode === 'light' ? (
          <Sun className="h-4 w-4 text-amber-500" />
        ) : (
          <Moon className="h-4 w-4 text-blue-400" />
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMode}
        className="h-6 px-2"
      >
        <div className={`w-8 h-4 rounded-full relative transition-colors duration-200 ${
          mode === 'dark' ? 'bg-primary' : 'bg-muted'
        }`}>
          <div className={`w-3 h-3 bg-background rounded-full absolute top-0.5 transition-transform duration-200 ${
            mode === 'dark' ? 'translate-x-4' : 'translate-x-0.5'
          }`} />
        </div>
      </Button>
    </div>
  )
}

function ThemeMenuItem({ theme, category, isActive }: { 
  theme: ThemeDefinition; 
  category: ThemeCategory;
  isActive: boolean;
}) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenuItem
      onClick={() => setTheme(category, theme.name)}
      className="flex items-center justify-between gap-2 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {theme.symbol && (
          <span className="text-sm font-medium" style={{ color: `hsl(${theme.swatchColor})` }}>
            {theme.symbol}
          </span>
        )}
        <span>{theme.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <ThemeColorSwatch theme={theme} />
        {isActive && <Check className="h-3 w-3" />}
      </div>
    </DropdownMenuItem>
  )
}

export function ThemeSwitcher() {
  const { category, themeName } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <ModeToggle />
        <DropdownMenuSeparator />
        
        {(Object.keys(appThemes) as ThemeCategory[]).map((cat) => (
          <React.Fragment key={cat}>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2">
                <span>{categoryIcons[cat]}</span>
                <span>{categoryLabels[cat]}</span>
                <ChevronRight className="h-3 w-3 ml-auto" />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-48 max-h-64 overflow-y-auto">
                {appThemes[cat].map((theme) => (
                  <ThemeMenuItem
                    key={theme.name}
                    theme={theme}
                    category={cat}
                    isActive={category === cat && themeName === theme.name}
                  />
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
