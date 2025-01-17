import ThemeToggle from './ThemeToggle';
import { Menubar, Button } from '@/components/atomic';
import { useAuthStore } from '@/features/auth/stores/authStore';
import AvatarDropdown from './AvatarDropdown';


export type NavbarProps = {
  onMenuClick: () => void;
  avatarDropdownItems: any[];
};

const Navbar = ({ onMenuClick, avatarDropdownItems }: NavbarProps) => {
  const { isAuthenticated } = useAuthStore();

  const start = (
    <Button
      icon="pi pi-bars"
      onClick={onMenuClick}
      text
      severity="secondary"
      className="px-3 py-2"
    />
  );

  const end = (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      {isAuthenticated && (
        <AvatarDropdown items={avatarDropdownItems} />
      )}
    </div>
  );


  return (
    <Menubar
      start={start}
      end={end}
      className="fixed top-0 left-0 right-0 z-50 border-none shadow-md [&_.p-menubar-button]:hidden"

    />
  );
};

export default Navbar; 