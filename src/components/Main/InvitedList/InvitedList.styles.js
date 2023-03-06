import styled, {css} from 'styled-components';


export const InvitedTitle = styled.h3((props) => {
	const {fonts, typography, colors} = props.theme;

  return css`
	font-family: ${fonts.NotoSans};
	font-weight: 600;
	font-size: ${typography.t18};
	color: ${colors.charade};
	line-height: 22.5px;
	margin-bottom: 17px;
  `;
});

