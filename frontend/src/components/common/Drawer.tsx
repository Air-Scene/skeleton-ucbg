import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

export type DrawerProps = {
  visible: boolean;
  onHide: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
};

export default function Drawer({ visible, onHide, children, header }: DrawerProps) {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      className="w-full md:w-[300px]"
      header={header || <p className="font-semibold text-2xl text-primary m-0">Your Logo</p>}
    >
      <div className="h-full surface-section flex flex-col">
        <div>
          {/* Navigation */}
          <div className="overflow-y-auto flex-1">
            <ul className="list-none p-0 m-0">
              {children}
            </ul>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-auto border-top-1 surface-border p-3">
          <div className="flex align-items-center justify-content-between">
            <div className="flex align-items-center gap-2">
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
              <div>
                <span className="font-bold block">Amy Elsner</span>
                <span className="text-sm text-600">Frontend Developer</span>
              </div>
            </div>
            <Button icon="pi pi-cog" rounded text severity="secondary" aria-label="Settings" />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
