import { useAuth } from '@/features/auth/hooks/useAuth';
import { useAuthStore } from '@/features/auth/stores/authStore';
import { getRoleValue } from '@/features/auth/utils/authUtils';
import { MenuItemType } from '@/types/menu';
import { MenuItemRenderer } from '@/components/atomic';

export const useRoleNavigation = () => {
  const { logout } = useAuth();
  const { getRole } = useAuthStore();
  const role = getRole();
  const baseRolePath = `/${getRoleValue(role)}`;

  const getRoleSpecificItems = (): MenuItemType[] => {
    switch (role) {
      case 'ROLE_USER':
        return [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            linkTo: `${baseRolePath}/profile`,
            template: (item: any) => MenuItemRenderer({ item })
          },
          {
            label: 'Documents',
            items: [
              {
                label: 'New',
                icon: 'pi pi-plus',
                shortcut: '⌘+N',
                template: (item: any) => MenuItemRenderer({ item })
              },
              {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '⌘+S',
                template: (item: any) => MenuItemRenderer({ item })
              }
            ]
          }
        ];
      case 'ROLE_ADMIN':
        return [
          {
            label: 'Dashboard',
            icon: 'pi pi-chart-line',
            linkTo: `${baseRolePath}/dashboard`,
            template: (item: any) => MenuItemRenderer({ item })
          }
        ];
      case 'ROLE_CUSTOMER':
        return [
          {
            label: 'Orders',
            icon: 'pi pi-shopping-cart',
            linkTo: `${baseRolePath}/orders`,
            template: (item: any) => MenuItemRenderer({ item })
          }
        ];
      default:
        return [];
    }
  };

  const getDefaultAvatarItems = (): MenuItemType[] => {
    const roleSpecificItems = getRoleSpecificItems();
    
    return [
      ...roleSpecificItems,
      {
        label: 'Settings',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
            linkTo: `${baseRolePath}/settings`,
            template: (item: any) => MenuItemRenderer({ item })
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: 2,
            linkTo: `${baseRolePath}/messages`,
            template: (item: any) => MenuItemRenderer({ item })
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
            command: () => logout.mutate(),
            template: (item: any) => MenuItemRenderer({ item })
          }
        ]
      }
    ];
  };

  return {
    baseRolePath,
    getDefaultAvatarItems,
    getRoleSpecificItems
  };
}; 