import { NavLink } from "react-router-dom";

const Navbar = () => {

  return(
    <>
    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} >Movie</NavLink>
    <NavLink to='/lifeState' className={({ isActive }) => isActive ? 'active' : ''}>Life State</NavLink>
    </>
  )
}

export default Navbar;
