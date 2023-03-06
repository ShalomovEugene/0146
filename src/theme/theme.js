const breakpoints = {
	xs: '360',
	s: '480px',
	sm: '600px',
	m: '767px',
	l: '1024px',
	xl: '1200px',
};

export const mediaQueries = {
	xs: `@media (max-width: ${breakpoints.xs})`,
	s: `@media (max-width: ${breakpoints.s})`,
	sm: `@media (max-width: ${breakpoints.sm})`,
	m: `@media (max-width: ${breakpoints.m})`,
	l: `@media (max-width: ${breakpoints.l})`,
	xl: `@media (max-width: ${breakpoints.xl})`,
};

export const fonts = {
	NotoSans: 'Source Sans Pro',
};

export const typography = {
    t14: '14px',
    t15: '15px',
    t16: '16px',
    t18: '18px',
    t32: '32px',
};

export const colors = {
	white: '#fff',
    titanWhite: '#F0EFFF',
	black: '#000',
	cornflowerBlue: '#766DF4',
    whisper: '#E6E6F2',
    santasGray: '#9898B3',
    cerulean: '#0090DA',
    comet: '#595978',
    charade: '#2E2B3D',
    silver: '#C4C4C4',
    athensGray: '#F4F4F8'
};

export const isIE = (styles) => `@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {${styles}}`;
