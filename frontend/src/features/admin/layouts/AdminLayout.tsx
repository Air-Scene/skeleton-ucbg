import BaseRoleLayout from '@/layouts/BaseRoleLayout';
import AdminDrawer from './components/AdminDrawer';
import AdminNavbar from './components/AdminNavbar';

const AdminLayoutProvider = () => {
  return <BaseRoleLayout Navbar={AdminNavbar} Drawer={AdminDrawer} />;
};

export default AdminLayoutProvider; 