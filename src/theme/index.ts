enum FontFamilies {
  'karlaRegular' = 'karlaRegular',
  'karlaBold' = 'karlaBold'
}

const theme = {
  fonts: {
    family: {
      karla: {
        regular: 'Karla_400Regular',
        bold: 'Karla_700Bold'
      }
    },
    size: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px'
    },
    lineHeight: (fontSize: number) => `${(fontSize * 1.3).toFixed(2)}px`
  },
  colors: {
    gray_1: '#1A181B',
    gray_2: '#3E3A40',
    gray_3: '#5F5B62',
    gray_4: '#9F9BA1',
    gray_5: '#D9D8DA',
    gray_6: '#EDECEE',
    gray_7: '#F7F7F8',
    blue: '#364D9D',
    blue_light: '#647AC7',
    white: '#FFFFFF'
  }
} as const;

const mapFontFamilies = {
  [FontFamilies.karlaRegular]: theme.fonts.family.karla.regular,
  [FontFamilies.karlaBold]: theme.fonts.family.karla.bold
};

export { FontFamilies, mapFontFamilies, theme };
