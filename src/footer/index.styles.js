import styled, { css } from "styled-components";

// https://codesandbox.io/s/footer-with-styled-components-3618y?file=/src/index.js:111-223
const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

const FooterWrapper = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  ${media.desktop`
    text-align: left;
  `}
  background-color: green;
  position: absolute;
  bottom: 0;
  min-width: 100%;
`;

export default FooterWrapper;
