import React from "react";
import { Link } from "react-router-dom";

interface MenuListProps {
    link: string;
    text: string;
}

interface HeaderProps {
    menuList: MenuListProps[];
}

export const Header = ({menuList} : HeaderProps) => {
    
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col col--logo">
                        <h1 className="h1">LOGO</h1>
                    </div>
                    <nav className="col col--nav">
                        <ul>
                            {menuList.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}