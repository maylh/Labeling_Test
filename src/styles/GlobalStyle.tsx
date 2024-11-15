import { Global,css } from "@emotion/react";

export const globalStyle = css`
  //여기에 전역 상태 정의!
`

const GlobalStyle = () => <Global styles={globalStyle}/>

export default GlobalStyle;