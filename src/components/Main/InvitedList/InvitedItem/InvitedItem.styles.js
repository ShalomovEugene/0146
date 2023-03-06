import styled, {css} from 'styled-components';
import arrow from '../../../../assets/images/arrow.svg';

export const InvitedItemWrapp = styled.div((props) => {
	const {typography, colors, mediaQueries} = props.theme;

  return css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;

	${mediaQueries.s} {
		flex-direction: column;
		align-items: flex-start;
	}
  `;
});

export const InvitedItemInfo = styled.div((props) => {
	const {typography, colors, mediaQueries} = props.theme;

  return css`
	display: flex;
	align-items: center;

	${mediaQueries.s} {
		margin-bottom: 10px;
	}
  `;
});

export const InvitedItemPhoto = styled.div((props) => {
	const {fonts, typography, colors} = props.theme;

  return css`
	width: 40px;
	height: 40px;
	border-radius: 64px;
	background-color: ${colors.silver};
	display: flex;
    align-items: center;
    justify-content: center;
	color: ${colors.white};
	font-family: ${fonts.NotoSans};
	font-size: ${typography.t15};
	font-weight: 600;
	line-height: 19px;
	text-transform: uppercase;
	margin-right: 8px;
  `;
});

export const InvitedItemBlock = styled.div((props) => {
	const {typography, colors} = props.theme;

  return css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  `;
});

export const InvitedItemEmail = styled.div((props) => {
	const {fonts, typography, colors} = props.theme;

  return css`
	font-family: ${fonts.NotoSans};
	font-size: ${typography.t16};
	font-weight: 400;
	line-height: 20px;
	color: ${colors.comet};
	margin-bottom: 6px;
  `;
});

export const InvitedItemStatus = styled.div((props) => {
	const {fonts, typography, colors} = props.theme;

  return css`
	font-family: ${fonts.NotoSans};
	font-size: ${typography.t14};
	font-weight: 600;
	line-height: 24px;
	color: ${colors.santasGray};
	padding-left: 8px;
	padding-right: 8px;
	background-color: ${colors.athensGray};
	border-radius: 16px;
  `;
});


export const InvitedItemRole = styled.select((props) => {
	const {typography, colors, fonts, mediaQueries} = props.theme;

  return css`
	border: none;
	font-weight: 400;
	line-height: 20px;
	color: ${colors.santasGray};
	font-size: ${typography.t16};
	font-family: ${fonts.NotoSans};
	padding-right: 15px;
	text-align: right;
	appearance: none;
	background: transparent;
	background-image: url(${arrow});
	background-repeat: no-repeat;
	background-position-x: 100%;
	background-position-y: 5px;

	${mediaQueries.s} {
		text-align: initial;
		width: 100%;
	}

	&:focus {
		outline: none;
	}
  `;
});