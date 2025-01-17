import { Button } from 'primereact/button';
import { useState } from 'react';
import Drawer from '@/components/common/Drawer';
import DrawerLink from '@/components/atomic/DrawerLink';
import DrawerDropdownLink from '@/components/atomic/DrawerDropdownLink';

const Showcase = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">PrimeReact Test</h1>

      {/* Drawer Section */}
      <div className="card mb-4">
        <h2 className="text-2xl font-bold mb-2">Drawer/Sidebar</h2>
        <Button
          label="Open Drawer"
          icon="pi pi-bars"
          onClick={() => setDrawerVisible(true)}
          className="mb-4"
        />
        <Drawer
          visible={drawerVisible}
          onHide={() => setDrawerVisible(false)}
        >
          <DrawerLink label="Dashboard" linkTo="/dashboard" icon="pi-home" />
          <DrawerLink label="Bookmarks" linkTo="/bookmarks" icon="pi-bookmark" />
          <DrawerLink label="Team" linkTo="/team" icon="pi-users" />
          <DrawerLink label="Messages" linkTo="/messages" icon="pi-comments" badgeValue="3" />
          <div className="mt-2">
            <DrawerDropdownLink label="Applications">
              <DrawerLink label="Projects" linkTo="/projects" icon="pi-folder" />
              <DrawerLink label="Performance" linkTo="/performance" icon="pi-chart-line" />
              <DrawerLink label="Settings" linkTo="/settings" icon="pi-cog" />
            </DrawerDropdownLink>
          </div>
        </Drawer>
      </div>

      {/* Basic Buttons */}
      <div className="card flex flex-wrap gap-3 mb-4">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
      </div>

      {/* Raised Buttons */}
      <div className="card flex flex-wrap gap-3 mb-4">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warning" severity="warning" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
      </div>

      {/* Outlined Buttons */}
      <div className="card flex flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warning" severity="warning" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
      </div>
    </div>
  );
};

export default Showcase; 