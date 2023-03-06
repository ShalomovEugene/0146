import styled, {css} from 'styled-components';
import arrow from '../../../assets/images/arrow.svg';

export const FormWrapp = styled.div(() => {

  return css`
    form {
      display: flex;
      flex-direction: column;
    }
  `;
});

export const HeaderForm = styled.div((props) => {
	const {mediaQueries} = props.theme;

  return css`
      display: flex;
      flex-grow: 1;
      margin-bottom: 24px;
      position: relative;

    ${ErrorMessage} {
      left: 16px;
      bottom: -22px;
    }

    ${mediaQueries.sm} {
			flex-direction: column;
		}
  `;
});

export const FooterForm = styled.div((props) => {
	const {typography, colors, fonts, mediaQueries} = props.theme;


  return css`
      display: flex;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid ${colors.silver};
      margin-bottom: 24px;
      position: relative;

      ${mediaQueries.sm} {
        padding-bottom: 30px;
      }

      ${TermsAndConditions}, a {
        font-family: ${fonts.NotoSans};
        font-size: ${typography.t16};
        font-weight: 400;
        line-height: 20px;
      }
      ${TermsAndConditions} {
        color: ${colors.comet}
      }
      a {
        color: ${colors.cerulean};
        transition: .5s;

        &:hover {
          opacity: .7;
        }
      }
  `;
});

export const Inputs = styled.div((props) => {
	const {typography, colors, fonts, mediaQueries} = props.theme;

  return css`
    display: flex;
    flex-grow: 1;
    border-radius: 8px;
    border: 1px solid ${colors.silver};
    padding: 8px 16px;
    margin-right: 21px;

    ${mediaQueries.sm} {
			margin-right: 0;
      margin-bottom: 10px;
		}

    ${mediaQueries.s} {
      flex-direction: column;
		}

    input {
      flex-grow: 1;

      ${mediaQueries.s} {
        margin-bottom: 5px;
      }
    }

    input, select {
      border: none;
      font-weight: 400;
      line-height: 20px;
      color: ${colors.santasGray};
      font-size: ${typography.t16};
      font-family: ${fonts.NotoSans}
    }

    input::placeholder {
      color: ${colors.santasGray};
      font-size: ${typography.t16};
      font-family: ${fonts.NotoSans}
      font-weight: 400;
      line-height: 20px;
    }

    select {
      text-align: right;
      padding-right: 15px;
      margin-left: 5px;
      appearance: none;
      background: transparent;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 5px;

      ${mediaQueries.s} {
        text-align: initial;
        margin-left: 0;
      }
    }

    input:focus-visible, select:focus {
      outline: none;
    }

    input:autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset !important;
    }
  `;
});


export const Button = styled.button((props) => {
	const {typography, colors, fonts} = props.theme;

  return css`
    border-radius: 10px;
    border: none;
    padding: 8px 22px;
    text-transform: uppercase;
    color: ${colors.santasGray};
    font-size: ${typography.t15};
    line-height: 19px;
    font-family: ${fonts.NotoSans};
    cursor: pointer;
  `;
});


export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 37px;
  padding-top: 25px;
  cursor: pointer;
  user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      
      &:checked ~ ${Checkmark} {
        background-color: #2196F3;
      }

      &:checked ~ ${Checkmark}:after {
        display: block;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
`;

export const Checkmark = styled.span((props) => {
	const {colors} = props.theme;

  return css`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${colors.cornflowerBlue};
    border-radius: 4px;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  `;
});

export const TermsAndConditions = styled.p``;

export const ErrorMessage = styled.p((props) => {
	const {typography} = props.theme;
  return css`
    color: red;
    bottom: 4px;
    left: 16px;
    position: absolute;
    font-size: ${typography.t14}
  `;
});
