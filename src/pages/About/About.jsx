import Nav from "../../containers/Nav/Nav"
import guyCoding from "../../images/img-svgs/Pictureguy-code-img.svg"
import games from "../../images/pngs/video-game-transparent-11.png"
import "./About.scss";



const About = () => {
  return (
    <div>
      <Nav/>
      <br />
      <h1 className="page__heading">About me</h1><br />
      <div className="about__section-a">
        <div className="about__experience">
          <h2>Hi im Connel &#128075;&#127998;</h2>
          <h1>&#128104;&#127998;&#8205;&#128187;</h1> <br />
            <p className="page__text">A highly motivated software developer with a proven track record of delivering high-quality applications and projects, I am known for being reliable and detail-oriented.</p>
            <br />
            <p className="page__text">I am often described as enthusiastic, adaptable, and energetic, with strong communication skills and a collaborative spirit. I consistently seek out new challenges to enhance my personal and professional growth.</p>
            <br />
            <p className="page__text">Throughout my career, I’ve honed the ability to proactively prioritize workloads, meet strict deadlines, and maintain composure in high-pressure situations. My capacity to take initiative and drive projects forward has been key to my success in the workplace.</p>
        </div>
        <div className="section-a__img">
          <img className="about__img" src={guyCoding} alt="" />
        </div>
        
      </div>
      <div className="about__section-b">
        <div className="about__interests">
        <p className="page__text">I have a wide range of interests, with sports being a major one. I enjoy watching American Football, Football, F1, Basketball, and many other sports.</p>
        <br />
        <p className="page__text">Beyond sports, I’m deeply engaged in the tech community, regularly following content creators like Pirate Software and Net Ninja. To stay current with the latest trends in technology, I subscribe to newsletters from TLDR. I also enjoy reading insightful blogs on platforms like Wait But Why, with "AI and the Road to Superintelligence" being a standout favorite. Occasionally, I dive into YouTube channels like CNBC, Bloomberg, and The Economist to broaden my understanding of compelling topics in science and technology.</p>
        <br />
        <p className="page__text">In addition to my interests in tech and sports, I’m an avid gamer. Some of my proudest accomplishments include earning Platinum trophies in challenging games like Nioh, Dark Souls, Bloodborne, and Elden Ring. Currently, I'm in the process of launching a YouTube channel focused on gaming and technology. I’m also dedicated to continuous learning, actively expanding my coding skills and exploring new programming languages through courses on Udemy.</p>
        </div>
        <div className="section-b__img">
          <img className="about-b__img" src={games} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default About
