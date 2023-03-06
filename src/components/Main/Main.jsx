import React, {useState} from 'react';
import InvitedList from './InvitedList';
import InviteForm from './InviteForm';
import {MainWrapp} from './Main.styles';


const Main = () => {
	const [formData, setFormData ] = useState({ email: '', role: 'Admin', termsAndConditions: false });

	return (
		<MainWrapp>
			<InviteForm formData={formData} setFormData={setFormData}/>
			<InvitedList formData={formData}/>
		</MainWrapp>
	);
};

export default Main;
