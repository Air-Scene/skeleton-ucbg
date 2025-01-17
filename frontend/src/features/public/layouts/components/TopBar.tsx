import { Menubar, MenuItemRenderer } from '@/components/atomic';
import AvatarDropdown from '@/components/common/AvatarDropdown';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import ThemeToggle from '@/components/common/ThemeToggle';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { getRoleValue } from '@/features/auth/utils/authUtils';
import { useAppNavigation } from '@/hooks/useAppNavigation';

const TopBar = () => {
    const { isAuthenticated, getRole } = useAuthStore();
    const { logout } = useAuth();
    const { navigateByRole } = useAppNavigation();

    const baseRolePath = `/${getRoleValue(getRole())}`;

    const navbarItems = [
        {
            label: 'HOME',
            icon: 'pi pi-home',
            linkTo: '/',
            template: (item: any) => MenuItemRenderer({ item })
        },
        {
            label: 'PRICING',
            icon: 'pi pi-dollar',
            linkTo: '/pricing',
            template: (item: any) => MenuItemRenderer({ item })
        },
        {
            label: 'PROJECTS',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: (item: any) => MenuItemRenderer({ item })
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: (item: any) => MenuItemRenderer({ item })
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: (item: any) => MenuItemRenderer({ item })
                },
                {
                    separator: false
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: (item: any) => MenuItemRenderer({ item })
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: (item: any) => MenuItemRenderer({ item })
                        }
                    ]
                }
            ]
        },
        {
            label: 'CONTACT',
            icon: 'pi pi-envelope',
            badge: 3,
            template: (item: any) => MenuItemRenderer({ item })
        }
    ];

    const avatarDropdownItems = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => navigateByRole(getRole()),
            template: (item: any) => MenuItemRenderer({ item })
        },
        {
            label: 'Profile',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
            linkTo: `${baseRolePath}/settings`,
            template: (item: any) => MenuItemRenderer({ item })
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => logout.mutate(),
            template: (item: any) => MenuItemRenderer({ item })
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            {isAuthenticated && <AvatarDropdown items={avatarDropdownItems} />}
        </div>
    );

    return (
        <div className="card fixed w-full top-0 z-50">
            <Menubar model={navbarItems} start={start} end={end} />
        </div>
    )
}

export default TopBar;

