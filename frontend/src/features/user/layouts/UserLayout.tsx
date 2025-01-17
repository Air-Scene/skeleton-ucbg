import BaseRoleLayout from '@/layouts/BaseRoleLayout';
import UserDrawer from './components/UserDrawer';
import UserNavbar from './components/UserNavbar';

const UserLayoutProvider = () => {
  return <BaseRoleLayout Navbar={UserNavbar} Drawer={UserDrawer} />;
};

export default UserLayoutProvider; 