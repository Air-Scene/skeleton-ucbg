import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

interface BaseRoleLayoutProps {
  Navbar: FC<{ onMenuClick: () => void }>;
  Drawer: FC<{ visible: boolean; onHide: () => void }>;
}

const BaseRoleLayout = ({ Navbar, Drawer }: BaseRoleLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar onMenuClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      
      <Drawer
        visible={isDrawerOpen}
        onHide={() => setIsDrawerOpen(false)}
      />

      <main className="pt-16 px-4 text-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseRoleLayout; 