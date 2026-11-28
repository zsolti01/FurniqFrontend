import './Navbar.css'
import logoNavbar from '../../assets/img/Logos/logo3_brown_Navbar.png'
import searchIcon from '../../assets/img/Navbar/search.png'
import profileIcon from '../../assets/img/Navbar/user.png'
import cartIcon from '../../assets/img/Navbar/shopping-cart.png'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"><img src={logoNavbar} alt="Furniq" className='logo'/></Link>

        <div className='search-box'>
          <img src={searchIcon} alt="Search" className='search-icon'/>
          <input type="text" placeholder='What are you looking for?'/>
        </div>

        <ul>
            <Link to="/cart">
              <li>
                <img src={cartIcon} alt="Cart" className='nav-icon'/>
              </li>
            </Link>
            <Link to="/profile">
              <li>
                <img src={profileIcon} alt="Profile" className='nav-icon'/>
              </li>
            </Link>
        </ul>

    </div>
  )
}
