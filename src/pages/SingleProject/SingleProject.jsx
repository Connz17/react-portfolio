import { useParams } from "react-router-dom"
import Nav from "../../containers/Nav/Nav"
import "./SingleProject.scss"
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";



const SingleProject = ({projects}) => {

    const {title} = useParams();

    const selectedP = projects.filter((project) => project.title == title)


  return (
    <div>
        <Nav/>
        <div className="topBanner">
            <img id="thumb" src={selectedP[0].thumbnail} alt="" />
            <h2>{selectedP[0].title}</h2>
        </div>
        <main>
            <div className="screenshot__container">
            <img id="screenshot" src={selectedP[0].thumbnail} alt=""/>
            <GrCaretPrevious className="chevron"/>
            <GrCaretNext className="chevron"/>
            </div>
            <div></div>
        </main>
    </div>
  )
}

export default SingleProject