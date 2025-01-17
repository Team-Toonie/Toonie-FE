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
      100: '#436BFD'
    },
    orange: {
      100: '#FF6625'
    },
    yellow: {
      100: '#FFD53B'
    },
    green: {
      100: '#26CA7B'
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
