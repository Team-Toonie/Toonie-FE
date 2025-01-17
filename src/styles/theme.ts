const hexToRgba = (hex: string, alpha: number): string => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const theme: Theme = {
  colors: {
    neutral: {
      100: '#FAFAFA',
      200: '#F7F7F7',
      300: '#EEEEEE',
      400: '#E4E4E4',
      500: '#D6D6D6',
      600: '#919191',
      700: '#747474',
      800: '#4E4E4E',
      900: '#000000'
    },
    blue: {
      100: '#436BFD',
      10: hexToRgba('#436BFD', 0.1)
    },
    orange: {
      100: '#FF6625',
      10: hexToRgba('#FF6625', 0.1)
    },
    yellow: {
      100: '#FFD53B',
      10: hexToRgba('#FFD53B', 0.1)
    },
    green: {
      100: '#26CA7B',
      10: hexToRgba('#26CA7B', 0.1)
    }
  }
};

type NeutralShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type ColorShades = {
  100: string;
  10: string;
};

type Theme = {
  colors: {
    neutral: NeutralShades;
    blue: ColorShades;
    orange: ColorShades;
    yellow: ColorShades;
    green: ColorShades;
  };
};

export default theme;
