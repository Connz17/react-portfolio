import "./Carousel.scss";
import { useState } from "react";
import { SkillsData } from "../../data/SkillsData";
import * as FaIcons from 'react-icons/fa';






const Carousel = () => {

    const [counter, setCounter] = useState(0);
    const [nextCounter, setNextCounter] = useState(counter + 1);
    const [previousCounter, setPreviousCounter] = useState(SkillsData.length - 1);


const handleNextImage = () => {
        if (nextCounter === SkillsData.length - 1) {
            setNextCounter(0);
      } else {
        setNextCounter(nextCounter + 1);
      }
    }  

    const handlePreviousImage = () => {
            if (previousCounter === 0) {
                setPreviousCounter(SkillsData.length - 1);
        } else {
            setPreviousCounter( previousCounter - 1)
        }
        }  

    const handleIncrement = () => {
        if (counter === SkillsData.length - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
        handleNextImage();
        setPreviousCounter(counter);
      };
    
      const handleDecrement = () => {
        if (counter === 0) {
          setCounter(SkillsData.length - 1);
        } else {
          setCounter(counter - 1);
        }
        handlePreviousImage();
        setNextCounter(counter)
      };

      

    

  return (
    <div>
        <div>
            <FaIcons.FaArrowCircleLeft
            onClick={handleDecrement}/>
        <img src={SkillsData[previousCounter].altImage} alt="" />
        <img src={SkillsData[counter].altImage} alt="" />
        <img src={SkillsData[nextCounter].altImage} alt="" />
        <FaIcons.FaArrowCircleRight
            onClick={handleIncrement}
            />
        </div>
        <h3>{SkillsData[counter].title}</h3>
    </div>
  )
}

export default Carousel