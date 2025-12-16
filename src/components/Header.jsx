import './Header.css';
import { useState } from 'react';


function Header() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <header className="header">
            <h1 className="header-title">Control de Gastos</h1>
            <button className="header-button" onClick = { () =>
            setDarkMode(!darkMode)}>
            {darkMode ? 'Modo Oscuro' : "Modo Claro"}
            </button>
        </header>
    );
}

export default Header;
