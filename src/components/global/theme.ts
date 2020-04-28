import 'styled-components';

export const theme = {
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'],
  buttons: {
    primary: { default: '#222222', hover: '#222222', disabled: '#a9a9a9' },
    secondary: { default: '#ff6571', hover: '#e55661', disabled: '#a9a9a9' },
    link: { default: '0091ff', hover: '0091ff', disabled: '#a9a9a9' },
    light: { default: '#8898aa', hover: '8898aa', disabled: '#a9a9a9' },
    alert: { default: '#fa0d0f', hover: '', disabled: '#a9a9a9' },
    rating1: { default: '#f87d33', hover: '', disabled: '#a9a9a9' },
  },
} as const;
// ______________________________________________________
//
type AppTheme = typeof theme;
// ______________________________________________________
//
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
