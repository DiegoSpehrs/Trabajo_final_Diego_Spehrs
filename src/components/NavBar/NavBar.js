import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
      <header className="header">
        <NavLink to="/">
        <h1 className="header__title">Mi tienda gaming</h1>
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/category/1" className="NavBar__link">categoria 1 </NavLink>
          <NavLink to="/category/2" className="NavBar__link">categoria 2 </NavLink>
          <NavLink to="/category/3" className="NavBar__link">categoria 3  </NavLink>
          <NavLink to="/Cart" className="NavBar__link"><CartWidget/></NavLink>
        </nav>
      </header>
    )
  }
  
  export default NavBar 


 