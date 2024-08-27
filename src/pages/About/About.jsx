import Nav from "../../containers/Nav/Nav"
import guyCoding from "../../images/img-svgs/Pictureguy-code-img.svg"
import games from "../../images/pngs/video-game-transparent-11.png"
import "./About.scss";



const About = () => {
  return (
    <div className="aboutPage">
      <Nav/>
      <br />
      <h1 className="page__heading">About me</h1><br />
      <div className="about__section-a">
        <div className="about__experience">
          <h2>Hi I'm Connel &#128075;&#127998;</h2>
          <h1>&#128104;&#127998;&#8205;&#128187;</h1> <br />
            <p className="page__text">A motivated software developer with strong problem-solving abilities and a proven track record of delivering high-quality work..</p>
            <br />
            <p className="page__text">A collaborative team player with excellent communication skills, able to perform well under pressure and take a proactive approach to problem-solving.</p>
            <br />
            <p className="page__text">I am often described as enthusiastic, adaptable, and energetic. Consistently seek out new challenges to enhance my personal and professional growth.</p>
        </div>
        <div className="section-a__img">
          <img className="about__img" src={guyCoding} alt="" />
        </div>
      </div>
      <br />
      <div className="about__section-b">
        <div className="about__interests">
        <p className="page__text">I have a wide range of interests, with sports being a major one. I enjoy watching American Football, Football, F1, Basketball, and many other sports.</p>
        <br />
        <p className="page__text">Beyond sports, I follow content creators like Pirate Software and Net Ninja and subscribe to newsletters from TLDR to stay current with the latest trends in technology. I also enjoy reading blogs on platforms like 'Wait But Why', with "AI and the Road to Superintelligence" being a favorite. Occasionally, I dive into YouTube channels like CNBC, Bloomberg, and The Economist to broaden my understanding of compelling topics in science and technology.</p>
        <br />
        <p className="page__text">In addition to my interests in tech and sports, I’m an avid gamer. Some of my proudest accomplishments include earning Platinum trophies in challenging games like Nioh, Dark Souls, Bloodborne, and Elden Ring. I’m also dedicated to continuous learning, actively expanding my coding skills and exploring new programming languages through courses on Udemy.</p>
        </div>
        <div className="section-b__img">
          <img className="about-b__img" src={games} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
