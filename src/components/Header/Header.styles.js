import styled, {css} from 'styled-components';

export const HeaderWrapp = styled.header(() => {

  return css`
	display: flex;
	margin-bottom: 24px;
	justify-content: space-between;
	align-items: center;
  `;
});

export const HeaderTitle = styled.h1((props) => {
	const {typography, colors, mediaQueries} = props.theme;

  return css`
	font-size: ${typography.t32};
	font-weight: 600;
	line-height: 40px;
	color: ${colors.cornflowerBlue};
	padding: 4px 45px 4px 53px;
	background-color: ${colors.titanWhite};
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;

	${mediaQueries.sm} {
		font-size: 27px;
	}
  `;
});

export const CloseButton = styled.button((props) => {
	const {mediaQueries} = props.theme;

 return css`
	margin-right: 45px;
	background-color: transparent;
	border: none;
	width: 32px;
	height: 32px;
	cursor: pointer;

	${mediaQueries.sm} {
        margin-right: 30px;
    }
`;
});
