import Navbar from '@/components/common/Navbar';
import { useRoleNavigation } from '@/hooks/useRoleNavbarItems';

interface AdminNavbarProps {
  onMenuClick: () => void;
}

const AdminNavbar = ({onMenuClick}: AdminNavbarProps) => {
  const { getDefaultAvatarItems } = useRoleNavigation();
  const avatarDropdownItems = getDefaultAvatarItems();

  return (
    <Navbar 
      onMenuClick={onMenuClick} 
      avatarDropdownItems={avatarDropdownItems}
    />
  );
};

export default AdminNavbar;