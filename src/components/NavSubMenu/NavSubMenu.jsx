import "./NavSubMenu.scss";
import { useState } from "react";
import { Link } from "react-router-dom";



const NavSubMenu = ({ menu }) => {

    const [ subnav, setSubnav ] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <Link className="sidebarLink" to={menu.path} onClick={menu.subNav && showSubnav}>
        <div>
          {menu.icon}
          <span className="sidebarLabel">{menu.title}</span>
        </div>
        <div>
          {menu.subNav && subnav
            ? menu.iconOpen
            : menu.subNav
            ? menu.iconClosed
            : null}
        </div>
      </Link>
      {subnav && menu.subNav.map(( item, index) => {
        return (
            <Link className="dropdownLink" to={item.path} key={index} >
                {item.icon}
                <span className="sidebarLabel">{item.title}</span>
            </Link>
      )
      }) }
    </>
  );
};

export default NavSubMenu;
