import { useParams } from "react-router-dom"
import Nav from "../../containers/Nav/Nav"
import "./SingleProject.scss"
import { IconContext } from "react-icons";
import { FaChevronCircleRight } from "react-icons/fa";
import { TiChevronRightOutline } from "react-icons/ti";
import { BiChevronLeftSquare, BiChevronRightSquare  } from "react-icons/bi";
import TabButtons from "../../components/TabButtons/TabButtons";
import TabContent from "../../components/TabContent/TabContent";
import { useState } from "react";

const SingleProject = ({projects}) => {

    const {title} = useParams();
    const [activeTab, setActiveTab] = useState("title");

    const selectedP = projects.filter((project) => project.title == title)


  return (
    <div>
        <Nav/>
        <IconContext.Provider value={{ className: 'chevron', }}>
        <div className="topBanner">
            <img id="thumb" src={selectedP[0].thumbnail} alt="" />
            <h2>{selectedP[0].title}</h2>
        </div>
        <main className="project__section">
            <div className="screenshot__container">
            <img id="screenshot" src={selectedP[0].thumbnail} alt=""/>
            <br />
            <BiChevronLeftSquare /> <BiChevronRightSquare />
            </div>
            <div className="information__container">
            <TabButtons project={selectedP[0]} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabContent project={selectedP[0]} activeTab={activeTab}/>
            </div>
        </main>
        </IconContext.Provider>
    </div>
  )
}

export default SingleProject