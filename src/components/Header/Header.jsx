import React from 'react';
import {HeaderWrapp, HeaderTitle, CloseButton} from './Header.styles';
import Cross from '../../assets/images/cross.svg';

const Header = () => {

	return (
		<HeaderWrapp>
			<HeaderTitle>Invite new users</HeaderTitle>
			<CloseButton>
				<img src={Cross} alt="cross"/>
			</CloseButton>
		</HeaderWrapp>
	);
};

export default Header;
