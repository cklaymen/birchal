import { createStitches } from '@stitches/react';

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      purple: '#6922D3',
      purple90: '#F0E9FA',
      gray20: '#5E6484',
      gray90: '#EBECF0',
    },
    space: {
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      14: '14px',
      16: '16px',
      24: '24px',
    },
    sizes: {
      2: '2px',
    },
    radii: {
      8: '8px',
    },
    fontSizes: {
      base: '14px',
    },
  },
});

export const globalStyles = globalCss({
  body: {
    fontFamily: 'Helvetica',
    fontSize: '$base',
  },
});
