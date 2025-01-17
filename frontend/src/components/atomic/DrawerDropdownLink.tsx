import { useState, useRef, useEffect } from "react";

interface DrawerDropdownLinkProps {
    label: string;
    children: React.ReactNode;
}

const DrawerDropdownLink = ({ label, children }: DrawerDropdownLinkProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef<HTMLUListElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children]);
    
    return (
        <li>
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 flex items-center justify-between text-600 cursor-pointer"
            >
                <span className="font-medium">{label}</span>
                <i className={`pi ${isOpen ? 'pi-chevron-down' : 'pi-chevron-up'}`} />
            </div>

            <ul 
                ref={contentRef}
                style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
                className="list-none p-0 m-0 overflow-hidden transition-[height] duration-300 ease-in-out"
            >
                {children}
            </ul>
        </li>
    );
}

export default DrawerDropdownLink;