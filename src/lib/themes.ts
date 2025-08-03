
export type ThemeMode = 'light' | 'dark';
export type ThemeCategory = 'bespokeThemes' | 'primaryColorsThemes' | 'daisyUIThemes' | 'greyscaleThemes' | 'customThemes';

export interface ThemeDefinition {
  name: string;
  category: ThemeCategory;
  symbol?: string;
  swatchColor?: string;
  light: { [key: string]: string };
  dark: { [key: string]: string };
}

export const defaultTheme = {
    name: 'Default',
    mode: 'light' as ThemeMode,
    category: 'primaryColorsThemes' as ThemeCategory
};

export const bespokeThemes: ThemeDefinition[] = [
  {
    name: 'Ruby & Sky',
    category: 'bespokeThemes',
    swatchColor: '197 71% 73%',
    symbol: '●',
    light: { '--background': '180 50% 99%', '--foreground': '0 0% 27%', '--card': '0 0% 100%', '--card-foreground': '0 0% 27%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 27%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 27%', '--secondary': '0 0% 75%', '--secondary-foreground': '0 0% 27%', '--muted': '0 0% 75%', '--muted-foreground': '0 0% 40%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 27%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 75%', '--input': '0 0% 75%', '--ring': '197 71% 73%', },
    dark: { '--background': '0 0% 10%', '--foreground': '0 0% 90%', '--card': '0 0% 12%', '--card-foreground': '0 0% 90%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 90%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 10%', '--secondary': '0 0% 30%', '--secondary-foreground': '0 0% 90%', '--muted': '0 0% 30%', '--muted-foreground': '0 0% 60%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 10%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 30%', '--input': '0 0% 30%', '--ring': '197 71% 73%', },
  },
  {
    name: 'Coolish Slate',
    category: 'bespokeThemes',
    swatchColor: '248 80% 66%',
    symbol: '●',
    light: { '--background': '212 22% 95%', '--foreground': '212 25% 22%', '--card': '0 0% 100%', '--card-foreground': '212 25% 22%', '--popover': '0 0% 100%', '--popover-foreground': '212 25% 22%', '--primary': '248 80% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '211 15% 69%', '--secondary-foreground': '212 25% 22%', '--muted': '211 15% 69%', '--muted-foreground': '211 15% 49%', '--accent': '181 100% 41%', '--accent-foreground': '0 0% 100%', '--destructive': '0 84% 60%', '--destructive-foreground': '0 0% 100%', '--border': '211 15% 69%', '--input': '211 15% 69%', '--ring': '248 80% 66%', },
    dark: { '--background': '212 22% 15%', '--foreground': '212 22% 85%', '--card': '212 22% 20%', '--card-foreground': '212 22% 85%', '--popover': '212 22% 20%', '--popover-foreground': '212 22% 85%', '--primary': '248 80% 76%', '--primary-foreground': '212 22% 15%', '--secondary': '211 15% 50%', '--secondary-foreground': '212 22% 85%', '--muted': '211 15% 50%', '--muted-foreground': '211 15% 70%', '--accent': '181 100% 51%', '--accent-foreground': '212 22% 15%', '--destructive': '0 84% 70%', '--destructive-foreground': '0 0% 100%', '--border': '211 15% 50%', '--input': '211 15% 50%', '--ring': '248 80% 76%', },
  },
  {
    name: 'Fuchsia & Cyan',
    category: 'bespokeThemes',
    swatchColor: '330 100% 50%',
    symbol: '●',
    light: { '--background': '0 0% 96%', '--foreground': '0 0% 4%', '--card': '0 0% 88%', '--card-foreground': '0 0% 4%', '--popover': '0 0% 88%', '--popover-foreground': '0 0% 4%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
    dark: { '--background': '0 0% 4%', '--foreground': '0 0% 96%', '--card': '0 0% 12%', '--card-foreground': '0 0% 96%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 96%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 60%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
  },
  {
    name: 'Indigo & Amber',
    category: 'bespokeThemes',
    swatchColor: '211 78% 46%',
    symbol: '●',
    light: { '--background': '231 48% 94%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '211 78% 46%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 62%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 62%', '--muted-foreground': '0 0% 40%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 65% 51%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 62%', '--input': '0 0% 62%', '--ring': '211 78% 46%', },
    dark: { '--background': '0 0% 13%', '--foreground': '231 48% 94%', '--card': '0 0% 10%', '--card-foreground': '231 48% 94%', '--popover': '0 0% 10%', '--popover-foreground': '231 48% 94%', '--primary': '211 78% 66%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 30%', '--secondary-foreground': '231 48% 94%', '--muted': '0 0% 30%', '--muted-foreground': '0 0% 70%', '--accent': '45 100% 51%', '--accent-foreground': '0 0% 13%', '--destructive': '0 65% 61%', '--destructive-foreground': '0 0% 13%', '--border': '0 0% 30%', '--input': '0 0% 30%', '--ring': '211 78% 66%', },
  },
  {
    name: 'Indigo Night',
    category: 'bespokeThemes',
    swatchColor: '271 76% 53%',
    symbol: '●',
    light: { '--background': '220 100% 96%', '--foreground': '240 14% 15%', '--card': '220 50% 99%', '--card-foreground': '240 14% 15%', '--popover': '220 50% 99%', '--popover-foreground': '240 14% 15%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '263 47% 51%', '--secondary-foreground': '220 100% 96%', '--muted': '263 47% 51%', '--muted-foreground': '240 4% 68%', '--accent': '180 100% 50%', '--accent-foreground': '220 100% 96%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '263 47% 51%', '--input': '263 47% 51%', '--ring': '271 76% 53%', },
    dark: { '--background': '240 14% 15%', '--foreground': '220 100% 96%', '--card': '240 11% 20%', '--card-foreground': '220 100% 96%', '--popover': '240 11% 20%', '--popover-foreground': '220 100% 96%', '--primary': '271 76% 53%', '--primary-foreground': '220 100% 96%', '--secondary': '263 47% 51%', '--secondary-foreground': '220 100% 96%', '--muted': '263 47% 51%', '--muted-foreground': '240 4% 68%', '--accent': '180 100% 50%', '--accent-foreground': '220 100% 96%', '--destructive': '11 100% 62%', '--destructive-foreground': '220 100% 96%', '--border': '263 47% 51%', '--input': '263 47% 51%', '--ring': '271 76% 53%', },
  },
  {
    name: 'Emerald Isle',
    category: 'bespokeThemes',
    swatchColor: '134 61% 40%',
    symbol: '●',
    light: { '--background': '120 100% 98%', '--foreground': '210 10% 23%', '--card': '0 0% 100%', '--card-foreground': '210 10% 23%', '--popover': '0 0% 100%', '--popover-foreground': '210 10% 23%', '--primary': '134 61% 40%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 48%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 48%', '--muted-foreground': '208 7% 30%', '--accent': '211 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 48%', '--input': '208 7% 48%', '--ring': '134 61% 40%', },
    dark: { '--background': '210 10% 15%', '--foreground': '120 100% 98%', '--card': '210 10% 20%', '--card-foreground': '120 100% 98%', '--popover': '210 10% 20%', '--popover-foreground': '120 100% 98%', '--primary': '134 61% 50%', '--primary-foreground': '0 0% 100%', '--secondary': '208 7% 35%', '--secondary-foreground': '0 0% 100%', '--muted': '208 7% 35%', '--muted-foreground': '208 7% 60%', '--accent': '211 100% 60%', '--accent-foreground': '0 0% 100%', '--destructive': '354 70% 64%', '--destructive-foreground': '0 0% 100%', '--border': '208 7% 35%', '--input': '208 7% 35%', '--ring': '134 61% 50%', },
  },
];

const commonLight = {
  '--background': '0 0% 100%',
  '--foreground': '0 0% 3.9%',
  '--card': '0 0% 100%',
  '--card-foreground': '0 0% 3.9%',
  '--popover': '0 0% 100%',
  '--popover-foreground': '0 0% 3.9%',
  '--primary-foreground': '0 0% 98%',
  '--secondary': '0 0% 96.1%',
  '--secondary-foreground': '0 0% 9%',
  '--muted': '0 0% 96.1%',
  '--muted-foreground': '0 0% 45.1%',
  '--accent-foreground': '0 0% 9%',
  '--destructive': '0 84.2% 60.2%',
  '--destructive-foreground': '0 0% 98%',
  '--border': '0 0% 89.8%',
  '--input': '0 0% 89.8%',
  '--ring': '0 0% 3.9%',
};

const commonDark = {
  '--background': '0 0% 3.9%',
  '--foreground': '0 0% 98%',
  '--card': '0 0% 3.9%',
  '--card-foreground': '0 0% 98%',
  '--popover': '0 0% 3.9%',
  '--popover-foreground': '0 0% 98%',
  '--primary-foreground': '0 0% 9%',
  '--secondary': '0 0% 14.9%',
  '--secondary-foreground': '0 0% 98%',
  '--muted': '0 0% 14.9%',
  '--muted-foreground': '0 0% 63.9%',
  '--accent-foreground': '0 0% 98%',
  '--destructive': '0 62.8% 30.6%',
  '--destructive-foreground': '0 0% 98%',
  '--border': '0 0% 14.9%',
  '--input': '0 0% 14.9%',
  '--ring': '0 0% 83.1%',
};

export const primaryColorsThemes: ThemeDefinition[] = [
    { name: 'Red', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '0 72% 51%', light: { ...commonLight, '--primary': '0 72% 51%', '--accent': '0 86% 97%', '--ring': '0 72% 51%' }, dark: { ...commonDark, '--primary': '0 72% 51%', '--accent': '0 86% 15%', '--ring': '0 72% 51%' } },
    { name: 'Orange', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '25 95% 53%', light: { ...commonLight, '--primary': '25 95% 53%', '--accent': '25 86% 97%', '--ring': '25 95% 53%' }, dark: { ...commonDark, '--primary': '25 95% 53%', '--accent': '25 86% 15%', '--ring': '25 95% 53%' } },
    { name: 'Amber', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '45 93% 47%', light: { ...commonLight, '--primary': '45 93% 47%', '--accent': '45 86% 97%', '--ring': '45 93% 47%' }, dark: { ...commonDark, '--primary': '45 93% 47%', '--accent': '45 86% 15%', '--ring': '45 93% 47%' } },
    { name: 'Yellow', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '54 96% 50%', light: { ...commonLight, '--primary': '54 96% 50%', '--accent': '54 86% 97%', '--ring': '54 96% 50%' }, dark: { ...commonDark, '--primary': '54 96% 50%', '--accent': '54 86% 15%', '--ring': '54 96% 50%' } },
    { name: 'Lime', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '84 79% 44%', light: { ...commonLight, '--primary': '84 79% 44%', '--accent': '84 86% 97%', '--ring': '84 79% 44%' }, dark: { ...commonDark, '--primary': '84 79% 44%', '--accent': '84 86% 15%', '--ring': '84 79% 44%' } },
    { name: 'Green', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '142 76% 36%', light: { ...commonLight, '--primary': '142 76% 36%', '--accent': '142 86% 97%', '--ring': '142 76% 36%' }, dark: { ...commonDark, '--primary': '142 76% 36%', '--accent': '142 86% 15%', '--ring': '142 76% 36%' } },
    { name: 'Emerald', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '158 79% 41%', light: { ...commonLight, '--primary': '158 79% 41%', '--accent': '158 86% 97%', '--ring': '158 79% 41%' }, dark: { ...commonDark, '--primary': '158 79% 41%', '--accent': '158 86% 15%', '--ring': '158 79% 41%' } },
    { name: 'Teal', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '173 80% 40%', light: { ...commonLight, '--primary': '173 80% 40%', '--accent': '173 86% 97%', '--ring': '173 80% 40%' }, dark: { ...commonDark, '--primary': '173 80% 40%', '--accent': '173 86% 15%', '--ring': '173 80% 40%' } },
    { name: 'Cyan', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '190 95% 48%', light: { ...commonLight, '--primary': '190 95% 48%', '--accent': '190 86% 97%', '--ring': '190 95% 48%' }, dark: { ...commonDark, '--primary': '190 95% 48%', '--accent': '190 86% 15%', '--ring': '190 95% 48%' } },
    { name: 'Sky', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '199 98% 52%', light: { ...commonLight, '--primary': '199 98% 52%', '--accent': '199 86% 97%', '--ring': '199 98% 52%' }, dark: { ...commonDark, '--primary': '199 98% 52%', '--accent': '199 86% 15%', '--ring': '199 98% 52%' } },
    { name: 'Blue', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '217 91% 60%', light: { ...commonLight, '--primary': '217 91% 60%', '--accent': '217 86% 97%', '--ring': '217 91% 60%' }, dark: { ...commonDark, '--primary': '217 91% 60%', '--accent': '217 86% 15%', '--ring': '217 91% 60%' } },
    { name: 'Indigo', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '239 84% 67%', light: { ...commonLight, '--primary': '239 84% 67%', '--accent': '239 86% 97%', '--ring': '239 84% 67%' }, dark: { ...commonDark, '--primary': '239 84% 67%', '--accent': '239 86% 15%', '--ring': '239 84% 67%' } },
    { name: 'Violet', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '259 93% 68%', light: { ...commonLight, '--primary': '259 93% 68%', '--accent': '259 86% 97%', '--ring': '259 93% 68%' }, dark: { ...commonDark, '--primary': '259 93% 68%', '--accent': '259 86% 15%', '--ring': '259 93% 68%' } },
    { name: 'Purple', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '271 91% 65%', light: { ...commonLight, '--primary': '271 91% 65%', '--accent': '271 86% 97%', '--ring': '271 91% 65%' }, dark: { ...commonDark, '--primary': '271 91% 65%', '--accent': '271 86% 15%', '--ring': '271 91% 65%' } },
    { name: 'Fuchsia', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '291 89% 65%', light: { ...commonLight, '--primary': '291 89% 65%', '--accent': '291 86% 97%', '--ring': '291 89% 65%' }, dark: { ...commonDark, '--primary': '291 89% 65%', '--accent': '291 86% 15%', '--ring': '291 89% 65%' } },
    { name: 'Pink', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '322 95% 61%', light: { ...commonLight, '--primary': '322 95% 61%', '--accent': '322 86% 97%', '--ring': '322 95% 61%' }, dark: { ...commonDark, '--primary': '322 95% 61%', '--accent': '322 86% 15%', '--ring': '322 95% 61%' } },
    { name: 'Rose', category: 'primaryColorsThemes', symbol: '🎨', swatchColor: '341 96% 61%', light: { ...commonLight, '--primary': '341 96% 61%', '--accent': '341 86% 97%', '--ring': '341 96% 61%' }, dark: { ...commonDark, '--primary': '341 96% 61%', '--accent': '341 86% 15%', '--ring': '341 96% 61%' } },
];

export const daisyUIThemes: ThemeDefinition[] = [
  { name: 'Cupcake', category: 'daisyUIThemes', symbol: '🧁', swatchColor: '335 60% 50%', light: { ...commonLight, '--primary': '335 60% 50%', '--accent': '335 60% 95%' }, dark: { ...commonDark, '--primary': '335 60% 50%', '--accent': '335 60% 15%' } },
  { name: 'Bumblebee', category: 'daisyUIThemes', symbol: '🐝', swatchColor: '43 96% 56%', light: { ...commonLight, '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { ...commonDark, '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Corporate', category: 'daisyUIThemes', symbol: '🏢', swatchColor: '215 25% 27%', light: { ...commonLight, '--primary': '215 25% 27%', '--accent': '215 25% 95%' }, dark: { ...commonDark, '--primary': '215 25% 27%', '--accent': '215 25% 15%' } },
  { name: 'Synthwave', category: 'daisyUIThemes', symbol: '🌃', swatchColor: '252 82% 62%', light: { ...commonLight, '--primary': '252 82% 62%', '--accent': '303 82% 62%' }, dark: { ...commonDark, '--primary': '252 82% 62%', '--accent': '303 82% 20%' } },
  { name: 'Retro', category: 'daisyUIThemes', symbol: '🕹️', swatchColor: '45 89% 62%', light: { ...commonLight, '--primary': '45 89% 62%', '--accent': '35 89% 95%' }, dark: { ...commonDark, '--primary': '45 89% 62%', '--accent': '35 89% 15%' } },
  { name: 'Valentine', category: 'daisyUIThemes', symbol: '❤️', swatchColor: '313 77% 65%', light: { ...commonLight, '--primary': '313 77% 65%', '--accent': '313 77% 95%' }, dark: { ...commonDark, '--primary': '313 77% 65%', '--accent': '313 77% 15%' } },
  { name: 'Halloween', category: 'daisyUIThemes', symbol: '🎃', swatchColor: '23 98% 51%', light: { ...commonLight, '--primary': '23 98% 51%', '--accent': '23 98% 95%' }, dark: { ...commonDark, '--primary': '23 98% 51%', '--accent': '23 98% 15%' } },
  { name: 'Garden', category: 'daisyUIThemes', symbol: '🌿', swatchColor: '158 64% 52%', light: { ...commonLight, '--primary': '158 64% 52%', '--accent': '158 64% 95%' }, dark: { ...commonDark, '--primary': '158 64% 52%', '--accent': '158 64% 15%' } },
  { name: 'Aqua', category: 'daisyUIThemes', symbol: '💧', swatchColor: '192 92% 45%', light: { ...commonLight, '--primary': '192 92% 45%', '--accent': '192 92% 95%' }, dark: { ...commonDark, '--primary': '192 92% 45%', '--accent': '192 92% 15%' } },
  { name: 'Lofi', category: 'daisyUIThemes', symbol: '🎵', swatchColor: '215 28% 17%', light: { ...commonLight, '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { ...commonDark, '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Pastel', category: 'daisyUIThemes', symbol: '🎨', swatchColor: '259 93% 68%', light: { ...commonLight, '--primary': '259 93% 68%', '--accent': '259 93% 95%' }, dark: { ...commonDark, '--primary': '259 93% 68%', '--accent': '259 93% 15%' } },
  { name: 'Fantasy', category: 'daisyUIThemes', symbol: '🦄', swatchColor: '272 49% 49%', light: { ...commonLight, '--primary': '272 49% 49%', '--accent': '272 49% 95%' }, dark: { ...commonDark, '--primary': '272 49% 49%', '--accent': '272 49% 15%' } },
  { name: 'Wireframe', category: 'daisyUIThemes', symbol: '✍️', swatchColor: '0 0% 45%', light: { ...commonLight, '--primary': '0 0% 45%', '--accent': '0 0% 95%' }, dark: { ...commonDark, '--primary': '0 0% 70%', '--accent': '0 0% 15%' } },
  { name: 'Black', category: 'daisyUIThemes', symbol: '🖤', swatchColor: '215 28% 17%', light: { ...commonLight, '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { ...commonDark, '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Luxury', category: 'daisyUIThemes', symbol: '💎', swatchColor: '43 96% 56%', light: { ...commonLight, '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { ...commonDark, '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Dracula', category: 'daisyUIThemes', symbol: '🧛', swatchColor: '259 93% 68%', light: { ...commonLight, '--primary': '259 93% 68%', '--accent': '259 93% 95%' }, dark: { ...commonDark, '--primary': '259 93% 68%', '--accent': '259 93% 15%' } },
  { name: 'CMYK', category: 'daisyUIThemes', symbol: '🖨️', swatchColor: '180 100% 50%', light: { ...commonLight, '--primary': '180 100% 50%', '--accent': '180 100% 95%' }, dark: { ...commonDark, '--primary': '180 100% 50%', '--accent': '180 100% 15%' } },
  { name: 'Autumn', category: 'daisyUIThemes', symbol: '🍂', swatchColor: '23 98% 51%', light: { ...commonLight, '--primary': '23 98% 51%', '--accent': '23 98% 95%' }, dark: { ...commonDark, '--primary': '23 98% 51%', '--accent': '23 98% 15%' } },
  { name: 'Business', category: 'daisyUIThemes', symbol: '👔', swatchColor: '215 25% 27%', light: { ...commonLight, '--primary': '215 25% 27%', '--accent': '215 25% 95%' }, dark: { ...commonDark, '--primary': '215 25% 70%', '--accent': '215 25% 15%' } },
  { name: 'Acid', category: 'daisyUIThemes', symbol: '🧪', swatchColor: '101 100% 36%', light: { ...commonLight, '--primary': '101 100% 36%', '--accent': '101 100% 95%' }, dark: { ...commonDark, '--primary': '101 100% 36%', '--accent': '101 100% 15%' } },
  { name: 'Lemonade', category: 'daisyUIThemes', symbol: '🍋', swatchColor: '199 89% 48%', light: { ...commonLight, '--primary': '199 89% 48%', '--accent': '199 89% 95%' }, dark: { ...commonDark, '--primary': '199 89% 48%', '--accent': '199 89% 15%' } },
  { name: 'Night', category: 'daisyUIThemes', symbol: '🌙', swatchColor: '215 28% 17%', light: { ...commonLight, '--primary': '215 28% 17%', '--accent': '215 28% 95%' }, dark: { ...commonDark, '--primary': '215 28% 70%', '--accent': '215 28% 15%' } },
  { name: 'Coffee', category: 'daisyUIThemes', symbol: '☕', swatchColor: '43 96% 56%', light: { ...commonLight, '--primary': '43 96% 56%', '--accent': '43 96% 95%' }, dark: { ...commonDark, '--primary': '43 96% 56%', '--accent': '43 96% 15%' } },
  { name: 'Winter', category: 'daisyUIThemes', symbol: '❄️', swatchColor: '217 91% 60%', light: { ...commonLight, '--primary': '217 91% 60%', '--accent': '217 91% 95%' }, dark: { ...commonDark, '--primary': '217 91% 60%', '--accent': '217 91% 15%' } },
];

export const greyscaleThemes: ThemeDefinition[] = [
  { name: 'Charcoal', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '0 0% 25%', light: { ...commonLight, '--primary': '0 0% 25%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 85%', '--ring': '0 0% 25%' }, dark: { ...commonDark, '--primary': '0 0% 70%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 20%', '--ring': '0 0% 70%' } },
  { name: 'Slate', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '210 10% 40%', light: { ...commonLight, '--primary': '210 10% 40%', '--primary-foreground': '0 0% 98%', '--accent': '210 10% 80%', '--ring': '210 10% 40%' }, dark: { ...commonDark, '--primary': '210 10% 60%', '--primary-foreground': '0 0% 98%', '--accent': '210 10% 20%', '--ring': '210 10% 60%' } },
  { name: 'Stone', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '30 5% 50%', light: { ...commonLight, '--primary': '30 5% 50%', '--primary-foreground': '0 0% 98%', '--accent': '30 5% 90%', '--ring': '30 5% 50%' }, dark: { ...commonDark, '--primary': '30 5% 65%', '--primary-foreground': '0 0% 98%', '--accent': '30 5% 20%', '--ring': '30 5% 65%' } },
  { name: 'Zinc', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '240 5% 60%', light: { ...commonLight, '--primary': '240 5% 60%', '--primary-foreground': '0 0% 98%', '--accent': '240 5% 95%', '--ring': '240 5% 60%' }, dark: { ...commonDark, '--primary': '240 5% 70%', '--primary-foreground': '0 0% 98%', '--accent': '240 5% 20%', '--ring': '240 5% 70%' } },
  { name: 'Neutral', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '0 0% 50%', light: { ...commonLight, '--primary': '0 0% 50%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 90%', '--ring': '0 0% 50%' }, dark: { ...commonDark, '--primary': '0 0% 80%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 20%', '--ring': '0 0% 80%' } },
  { name: 'Gray', category: 'greyscaleThemes', symbol: '⚫', swatchColor: '0 0% 50%', light: { ...commonLight, '--primary': '0 0% 50%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 90%', '--ring': '0 0% 50%' }, dark: { ...commonDark, '--primary': '0 0% 80%', '--primary-foreground': '0 0% 98%', '--accent': '0 0% 20%', '--ring': '0 0% 80%' } },
];

export const customThemes: ThemeDefinition[] = [
    {
      name: 'SET_1_PALETTE_0',
      category: 'customThemes',
      swatchColor: '207 68% 54%',
      light: { '--background': '0 0% 97%', '--foreground': '210 29% 24%', '--card': '0 0% 100%', '--card-foreground': '210 29% 24%', '--popover': '0 0% 100%', '--popover-foreground': '210 29% 24%', '--primary': '207 68% 54%', '--primary-foreground': '0 0% 100%', '--secondary': '181 5% 52%', '--secondary-foreground': '210 29% 24%', '--muted': '181 5% 52%', '--muted-foreground': '181 5% 52%', '--accent': '145 63% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '5 81% 57%', '--destructive-foreground': '0 0% 100%', '--border': '181 5% 52%', '--input': '181 5% 52%', '--ring': '207 68% 54%', },
      dark: { '--background': '210 29% 14%', '--foreground': '0 0% 97%', '--card': '210 29% 10%', '--card-foreground': '0 0% 97%', '--popover': '210 29% 10%', '--popover-foreground': '0 0% 97%', '--primary': '207 68% 54%', '--primary-foreground': '0 0% 100%', '--secondary': '181 5% 42%', '--secondary-foreground': '0 0% 97%', '--muted': '181 5% 42%', '--muted-foreground': '181 5% 62%', '--accent': '145 63% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '5 81% 57%', '--destructive-foreground': '0 0% 100%', '--border': '181 5% 42%', '--input': '181 5% 42%', '--ring': '207 68% 54%', },
    },
    {
      name: 'SET_1_PALETTE_1',
      category: 'customThemes',
      swatchColor: '246 76% 63%',
      light: { '--background': '240 33% 14%', '--foreground': '240 100% 94%', '--card': '237 23% 21%', '--card-foreground': '240 100% 94%', '--popover': '237 23% 21%', '--popover-foreground': '240 100% 94%', '--primary': '246 76% 63%', '--primary-foreground': '0 0% 100%', '--secondary': '238 15% 60%', '--secondary-foreground': '240 100% 94%', '--muted': '238 15% 60%', '--muted-foreground': '238 15% 40%', '--accent': '185 100% 42%', '--accent-foreground': '0 0% 100%', '--destructive': '0 100% 71%', '--destructive-foreground': '0 0% 100%', '--border': '238 15% 60%', '--input': '238 15% 60%', '--ring': '246 76% 63%', },
      dark: { '--background': '240 33% 14%', '--foreground': '240 100% 94%', '--card': '237 23% 21%', '--card-foreground': '240 100% 94%', '--popover': '237 23% 21%', '--popover-foreground': '240 100% 94%', '--primary': '246 76% 63%', '--primary-foreground': '0 0% 100%', '--secondary': '238 15% 60%', '--secondary-foreground': '240 100% 94%', '--muted': '238 15% 60%', '--muted-foreground': '238 15% 40%', '--accent': '185 100% 42%', '--accent-foreground': '0 0% 100%', '--destructive': '0 100% 71%', '--destructive-foreground': '0 0% 100%', '--border': '238 15% 60%', '--input': '238 15% 60%', '--ring': '246 76% 63%', },
    },
    {
      name: 'SET_1_PALETTE_2',
      category: 'customThemes',
      swatchColor: '16 100% 66%',
      light: { '--background': '28 83% 95%', '--foreground': '27 23% 24%', '--card': '0 0% 100%', '--card-foreground': '27 23% 24%', '--popover': '0 0% 100%', '--popover-foreground': '27 23% 24%', '--primary': '16 100% 66%', '--primary-foreground': '27 23% 14%', '--secondary': '0 0% 64%', '--secondary-foreground': '27 23% 24%', '--muted': '0 0% 64%', '--muted-foreground': '0 0% 40%', '--accent': '120 39% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '0 63% 50%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 64%', '--input': '0 0% 64%', '--ring': '16 100% 66%', },
      dark: { '--background': '27 23% 14%', '--foreground': '28 83% 95%', '--card': '27 23% 10%', '--card-foreground': '28 83% 95%', '--popover': '27 23% 10%', '--popover-foreground': '28 83% 95%', '--primary': '16 100% 66%', '--primary-foreground': '27 23% 14%', '--secondary': '0 0% 50%', '--secondary-foreground': '28 83% 95%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 70%', '--accent': '120 39% 49%', '--accent-foreground': '0 0% 100%', '--destructive': '0 63% 50%', '--destructive-foreground': '28 83% 95%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '16 100% 66%', },
    },
    {
      name: 'SET_1_PALETTE_3',
      category: 'customThemes',
      swatchColor: '0 100% 71%',
      light: { '--background': '0 0% 99%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '0 100% 71%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 69%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 69%', '--muted-foreground': '0 0% 40%', '--accent': '207 89% 53%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 69%', '--input': '0 0% 69%', '--ring': '0 100% 71%', },
      dark: { '--background': '0 0% 13%', '--foreground': '0 0% 99%', '--card': '0 0% 10%', '--card-foreground': '0 0% 99%', '--popover': '0 0% 10%', '--popover-foreground': '0 0% 99%', '--primary': '0 100% 71%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 31%', '--secondary-foreground': '0 0% 99%', '--muted': '0 0% 31%', '--muted-foreground': '0 0% 60%', '--accent': '207 89% 53%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 99%', '--border': '0 0% 31%', '--input': '0 0% 31%', '--ring': '0 100% 71%', },
    },
    {
      name: 'SET_1_PALETTE_4',
      category: 'customThemes',
      swatchColor: '248 80% 66%',
      light: { '--background': '212 22% 95%', '--foreground': '212 25% 22%', '--card': '0 0% 100%', '--card-foreground': '212 25% 22%', '--popover': '0 0% 100%', '--popover-foreground': '212 25% 22%', '--primary': '248 80% 66%', '--primary-foreground': '0 0% 100%', '--secondary': '211 15% 69%', '--secondary-foreground': '212 25% 22%', '--muted': '211 15% 69%', '--muted-foreground': '211 15% 49%', '--accent': '181 100% 41%', '--accent-foreground': '0 0% 100%', '--destructive': '0 84% 60%', '--destructive-foreground': '0 0% 100%', '--border': '211 15% 69%', '--input': '211 15% 69%', '--ring': '248 80% 66%', },
      dark: { '--background': '212 25% 12%', '--foreground': '212 22% 85%', '--card': '212 25% 15%', '--card-foreground': '212 22% 85%', '--popover': '212 25% 15%', '--popover-foreground': '212 22% 85%', '--primary': '248 80% 66%', '--primary-foreground': '212 25% 12%', '--secondary': '211 15% 50%', '--secondary-foreground': '212 22% 85%', '--muted': '211 15% 50%', '--muted-foreground': '211 15% 70%', '--accent': '181 100% 41%', '--accent-foreground': '212 25% 12%', '--destructive': '0 84% 60%', '--destructive-foreground': '212 22% 85%', '--border': '211 15% 50%', '--input': '211 15% 50%', '--ring': '248 80% 66%', },
    },
    {
      name: 'SET_1_PALETTE_5',
      category: 'customThemes',
      swatchColor: '197 71% 73%',
      light: { '--background': '180 50% 99%', '--foreground': '0 0% 27%', '--card': '0 0% 100%', '--card-foreground': '0 0% 27%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 27%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 75%', '--secondary-foreground': '0 0% 27%', '--muted': '0 0% 75%', '--muted-foreground': '0 0% 40%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 27%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 75%', '--input': '0 0% 75%', '--ring': '197 71% 73%', },
      dark: { '--background': '0 0% 10%', '--foreground': '0 0% 90%', '--card': '0 0% 12%', '--card-foreground': '0 0% 90%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 90%', '--primary': '197 71% 73%', '--primary-foreground': '0 0% 10%', '--secondary': '0 0% 30%', '--secondary-foreground': '0 0% 90%', '--muted': '0 0% 30%', '--muted-foreground': '0 0% 60%', '--accent': '350 100% 88%', '--accent-foreground': '0 0% 10%', '--destructive': '9 100% 64%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 30%', '--input': '0 0% 30%', '--ring': '197 71% 73%', },
    },
    {
      name: 'SET_1_PALETTE_6',
      category: 'customThemes',
      swatchColor: '330 100% 50%',
      light: { '--background': '0 0% 96%', '--foreground': '0 0% 4%', '--card': '0 0% 88%', '--card-foreground': '0 0% 4%', '--popover': '0 0% 88%', '--popover-foreground': '0 0% 4%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
      dark: { '--background': '0 0% 4%', '--foreground': '0 0% 96%', '--card': '0 0% 12%', '--card-foreground': '0 0% 96%', '--popover': '0 0% 12%', '--popover-foreground': '0 0% 96%', '--primary': '330 100% 50%', '--primary-foreground': '0 0% 96%', '--secondary': '0 0% 50%', '--secondary-foreground': '0 0% 96%', '--muted': '0 0% 50%', '--muted-foreground': '0 0% 60%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 4%', '--destructive': '0 100% 60%', '--destructive-foreground': '0 0% 96%', '--border': '0 0% 50%', '--input': '0 0% 50%', '--ring': '330 100% 50%', },
    },
    {
      name: 'SET_1_PALETTE_7',
      category: 'customThemes',
      swatchColor: '210 79% 45%',
      light: { '--background': '231 48% 94%', '--foreground': '0 0% 13%', '--card': '0 0% 100%', '--card-foreground': '0 0% 13%', '--popover': '0 0% 100%', '--popover-foreground': '0 0% 13%', '--primary': '210 79% 45%', '--primary-foreground': '0 0% 100%', '--secondary': '0 0% 62%', '--secondary-foreground': '0 0% 13%', '--muted': '0 0% 62%', '--muted-foreground': '0 0% 40%', '--accent': '45 93% 47%', '--accent-foreground': '0 0% 13%', '--destructive': '0 63% 50%', '--destructive-foreground': '0 0% 100%', '--border': '0 0% 62%', '--input': '0 0% 62%', '--ring': '210 79% 45%', },
      dark: { '--background': '0 0% 13%', '--foreground': '231 48% 94%', '--card': '0 0% 10%', '--card-foreground': '231 48% 94%', '--popover': '0 0% 10%', '--popover-foreground': '231 48% 94%', '--primary': '210 79% 55%', '--primary-foreground': '0 0% 13%', '--secondary': '0 0% 38%', '--secondary-foreground': '231 48% 94%', '--muted': '0 0% 38%', '--muted-foreground': '0 0% 70%', '--accent': '45 93% 47%', '--accent-foreground': '0 0% 13%', '--destructive': '0 63% 50%', '--destructive-foreground': '231 48% 94%', '--border': '0 0% 38%', '--input': '0 0% 38%', '--ring': '210 79% 55%', },
    },
    {
      name: 'SET_1_PALETTE_8',
      category: 'customThemes',
      swatchColor: '252 82% 62%',
      light: { '--background': '240 14% 15%', '--foreground': '240 100% 96%', '--card': '237 23% 21%', '--card-foreground': '240 100% 96%', '--popover': '237 23% 21%', '--popover-foreground': '240 100% 96%', '--primary': '252 82% 62%', '--primary-foreground': '0 0% 100%', '--secondary': '238 15% 60%', '--secondary-foreground': '240 100% 96%', '--muted': '238 15% 60%', '--muted-foreground': '238 15% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '0 100% 67%', '--destructive-foreground': '0 0% 100%', '--border': '238 15% 60%', '--input': '238 15% 60%', '--ring': '252 82% 62%', },
      dark: { '--background': '240 14% 15%', '--foreground': '240 100% 96%', '--card': '237 23% 21%', '--card-foreground': '240 100% 96%', '--popover': '237 23% 21%', '--popover-foreground': '240 100% 96%', '--primary': '252 82% 62%', '--primary-foreground': '0 0% 100%', '--secondary': '238 15% 60%', '--secondary-foreground': '240 100% 96%', '--muted': '238 15% 60%', '--muted-foreground': '238 15% 40%', '--accent': '180 100% 50%', '--accent-foreground': '0 0% 100%', '--destructive': '0 100% 67%', '--destructive-foreground': '0 0% 100%', '--border': '238 15% 60%', '--input': '238 15% 60%', '--ring': '252 82% 62%', },
    },
    {
      name: 'SET_1_PALETTE_9',
      category: 'customThemes',
      swatchColor: '145, 63%, 49%',
      light: { '--background': '0 0% 97%', '--foreground': '210 29% 24%', '--card': '0 0% 100%', '--card-foreground': '210 29% 24%', '--popover': '0 0% 100%', '--popover-foreground': '210 29% 24%', '--primary': '145 63% 49%', '--primary-foreground': '0 0% 100%', '--secondary': '207 68% 54%', '--secondary-foreground': '0 0% 100%', '--muted': '181 5% 52%', '--muted-foreground': '181 5% 32%', '--accent': '207 68% 54%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 100%', '--border': '181 5% 52%', '--input': '181 5% 52%', '--ring': '145 63% 49%', },
      dark: { '--background': '210 29% 14%', '--foreground': '0 0% 97%', '--card': '210 29% 10%', '--card-foreground': '0 0% 97%', '--popover': '210 29% 10%', '--popover-foreground': '0 0% 97%', '--primary': '145 63% 49%', '--primary-foreground': '0 0% 100%', '--secondary': '207 68% 54%', '--secondary-foreground': '0 0% 100%', '--muted': '181 5% 42%', '--muted-foreground': '181 5% 62%', '--accent': '207 68% 54%', '--accent-foreground': '0 0% 100%', '--destructive': '356 70% 54%', '--destructive-foreground': '0 0% 97%', '--border': '181 5% 42%', '--input': '181 5% 42%', '--ring': '145 63% 49%', },
    },
];

export const appThemes: Record<ThemeCategory, ThemeDefinition[]> = {
    bespokeThemes,
    primaryColorsThemes,
    daisyUIThemes,
    greyscaleThemes,
    customThemes,
};
