import styled, {css} from 'styled-components';

export const MainWrapp = styled.div(() => {

  return css`
	display: flex;
	flex-direction: column;
	padding-left: 35px;
	padding-right: 35px;

	& > div {
		&:last-child {
			margin-bottom: 0;
		}
	}
  `;
});
