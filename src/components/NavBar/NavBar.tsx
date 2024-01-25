import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.tsx";
import AvatarAccount from "../AvatarAccount/AvatarAccount.tsx";

export default function NavBar() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Home');

    // Function to handle tab click
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    // Function to determine the color of the tab
    const getTabColor = (tabName: string) => {
        return activeTab === tabName ? 'success' : 'foreground';
    };

    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ChessData</p>
            </NavbarBrand>

            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link
                        color={getTabColor('Home')}
                        aria-current={activeTab === 'Home' ? 'page' : undefined}
                        href="/"
                        onClick={() => handleTabClick('Home')}
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color={getTabColor('Players')}
                        href="/Players"
                        onClick={() => handleTabClick('Players')}
                    >
                        Players
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color={getTabColor('Games')}
                        href="/Games"
                        onClick={() => handleTabClick('Games')}
                    >
                        Games
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color={getTabColor('Tournaments')}
                        href="/Tournaments"
                        onClick={() => handleTabClick('Tournaments')}
                    >
                        Tournaments
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <AvatarAccount name={'Magnus'} />
            </NavbarContent>
        </Navbar>
    );
}
