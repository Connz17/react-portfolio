import Nav from "../../containers/Nav/Nav"
import "./About.scss";



const About = () => {
  return (
    <div>
      <Nav/>
      <br />
      <h1 className="page__heading">About me</h1>
      <div className="about__section-a">
        <div className="about__experience">
          <h2>Hi im Connel &#128075;&#127998;</h2>
          <h2>&#128104;&#127998;&#8205;&#128187;</h2>
          <p className="page__text">A highly driven software developer, who possesses the ability to deliver applications and projects to a high
            standard and can be relied upon. Described as an enthusiastic, adaptable and energetic person with strong communication skills and a collaborative team player; i always actively seeking new challenges to further personal
            development. Proactive prioritisation of workloads to meet strict deadlines, composure in pressurised environments and the ability to take initiative are all skills i've attained and developed within work. 
          </p>
        </div>
        <img src="" alt="" />
      </div>
      <div className="about__section-b">
        <div className="about__interests">
        <p className="page__text">I hold numerous interests. A major one being in sports where I play American Football, won my university teams defensive MVP (most valuable player) award 3 years running, watch football, F1, basketball and a range of others. I also watch podcasts such as The Joe Rogan Experience, and read blog posts on sites like Waitbutwhy.com, a personnel favorite of mine is AI and the road to super intelligence. plus the occasional YouTube wormhole on channels like CNBC, Bloomberg and the Economist, expanding my knowledge and understanding of various interesting and informative topics in science & technology.  Additionally, I am a bit of a gamer, my claim to fame being platnaming Nioh, Dark Souls, bloodborne and Elden Ring amongst other games i'm currently starting a YouTube Channel and continuing to self-learn new coding skills and languages.</p>
        </div>
        <img src={"#"} alt="" />
      </div>
    </div>
  )
}

export default About
