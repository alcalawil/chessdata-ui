
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";

interface AvatarAccountProps {
name: string;
}

const AvatarAccount = (props: AvatarAccountProps) => {
	const handleLogout = () => {
		console.log('Logout');
	};

	return (
		<Dropdown placement="bottom-end">
			<DropdownTrigger>
				<Avatar
					isBordered
					as="button"
					className="transition-transform"
					color="success"
					name={props.name}
					size="sm"
					src="https://www.chesscampus.com/wp-content/uploads/2024/01/avatar-17-420x280.jpg"
					/>
			</DropdownTrigger>

			<DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={['profile']}>
				<DropdownItem key="profile" className="h-14 gap-2" isDisabled>
					<p className="font-semibold">Hi, {props.name} 👋</p>
				</DropdownItem>
				<DropdownItem key="settings">My Profile</DropdownItem>
				<DropdownItem key="settings">Settings</DropdownItem>
				<DropdownItem key="logout" color="danger" onClick={handleLogout}>
					Log Out
				</DropdownItem>
			</DropdownMenu>
			</Dropdown>
	);
};

export default AvatarAccount;
