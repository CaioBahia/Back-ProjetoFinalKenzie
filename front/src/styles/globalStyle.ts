import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-brand-1: #4529E6;
    --color-brand-2: #5126EA;
    --color-brand-3: #80A6F0;
    --color-brand-4: #EDEAFD;

    --color-grey-scale-grey-0: #0b0d0d;
    --color-grey-scale-grey-1: #212529;
    --color-grey-scale-grey-2: #495057;
    --color-grey-scale-grey-3: #868e96;
    --color-grey-scale-grey-4: #adb5bd;
    --color-grey-scale-grey-5: #ced4da;
    --color-grey-scale-grey-6: #dee2e6;
    --color-grey-scale-grey-7: #e9ecef;
    --color-grey-scale-grey-8: #f1f3f5;
    --color-grey-scale-grey-9: #f8f9fa;
    --color-grey-scale-grey-10: #fdfdfd;
    --color-colors-fixed-white-fixed: #ffffff;

    --color-random-1: #E34D8C;
    --color-random-2: #C04277;
    --color-random-3: #7D2A4D;
    --color-random-4: #7000FF;
    --color-random-5: #5200E3;
    --color-random-6: #36007D;
    --color-random-7: #349974;
    --color-random-8: #2A7D5F;
    --color-random-9: #153D2E;
    --color-random-10: #6100FF;
    --color-random-11: #5700E3;
    --color-random-12: #30007D;

    --color-alert-1: #CD2B31;
    --color-alert-2: #FDD8D8;
    --color-alert-3: #FFE5E5;

    --color-sucess-1: #18794E;
    --color-sucess-2: #CCEBD7;
    --color-sucess-3: #DDF3E4;

  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
