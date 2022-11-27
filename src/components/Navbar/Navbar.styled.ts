import { styled } from '../../stitches.config';

export const Nav = styled('nav', {
  overflowX: 'auto',
});

export const Tabs = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  gap: '$16',
  borderBottom: '$sizes$2 $colors$gray90 solid',
  padding: '0 $24',
  paddingBottom: '$14',
  position: 'relative',
  width: 'fit-content',
});

export const TabBadge = styled('span', {
  marginLeft: '$8',
  padding: '$2 $6',
  borderRadius: '$8',
  backgroundColor: '$gray90',
});

export const TabItem = styled('li', {
  textDecoration: 'none',
  color: '$gray20',
  padding: '$4',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  flexShrink: '0',
  textAlign: 'center',
  variants: {
    selected: {
      true: {
        color: '$purple',
        [`& ${TabBadge}`]: {
          backgroundColor: '$purple90',
        },
      },
    },
  },
});

export const TabHighlightLine = styled('div', {
  position: 'absolute',
  borderRadius: '2px',
  height: '2px',
  bottom: '-2px',
  marginLeft: '$24',
  left: '0',
  backgroundColor: '$purple',
  transition: 'left .5s, width .5s',
});
