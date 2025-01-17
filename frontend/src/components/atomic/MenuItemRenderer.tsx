import { Link } from 'react-router-dom';
import { Badge } from '@/components/atomic';

export type MenuItemRendererProps = {
    item: any;
}

export const MenuItemRenderer = ({ item }: MenuItemRendererProps) => {
    return (
      <div className='p-menuitem-content'>
          {item.linkTo ? (
              <Link to={item.linkTo} className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </Link>
        ) : (
            <a onClick={item.command} className="flex align-items-center p-menuitem-link w-full">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        )}
    </div>
  );
}

export default MenuItemRenderer;