import "./Nav.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as TiIcons from 'react-icons/ti';
import * as RiIcons from 'react-icons/ri';
import { SidebarData } from "../../SidebarData";
import NavSubMenu from "../../components/NavSubMenu/NavSubMenu";


const TopBar = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar}) => (sidebar ? '0' : '-100%')};
  transition: .45s;
  z-index: 3;
`
const SidebarWrap = styled.div`
  width: 100%;
`


const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
    <TopBar>
      <NavIcon to="#">
        <TiIcons.TiThMenu onClick={showSidebar}/>
      </NavIcon>
    </TopBar>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon to="#">
          <RiIcons.RiCloseCircleFill onClick={showSidebar}/>
        </NavIcon>
        {SidebarData.map(( menu, index ) => {
          return <NavSubMenu menu={menu} key={index} />;
        })}
      </SidebarWrap>
    </SidebarNav>
    </>
  )
}

export default Nav