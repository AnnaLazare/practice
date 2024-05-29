import React from 'react';
import './styles/Header.css';
import { ReactComponent as Image } from '../log.svg';



const Header = () => {
    return (
        <header className="header">
            <Image width={40} height={40} />
            <h1>Учебный проект</h1>
        </header>
    );
}

export default Header;