'use client'

import * as React from 'react'
import { Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  return (
    <Button variant="ghost" size="icon">
      <Palette className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
