import DrawerDropdownLink from "@/components/atomic/DrawerDropdownLink";
import DrawerLink from "@/components/atomic/DrawerLink";
import Drawer from "@/components/common/Drawer";

interface UserDrawerProps {
    visible: boolean;
    onHide: () => void;
}

const UserDrawer = ({ visible, onHide }: UserDrawerProps) => {
    return (
        <Drawer
            visible={visible}
            onHide={onHide}
        >
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
    )
}

export default UserDrawer;