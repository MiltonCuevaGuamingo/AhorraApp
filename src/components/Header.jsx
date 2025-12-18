import './Header.css';
import ChangeBack from './ChangeBack';


function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Cotizador de prestamos</h1>
      <ChangeBack />
    </header>
  );
}

export default Header;
