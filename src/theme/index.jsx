// in this file we would contains all the custom styling part whether it's a color or font-size or transitions
// so that if there is color change we will do at one place and it would get changed all over in the product
// it's extensible and scalable

import { css, keyframes, } from 'styled-components';

export const BREAKPOINTS = {
  PHONE: 544, // screen with upto 544px is considered a phone
  TABLET: 768, // screen with upto 768px is considered a TABLET
  DESKTOP: 1012,
  WIDE_DESKTOP: 1280,
};

export const transitionDurations = {
  VERY_FAST_TRANSIT: '80ms',
  FAST_TRANSIT: '160ms',
  MEDIUM_TRANSIT: '240ms',
  SLOW_TRANSIT: '320ms',
  VERY_SLOW_TRANSIT: '560ms',
};

const media = Object.keys(BREAKPOINTS).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args) => css`
      @media (max-width: ${BREAKPOINTS[label]}px) {
        ${css(...args)}
      }
    `,
  }),
  {}
);

const mappedKeyFrames = {
  smoothBounce: keyframes`
    0% { transform: translateY(0); } 
    20% { transform: translateY(0); } 
    40% { transform: translateY(0); } 
    50% { transform: translateY(5px); } 
    60% { transform: translateY(0); }  
    80% { transform: translateY(0); } 
    100% { transform: translateY(0); } 
  `,
};

const CustomFormStyles = {
  REQUEST_CONSULTATION_FORM : {
    FONT_SIZE: '14px',
    COLOR: '#565656',
    DISPLAY: 'block',
    HEIGHT: '40px',
  },
};

export default {
  default: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    OCEAN_GREEN: '#45A66E',
    JACKSONS_PURPLE :'#311996',
    SCORPION: '#575757',
    MERCURY: '#E5E5E5',

    BLACK_RGB_16: 'rgba(0, 0, 0, 0.16)',
    BLACK_RGB_8: 'rgba(0, 0, 0, 0.08)',
    BLACK_RGB_4: 'rgba(0, 0, 0, 0.04)',

    LIGHT_FONT: 300,
    MEDIUM_FONT: 500,
    SEMI_BOLD_FONT: 600,
    BOLD_FONT: 700,

    XX_SMALL: '8px',
    X_SMALL: '10px',
    X_MEDIUM_SMALL: '11px',
    SMALL: '12px',
    MEDIUM: '14px',
    X_MEDIUM: '15px',
    LARGE: '16px',
    X_LARGE: '18px',
    XX_LARGE: '20px',
    SUB_LARGE: '22px',
    XXX_LARGE: '24px',
    SUB_HEADING: '25px',
    X_SUB_HEADING: '28px',
    HEADING: '30px',
    L_HEADING: '32px',
    XL_HEADING: '36px',
    PAGE_HEADING: '40px',
    L_PAGE_HEADING: '48px',
    L_HEAD: '60px',

    ...media,

    ...mappedKeyFrames,

    ...transitionDurations,

    ...CustomFormStyles,
  },
};
