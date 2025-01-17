import { Menu, Avatar } from '@/components/atomic';
import { useRef } from 'react';

export type AvatarDropdownProps = {
    items: any;
    // image: string;
}

export default function AvatarDropdown({ items }: AvatarDropdownProps) {
    const menuRef = useRef<Menu>(null);

    return (
        <div className="card flex justify-content-center">
            <Avatar 
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" 
                size="normal" 
                shape="circle" 
                className="mr-2" 
                onClick={(e) => menuRef.current?.toggle(e)} 
            />
            <Menu ref={menuRef} model={items} popup className="w-full md:w-60" />
        </div>
    )
}

