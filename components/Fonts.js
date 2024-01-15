import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Roboto S';
        font-style: normal;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700&family=Roboto+Slab:wght@300&display=swap');
      }
      `}
  />
);

export default Fonts;
