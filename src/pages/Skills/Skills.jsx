import Carousel from "../../components/Carousel/Carousel";
import Nav from "../../containers/Nav/Nav"
import spotLightLeft from "../../images/svgs/spotlight-svgrepo-com (L-R).svg";
import spotLightRight from "../../images/svgs/spotlight-svgrepo-com (R-L).svg";



const Skills = () => {



  return (
    <div>
      <Nav/>
      <div>
        <img src={spotLightLeft} alt="" />
        <img src={spotLightRight} alt="" />
      </div>
      <Carousel/>
    </div>
  )
}

export default Skills