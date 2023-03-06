import {InvitedItemWrapp, InvitedItemInfo, InvitedItemBlock, InvitedItemPhoto, InvitedItemEmail, InvitedItemStatus, InvitedItemRole } from './InvitedItem.styles';

const InvitedItem = ({email, role}) => {

	return (
		<>
			<InvitedItemWrapp>
				<InvitedItemInfo>
					<InvitedItemPhoto>{email[0][0].toUpperCase()}</InvitedItemPhoto>
					<InvitedItemBlock>
						<InvitedItemEmail>{email}</InvitedItemEmail>
						<InvitedItemStatus>Pending</InvitedItemStatus>
					</InvitedItemBlock>
				</InvitedItemInfo>
				<InvitedItemRole defaultValue={role}>
					<option value="Admin">Admin</option>
					<option value="Platform manager">Platform manager</option>
					<option value="User">User</option>
				</InvitedItemRole>
			</InvitedItemWrapp>
		</>
	)
}

export default InvitedItem;