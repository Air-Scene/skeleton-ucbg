export interface MenuItemType {
  label?: string;
  icon?: string;
  shortcut?: string;
  badge?: number;
  linkTo?: string;
  items?: MenuItemType[];
  separator?: boolean;
  command?: () => void;
  template?: (item: any) => JSX.Element;
} 