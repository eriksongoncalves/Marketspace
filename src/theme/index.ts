export default {
  fonts: {
    family: {
      dmSans: {
        regular: 'Karla_400Regular',
        bold: 'Karla_700Bold'
      }
    },
    size: {
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px'
    },
    lineHeight: (fontSize: number) => `${fontSize * 1.3}px`
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
    blue_light: '#647AC7'
  }
} as const;
