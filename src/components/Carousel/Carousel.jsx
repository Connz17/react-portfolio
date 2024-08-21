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
    <div className="carousel">
        <div className="carousel-container">
            <FaIcons.FaArrowCircleLeft className="carousel__arrow"
                onClick={handleIncrement}/>
            <img className="carousel__image--side" src={SkillsData[previousCounter].altImage} alt="" />
            {/* <div> */}
              <img className="carousel__image--main" src={SkillsData[counter].logo} alt="" />
            {/* </div> */}
            <img className="carousel__image--side" src={SkillsData[nextCounter].altImage} alt="" />
            <FaIcons.FaArrowCircleRight className="carousel__arrow"
                onClick={handleDecrement}
                />
        </div>
        <br />
        <h3 className="carousel__selection">{SkillsData[counter].title}</h3>
    </div>
  )
}

export default Carousel