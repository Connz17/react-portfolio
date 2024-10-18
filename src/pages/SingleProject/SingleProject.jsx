import { useParams } from "react-router-dom"
import Nav from "../../containers/Nav/Nav"
import "./SingleProject.scss"
import { IconContext } from "react-icons";
import { BiChevronLeftSquare, BiChevronRightSquare  } from "react-icons/bi";
import TabButtons from "../../components/TabButtons/TabButtons";
import TabContent from "../../components/TabContent/TabContent";
import { useState } from "react";

const SingleProject = ({projects}) => {

    const {title} = useParams();
    const [activeTab, setActiveTab] = useState("Project Information");
    const [counter, setCounter] = useState(0);

    const selectedP = projects.filter((project) => project.title == title)

    
    const handleIncrement = () => {
        if (counter === selectedP[0].screenshots.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    };
    
      const handleDecrement = () => {
        if (counter === 0) {
            setCounter(selectedP[0].screenshots.length - 1);
        } else {
            setCounter(counter - 1);
        }
    };

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
            <img id="screenshot" src={selectedP[0].screenshots[counter]} alt=""/>
            <br />
            {selectedP[0].screenshots.length > 0 && 
            <div className="counters"> 
                <BiChevronLeftSquare onClick={handleDecrement} />
                <p className="count"> {counter + 1}/{selectedP[0].screenshots.length}</p> 
                <BiChevronRightSquare onClick={handleIncrement}/>
            </div>
            }
            </div>
            <div className="information__container">
            <TabButtons project={selectedP[0]} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabContent project={selectedP[0]} activeTab={activeTab}/>
            </div>
        </main>
        <br />
            { selectedP[0].site && <button className="card__button">Visit Site</button> }
            <a href={selectedP[0].repo} target="_blank" rel="noreferrer"><button className="card__button">Visit Repo</button></a> 
        </IconContext.Provider>
    </div>
  )
}

export default SingleProject