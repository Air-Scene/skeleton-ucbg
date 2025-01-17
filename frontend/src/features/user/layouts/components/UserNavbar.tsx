import Navbar from '@/components/common/Navbar';
import { useRoleNavigation } from '@/hooks/useRoleNavbarItems';

interface UserNavbarProps {
    onMenuClick: () => void;
}

const UserNavbar = ({ onMenuClick }: UserNavbarProps) => {
    const { getDefaultAvatarItems } = useRoleNavigation();
    const avatarDropdownItems = getDefaultAvatarItems();
    
    return (
        <Navbar
            onMenuClick={onMenuClick}
            avatarDropdownItems={avatarDropdownItems}
        />
    );
};

export default UserNavbar;