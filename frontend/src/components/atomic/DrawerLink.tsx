import { Badge } from "primereact/badge";
import { Ripple } from "primereact/ripple"
import { Link } from "react-router-dom";

interface DrawerLinkProps {
    label: string;
    linkTo: string;
    icon: string;
    badgeValue?: string;
}

const DrawerLink = ({ label, linkTo, icon, badgeValue }: DrawerLinkProps) => {
    if (badgeValue) {
        return (
            <li>
                <Link to={linkTo}
                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full text-inherit"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="flex justify-between w-full">
                        <div>
                            <i className={`pi ${icon} mr-2`}></i>
                            <span className="font-medium"> {label} </span>
                        </div>
                        <Badge value={badgeValue} />
                    </div>

                    <Ripple />
                </Link>
            </li>
        )
    }

    return (
        <li>
            <Link to={linkTo}
                className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full text-inherit"
                style={{ textDecoration: 'none' }}
            >
                <i className={`pi ${icon} mr-2`}></i>
                <span className="font-medium"> {label} </span>
                <Ripple />
            </Link>
        </li>
    )
}

export default DrawerLink;