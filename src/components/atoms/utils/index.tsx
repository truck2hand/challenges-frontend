export const getColorCode = (color: string | 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return '#000000';
    case 'secondary':
      return '#000000';
    case 'link':
      return '#0091ff';
    default:
      return color;
  }
};
