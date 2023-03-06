import React from 'react';
import {  Field, Form, Formik } from 'formik';
import {FormWrapp, Inputs, HeaderForm, FooterForm, Button,Container, Checkmark ,TermsAndConditions, ErrorMessage} from './InviteForm.styles';
 import * as Yup from 'yup';


const FormSchema = Yup.object().shape({
	email: Yup.string()
    .required('The field is required'),
	termsAndConditions: Yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
});
const InviteForm = ({formData, setFormData}) => {

	return (
		<FormWrapp>
			<Formik
			initialValues={formData}
			validateOnChange={false}
			onSubmit={(values, { resetForm })  => {
				setFormData(values);
				resetForm();
			}}
			validationSchema={FormSchema}
			validateOnBlur={false}
			>
			{({errors}) => {
			
					return (
						<Form >
							<HeaderForm>
								<Inputs>
									<Field type="text" name="email" placeholder="Separate Emails by coma"/>
									{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
									<Field as="select" name="role">
										<option value="Admin" >Admin</option>
										<option value="Platform manager">Platform manager</option>
										<option value="User">User</option>
									</Field>
								</Inputs>
								<Button type="submit">Send invite</Button>
							</HeaderForm>

							<FooterForm>
								<Container>
									<Field type="checkbox" name="termsAndConditions" />
									<Checkmark/>
								</Container>
								<TermsAndConditions>You agree that the usersuse of his service will be governedby the <a href="#">User terms of Service</a></TermsAndConditions>
								{errors.termsAndConditions && <ErrorMessage>{errors.termsAndConditions}</ErrorMessage>}
							</FooterForm>
						</Form>
					);
			}}
			</Formik>
		</FormWrapp>
	);
};

export default InviteForm;
