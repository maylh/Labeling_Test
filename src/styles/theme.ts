const colors = {
  //여기에 색 정의 
  
};

const fonts = {
  //여기에 폰트 정의
};

const theme  = {
  colors,
  fonts,
};

export default theme;

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;