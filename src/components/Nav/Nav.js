import { useEffect, useState } from "react";
import { getTopNav } from "./navdata";
import './nav.css'
import { Link } from "react-scroll";
const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const [color,setColor]=useState(false)
  const changbg = () => {
    if (window.scrollY >= 90) {
    setColor(true)
    } else {
      setColor(false)
  }
  }
  window.addEventListener("scroll",changbg)
  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className={color ? "fixed" : "nav__wrapper"}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            Logo
          </a>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <Link
                  spy={true}
                  smoot={true}
                  offset={-75}
                  duration={500}
                  to={item.to}
                  className="nav__link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
