import Navbar from '@/components/common/Navbar';
import { useRoleNavigation } from '@/hooks/useRoleNavbarItems';

interface CustomerNavbarProps {
  onMenuClick: () => void;
}

const CustomerNavbar = ({onMenuClick}: CustomerNavbarProps) => {
  const { getDefaultAvatarItems } = useRoleNavigation();
  const avatarDropdownItems = getDefaultAvatarItems();

  return (
    <Navbar 
      onMenuClick={onMenuClick} 
      avatarDropdownItems={avatarDropdownItems}
    />
  );
};

export default CustomerNavbar;