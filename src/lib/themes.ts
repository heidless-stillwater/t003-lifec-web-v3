export interface ThemeDefinition {
  name: string;
  swatchColor: string;
  symbol?: '●' | '■' | '★'; // Only for bespoke and greyscale themes
  light: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    input: string;
    ring: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
  };
  dark: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    input: string;
    ring: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
  };
}

export interface AppThemes {
  primaryColorsThemes: ThemeDefinition[];
  daisyUIThemes: ThemeDefinition[];
  bespokeThemes: ThemeDefinition[];
  greyscaleThemes: ThemeDefinition[];
}

export const appThemes: AppThemes = {
  // Primary Colors Themes (17 themes)
  primaryColorsThemes: [
    {
      name: "Red",
      swatchColor: "0 84% 60%", // Red HSL
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 3.9%",
        primary: "0 84% 60%",
        primaryForeground: "0 0% 98%",
        secondary: "0 0% 96.1%",
        secondaryForeground: "0 0% 9%",
        accent: "0 0% 96.1%",
        accentForeground: "0 0% 9%",
        muted: "0 0% 96.1%",
        mutedForeground: "0 0% 45.1%",
        border: "0 0% 89.8%",
        input: "0 0% 89.8%",
        ring: "0 84% 60%",
        card: "0 0% 100%",
        cardForeground: "0 0% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "0 0% 3.9%"
      },
      dark: {
        background: "0 0% 3.9%",
        foreground: "0 0% 98%",
        primary: "0 84% 60%",
        primaryForeground: "0 0% 9%",
        secondary: "0 0% 14.9%",
        secondaryForeground: "0 0% 98%",
        accent: "0 0% 14.9%",
        accentForeground: "0 0% 98%",
        muted: "0 0% 14.9%",
        mutedForeground: "0 0% 63.9%",
        border: "0 0% 14.9%",
        input: "0 0% 14.9%",
        ring: "0 84% 60%",
        card: "0 0% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "0 0% 3.9%",
        popoverForeground: "0 0% 98%"
      }
    },
    {
      name: "Orange",
      swatchColor: "25 95% 53%", // Orange HSL
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 3.9%",
        primary: "25 95% 53%",
        primaryForeground: "0 0% 98%",
        secondary: "0 0% 96.1%",
        secondaryForeground: "0 0% 9%",
        accent: "0 0% 96.1%",
        accentForeground: "0 0% 9%",
        muted: "0 0% 96.1%",
        mutedForeground: "0 0% 45.1%",
        border: "0 0% 89.8%",
        input: "0 0% 89.8%",
        ring: "25 95% 53%",
        card: "0 0% 100%",
        cardForeground: "0 0% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "0 0% 3.9%"
      },
      dark: {
        background: "0 0% 3.9%",
        foreground: "0 0% 98%",
        primary: "25 95% 53%",
        primaryForeground: "0 0% 9%",
        secondary: "0 0% 14.9%",
        secondaryForeground: "0 0% 98%",
        accent: "0 0% 14.9%",
        accentForeground: "0 0% 98%",
        muted: "0 0% 14.9%",
        mutedForeground: "0 0% 63.9%",
        border: "0 0% 14.9%",
        input: "0 0% 14.9%",
        ring: "25 95% 53%",
        card: "0 0% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "0 0% 3.9%",
        popoverForeground: "0 0% 98%"
      }
    },
    {
      name: "Blue",
      swatchColor: "221 83% 53%", // Blue HSL
      light: {
        background: "0 0% 100%",
        foreground: "224 71% 4%",
        primary: "221 83% 53%",
        primaryForeground: "210 40% 98%",
        secondary: "210 40% 96%",
        secondaryForeground: "222 84% 5%",
        accent: "210 40% 96%",
        accentForeground: "222 84% 5%",
        muted: "210 40% 96%",
        mutedForeground: "215 16% 47%",
        border: "214 32% 91%",
        input: "214 32% 91%",
        ring: "221 83% 53%",
        card: "0 0% 100%",
        cardForeground: "224 71% 4%",
        popover: "0 0% 100%",
        popoverForeground: "224 71% 4%"
      },
      dark: {
        background: "224 71% 4%",
        foreground: "213 31% 91%",
        primary: "217 91% 60%",
        primaryForeground: "222 84% 5%",
        secondary: "222 84% 5%",
        secondaryForeground: "210 40% 98%",
        accent: "215 28% 17%",
        accentForeground: "210 40% 98%",
        muted: "223 47% 11%",
        mutedForeground: "215 16% 57%",
        border: "215 28% 17%",
        input: "215 28% 17%",
        ring: "216 34% 17%",
        card: "224 71% 4%",
        cardForeground: "213 31% 91%",
        popover: "224 71% 4%",
        popoverForeground: "213 31% 91%"
      }
    }
  ],
  daisyUIThemes: [
    {
      name: "Forest",
      swatchColor: "158 64% 52%", // Forest Green
      light: {
        background: "0 0% 100%",
        foreground: "158 64% 10%",
        primary: "158 64% 52%",
        primaryForeground: "0 0% 100%",
        secondary: "158 30% 85%",
        secondaryForeground: "158 64% 15%",
        accent: "158 40% 75%",
        accentForeground: "158 64% 15%",
        muted: "158 20% 90%",
        mutedForeground: "158 30% 35%",
        border: "158 30% 82%",
        input: "158 30% 82%",
        ring: "158 64% 52%",
        card: "0 0% 100%",
        cardForeground: "158 64% 10%",
        popover: "0 0% 100%",
        popoverForeground: "158 64% 10%"
      },
      dark: {
        background: "158 64% 4%",
        foreground: "158 20% 90%",
        primary: "158 64% 52%",
        primaryForeground: "158 64% 4%",
        secondary: "158 30% 12%",
        secondaryForeground: "158 20% 90%",
        accent: "158 40% 20%",
        accentForeground: "158 20% 90%",
        muted: "158 30% 8%",
        mutedForeground: "158 20% 65%",
        border: "158 40% 18%",
        input: "158 40% 18%",
        ring: "158 64% 52%",
        card: "158 64% 4%",
        cardForeground: "158 20% 90%",
        popover: "158 64% 4%",
        popoverForeground: "158 20% 90%"
      }
    },
    {
      name: "Cyberpunk",
      swatchColor: "300 100% 50%", // Neon Purple
      light: {
        background: "0 0% 100%",
        foreground: "300 100% 10%",
        primary: "300 100% 50%",
        primaryForeground: "0 0% 100%",
        secondary: "300 50% 85%",
        secondaryForeground: "300 100% 15%",
        accent: "180 100% 50%",
        accentForeground: "300 100% 15%",
        muted: "300 30% 90%",
        mutedForeground: "300 50% 35%",
        border: "300 40% 82%",
        input: "300 40% 82%",
        ring: "300 100% 50%",
        card: "0 0% 100%",
        cardForeground: "300 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "300 100% 10%"
      },
      dark: {
        background: "300 100% 2%",
        foreground: "300 50% 90%",
        primary: "300 100% 50%",
        primaryForeground: "300 100% 2%",
        secondary: "300 50% 8%",
        secondaryForeground: "300 50% 90%",
        accent: "180 100% 50%",
        accentForeground: "300 50% 90%",
        muted: "300 50% 5%",
        mutedForeground: "300 30% 65%",
        border: "300 50% 15%",
        input: "300 50% 15%",
        ring: "300 100% 50%",
        card: "300 100% 2%",
        cardForeground: "300 50% 90%",
        popover: "300 100% 2%",
        popoverForeground: "300 50% 90%"
      }
    }
  ],
  bespokeThemes: [
    {
      name: "Midnight Aurora",
      swatchColor: "240 100% 50%",
      symbol: "●",
      light: {
        background: "0 0% 100%",
        foreground: "240 100% 10%",
        primary: "240 100% 50%",
        primaryForeground: "0 0% 100%",
        secondary: "240 50% 85%",
        secondaryForeground: "240 100% 15%",
        accent: "300 100% 75%",
        accentForeground: "240 100% 15%",
        muted: "240 30% 90%",
        mutedForeground: "240 50% 35%",
        border: "240 40% 82%",
        input: "240 40% 82%",
        ring: "240 100% 50%",
        card: "0 0% 100%",
        cardForeground: "240 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "240 100% 10%"
      },
      dark: {
        background: "240 100% 3%",
        foreground: "240 50% 90%",
        primary: "240 100% 50%",
        primaryForeground: "240 100% 3%",
        secondary: "240 50% 12%",
        secondaryForeground: "240 50% 90%",
        accent: "300 100% 75%",
        accentForeground: "240 50% 90%",
        muted: "240 50% 8%",
        mutedForeground: "240 30% 65%",
        border: "240 50% 18%",
        input: "240 50% 18%",
        ring: "240 100% 50%",
        card: "240 100% 3%",
        cardForeground: "240 50% 90%",
        popover: "240 100% 3%",
        popoverForeground: "240 50% 90%"
      }
    },
    {
      name: "Golden Sunset",
      swatchColor: "45 100% 50%",
      symbol: "■",
      light: {
        background: "0 0% 100%",
        foreground: "45 100% 10%",
        primary: "45 100% 50%",
        primaryForeground: "0 0% 100%",
        secondary: "45 50% 85%",
        secondaryForeground: "45 100% 15%",
        accent: "15 100% 60%",
        accentForeground: "45 100% 15%",
        muted: "45 30% 90%",
        mutedForeground: "45 50% 35%",
        border: "45 40% 82%",
        input: "45 40% 82%",
        ring: "45 100% 50%",
        card: "0 0% 100%",
        cardForeground: "45 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "45 100% 10%"
      },
      dark: {
        background: "45 100% 3%",
        foreground: "45 50% 90%",
        primary: "45 100% 50%",
        primaryForeground: "45 100% 3%",
        secondary: "45 50% 12%",
        secondaryForeground: "45 50% 90%",
        accent: "15 100% 60%",
        accentForeground: "45 50% 90%",
        muted: "45 50% 8%",
        mutedForeground: "45 30% 65%",
        border: "45 50% 18%",
        input: "45 50% 18%",
        ring: "45 100% 50%",
        card: "45 100% 3%",
        cardForeground: "45 50% 90%",
        popover: "45 100% 3%",
        popoverForeground: "45 50% 90%"
      }
    },
    {
      name: "Ocean Depths",
      swatchColor: "200 100% 30%",
      symbol: "★",
      light: {
        background: "0 0% 100%",
        foreground: "200 100% 10%",
        primary: "200 100% 30%",
        primaryForeground: "0 0% 100%",
        secondary: "200 50% 85%",
        secondaryForeground: "200 100% 15%",
        accent: "180 100% 50%",
        accentForeground: "200 100% 15%",
        muted: "200 30% 90%",
        mutedForeground: "200 50% 35%",
        border: "200 40% 82%",
        input: "200 40% 82%",
        ring: "200 100% 30%",
        card: "0 0% 100%",
        cardForeground: "200 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "200 100% 10%"
      },
      dark: {
        background: "200 100% 2%",
        foreground: "200 50% 90%",
        primary: "200 100% 30%",
        primaryForeground: "200 100% 2%",
        secondary: "200 50% 8%",
        secondaryForeground: "200 50% 90%",
        accent: "180 100% 50%",
        accentForeground: "200 50% 90%",
        muted: "200 50% 5%",
        mutedForeground: "200 30% 65%",
        border: "200 50% 12%",
        input: "200 50% 12%",
        ring: "200 100% 30%",
        card: "200 100% 2%",
        cardForeground: "200 50% 90%",
        popover: "200 100% 2%",
        popoverForeground: "200 50% 90%"
      }
    },
    {
      name: "Rose Garden",
      swatchColor: "330 100% 60%",
      symbol: "●",
      light: {
        background: "0 0% 100%",
        foreground: "330 100% 10%",
        primary: "330 100% 60%",
        primaryForeground: "0 0% 100%",
        secondary: "330 50% 85%",
        secondaryForeground: "330 100% 15%",
        accent: "300 100% 75%",
        accentForeground: "330 100% 15%",
        muted: "330 30% 90%",
        mutedForeground: "330 50% 35%",
        border: "330 40% 82%",
        input: "330 40% 82%",
        ring: "330 100% 60%",
        card: "0 0% 100%",
        cardForeground: "330 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "330 100% 10%"
      },
      dark: {
        background: "330 100% 3%",
        foreground: "330 50% 90%",
        primary: "330 100% 60%",
        primaryForeground: "330 100% 3%",
        secondary: "330 50% 12%",
        secondaryForeground: "330 50% 90%",
        accent: "300 100% 75%",
        accentForeground: "330 50% 90%",
        muted: "330 50% 8%",
        mutedForeground: "330 30% 65%",
        border: "330 50% 18%",
        input: "330 50% 18%",
        ring: "330 100% 60%",
        card: "330 100% 3%",
        cardForeground: "330 50% 90%",
        popover: "330 100% 3%",
        popoverForeground: "330 50% 90%"
      }
    },
    {
      name: "Electric Storm",
      swatchColor: "270 100% 50%",
      symbol: "■",
      light: {
        background: "0 0% 100%",
        foreground: "270 100% 10%",
        primary: "270 100% 50%",
        primaryForeground: "0 0% 100%",
        secondary: "270 50% 85%",
        secondaryForeground: "270 100% 15%",
        accent: "60 100% 50%",
        accentForeground: "270 100% 15%",
        muted: "270 30% 90%",
        mutedForeground: "270 50% 35%",
        border: "270 40% 82%",
        input: "270 40% 82%",
        ring: "270 100% 50%",
        card: "0 0% 100%",
        cardForeground: "270 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "270 100% 10%"
      },
      dark: {
        background: "270 100% 2%",
        foreground: "270 50% 90%",
        primary: "270 100% 50%",
        primaryForeground: "270 100% 2%",
        secondary: "270 50% 8%",
        secondaryForeground: "270 50% 90%",
        accent: "60 100% 50%",
        accentForeground: "270 50% 90%",
        muted: "270 50% 5%",
        mutedForeground: "270 30% 65%",
        border: "270 50% 15%",
        input: "270 50% 15%",
        ring: "270 100% 50%",
        card: "270 100% 2%",
        cardForeground: "270 50% 90%",
        popover: "270 100% 2%",
        popoverForeground: "270 50% 90%"
      }
    },
    {
      name: "Desert Mirage",
      swatchColor: "30 100% 50%",
      symbol: "★",
      light: {
        background: "0 0% 100%",
        foreground: "30 100% 10%",
        primary: "30 100% 50%",
        primaryForeground: "0 0% 100%",
        secondary: "30 50% 85%",
        secondaryForeground: "30 100% 15%",
        accent: "60 100% 75%",
        accentForeground: "30 100% 15%",
        muted: "30 30% 90%",
        mutedForeground: "30 50% 35%",
        border: "30 40% 82%",
        input: "30 40% 82%",
        ring: "30 100% 50%",
        card: "0 0% 100%",
        cardForeground: "30 100% 10%",
        popover: "0 0% 100%",
        popoverForeground: "30 100% 10%"
      },
      dark: {
        background: "30 100% 3%",
        foreground: "30 50% 90%",
        primary: "30 100% 50%",
        primaryForeground: "30 100% 3%",
        secondary: "30 50% 12%",
        secondaryForeground: "30 50% 90%",
        accent: "60 100% 75%",
        accentForeground: "30 50% 90%",
        muted: "30 50% 8%",
        mutedForeground: "30 30% 65%",
        border: "30 50% 18%",
        input: "30 50% 18%",
        ring: "30 100% 50%",
        card: "30 100% 3%",
        cardForeground: "30 50% 90%",
        popover: "30 100% 3%",
        popoverForeground: "30 50% 90%"
      }
    }
  ],
  greyscaleThemes: [
    {
      name: "Pure Grey",
      swatchColor: "0 0% 50%",
      symbol: "●",
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 3.9%",
        primary: "0 0% 50%",
        primaryForeground: "0 0% 98%",
        secondary: "0 0% 96.1%",
        secondaryForeground: "0 0% 9%",
        accent: "0 0% 96.1%",
        accentForeground: "0 0% 9%",
        muted: "0 0% 96.1%",
        mutedForeground: "0 0% 45.1%",
        border: "0 0% 89.8%",
        input: "0 0% 89.8%",
        ring: "0 0% 50%",
        card: "0 0% 100%",
        cardForeground: "0 0% 3.9%",
        popover: "0 0% 100%",
        popoverForeground: "0 0% 3.9%"
      },
      dark: {
        background: "0 0% 3.9%",
        foreground: "0 0% 98%",
        primary: "0 0% 50%",
        primaryForeground: "0 0% 9%",
        secondary: "0 0% 14.9%",
        secondaryForeground: "0 0% 98%",
        accent: "0 0% 14.9%",
        accentForeground: "0 0% 98%",
        muted: "0 0% 14.9%",
        mutedForeground: "0 0% 63.9%",
        border: "0 0% 14.9%",
        input: "0 0% 14.9%",
        ring: "0 0% 50%",
        card: "0 0% 3.9%",
        cardForeground: "0 0% 98%",
        popover: "0 0% 3.9%",
        popoverForeground: "0 0% 98%"
      }
    },
    {
      name: "Warm Grey",
      swatchColor: "30 5% 50%",
      symbol: "■",
      light: {
        background: "30 5% 98%",
        foreground: "30 5% 5%",
        primary: "30 5% 50%",
        primaryForeground: "30 5% 98%",
        secondary: "30 5% 94%",
        secondaryForeground: "30 5% 10%",
        accent: "30 5% 94%",
        accentForeground: "30 5% 10%",
        muted: "30 5% 94%",
        mutedForeground: "30 5% 45%",
        border: "30 5% 88%",
        input: "30 5% 88%",
        ring: "30 5% 50%",
        card: "30 5% 98%",
        cardForeground: "30 5% 5%",
        popover: "30 5% 98%",
        popoverForeground: "30 5% 5%"
      },
      dark: {
        background: "30 5% 5%",
        foreground: "30 5% 95%",
        primary: "30 5% 50%",
        primaryForeground: "30 5% 10%",
        secondary: "30 5% 15%",
        secondaryForeground: "30 5% 95%",
        accent: "30 5% 15%",
        accentForeground: "30 5% 95%",
        muted: "30 5% 15%",
        mutedForeground: "30 5% 60%",
        border: "30 5% 15%",
        input: "30 5% 15%",
        ring: "30 5% 50%",
        card: "30 5% 5%",
        cardForeground: "30 5% 95%",
        popover: "30 5% 5%",
        popoverForeground: "30 5% 95%"
      }
    },
    {
      name: "Cool Grey",
      swatchColor: "210 5% 50%",
      symbol: "★",
      light: {
        background: "210 5% 98%",
        foreground: "210 5% 5%",
        primary: "210 5% 50%",
        primaryForeground: "210 5% 98%",
        secondary: "210 5% 94%",
        secondaryForeground: "210 5% 10%",
        accent: "210 5% 94%",
        accentForeground: "210 5% 10%",
        muted: "210 5% 94%",
        mutedForeground: "210 5% 45%",
        border: "210 5% 88%",
        input: "210 5% 88%",
        ring: "210 5% 50%",
        card: "210 5% 98%",
        cardForeground: "210 5% 5%",
        popover: "210 5% 98%",
        popoverForeground: "210 5% 5%"
      },
      dark: {
        background: "210 5% 5%",
        foreground: "210 5% 95%",
        primary: "210 5% 50%",
        primaryForeground: "210 5% 10%",
        secondary: "210 5% 15%",
        secondaryForeground: "210 5% 95%",
        accent: "210 5% 15%",
        accentForeground: "210 5% 95%",
        muted: "210 5% 15%",
        mutedForeground: "210 5% 60%",
        border: "210 5% 15%",
        input: "210 5% 15%",
        ring: "210 5% 50%",
        card: "210 5% 5%",
        cardForeground: "210 5% 95%",
        popover: "210 5% 5%",
        popoverForeground: "210 5% 95%"
      }
    },
    {
      name: "Charcoal",
      swatchColor: "0 0% 25%",
      symbol: "●",
      light: {
        background: "0 0% 98%",
        foreground: "0 0% 15%",
        primary: "0 0% 25%",
        primaryForeground: "0 0% 98%",
        secondary: "0 0% 92%",
        secondaryForeground: "0 0% 20%",
        accent: "0 0% 92%",
        accentForeground: "0 0% 20%",
        muted: "0 0% 92%",
        mutedForeground: "0 0% 40%",
        border: "0 0% 85%",
        input: "0 0% 85%",
        ring: "0 0% 25%",
        card: "0 0% 98%",
        cardForeground: "0 0% 15%",
        popover: "0 0% 98%",
        popoverForeground: "0 0% 15%"
      },
      dark: {
        background: "0 0% 8%",
        foreground: "0 0% 90%",
        primary: "0 0% 60%",
        primaryForeground: "0 0% 15%",
        secondary: "0 0% 18%",
        secondaryForeground: "0 0% 90%",
        accent: "0 0% 18%",
        accentForeground: "0 0% 90%",
        muted: "0 0% 18%",
        mutedForeground: "0 0% 55%",
        border: "0 0% 18%",
        input: "0 0% 18%",
        ring: "0 0% 60%",
        card: "0 0% 8%",
        cardForeground: "0 0% 90%",
        popover: "0 0% 8%",
        popoverForeground: "0 0% 90%"
      }
    }
  ]
};

export type ThemeMode = 'light' | 'dark';
export type ThemeCategory = 'primaryColorsThemes' | 'daisyUIThemes' | 'bespokeThemes' | 'greyscaleThemes';

export const defaultTheme = {
  category: 'primaryColorsThemes' as ThemeCategory,
  name: 'Blue',
  mode: 'light' as ThemeMode
};
