import { useEffect } from "react";
import { useState  } from "react";
    
function ChangeBack() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
    
    return (
        <button
        className="header-button"
        onClick={() => setDarkMode(prev => !prev)}
        >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
    );
}
export default ChangeBack;
