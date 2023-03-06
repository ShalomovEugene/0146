import React, {useState, useEffect} from 'react';
import InvitedItem from './InvitedItem';
import {InvitedTitle } from './InvitedList.styles';


const InvitedList = ({formData}) => {
	const [inviteList, setInviteList] = useState([]);

	useEffect(() => {
		formData.email && formData.email.split(',').length >= 1  && setInviteList(inviteList => [...inviteList, Object.values(formData)]);
	}, [formData]);

	const invitedItems = inviteList.map((item, inx) => {
		if (item[0].split(',').length > 1) {
			let content = [];
			for (let i = 0; i < item[0].split(',').length; i++ ) {
				content.push(<InvitedItem email={item[0].split(',')[i]} key={i} role={formData.role}/>);
			}
			return content;
		}

		return (
			<InvitedItem email={item[0]} key={inx} role={formData.role}/>
		);
	});

	return (
		<>
			<InvitedTitle>Last invited users</InvitedTitle>
			{invitedItems}
		</>
	);
};

export default InvitedList;
