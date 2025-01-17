import BaseRoleLayout from '@/layouts/BaseRoleLayout';
import CustomerDrawer from './components/CustomerDrawer';
import CustomerNavbar from './components/CustomerNavbar';

const CustomerLayoutProvider = () => {
  return <BaseRoleLayout Navbar={CustomerNavbar} Drawer={CustomerDrawer} />;
};

export default CustomerLayoutProvider; 