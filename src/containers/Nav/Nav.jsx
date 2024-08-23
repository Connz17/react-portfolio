import "./Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as TiIcons from 'react-icons/ti';
import * as RiIcons from 'react-icons/ri';
import { SidebarData } from "../../data/SidebarData";
import NavSubMenu from "../../components/NavSubMenu/NavSubMenu";
import { IconContext } from "react-icons";





const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }


  return (
    <>
    <IconContext.Provider value={{ color: "#ffff"}}>
    <div className="topBar">
      <Link className="navIcon" to="#">
        <TiIcons.TiThMenu onClick={showSidebar}/>
      </Link>
        <h2 className="title">Connel</h2>
    </div>
    <nav className={sidebar ? "sidebarNav active" : "sidebarNav"} >
      <div className="sidebarWrap">
        <Link className="navIcon" to="#">
          <RiIcons.RiCloseCircleFill onClick={showSidebar}/>
        </Link>
        {SidebarData.map(( menu, index ) => {
          return <NavSubMenu menu={menu} key={index} />;
        })}
      </div>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Nav