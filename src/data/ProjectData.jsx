import JSCalculator from "../images/projectPictures/JS Calculator.png";
import JSMazeGame from "../images/projectPictures/Maze Game v2 (1).png";
import beerpunk from "../images/projectPictures/brewdog-beerpunk-api.png";
import ticketTracker from "../images/projectPictures/Ticket tracker v2.png";
import morseCode from "../images/projectPictures/Morse Code Translator.png";
import weatherApp from "../images/projectPictures/Weather App.png";
import propertyApp from "../images/projectPictures/Property App.png";
import darkSouls from "../images/projectPictures/Dark Souls.png";
import library from "../images/projectPictures/Library System.png";
import hangman from "../images/projectPictures/Hangman.png";
import cardGame from "../images/projectPictures/Cards Game.png";
import javaCalculator from "../images/projectPictures/Java Calculator.png";
import brewdogPreview from "../images/projectPreviews/brewdog.gif"
import morsePreview from "../images/projectPreviews/morse.gif"
import weatherPreview from "../images/projectPreviews/weatherApp.gif"
import soulsGif from "../images/projectPreviews/souls.gif"

// Automatically import all images from the screenshots directory
const importBeers = (r) => r.keys().map(r);
const beerScreenshots = importBeers(require.context('../images/screenshots/BrewDog', false, /\.(png|jpe?g|svg)$/));

const importMorse = (r) => r.keys().map(r);
const morseScreenshots = importMorse(require.context('../images/screenshots/MorseCode', false, /\.(png|jpe?g|svg)$/));

const importSouls = (r) => r.keys().map(r);
const soulsScreenshots = importSouls(require.context('../images/screenshots/DarkSouls', false, /\.(png|jpe?g|svg)$/));

const importLMS = (r) => r.keys().map(r);
const LMSScreenshots = importLMS(require.context('../images/screenshots/LibrarySystem', false, /\.(png|jpe?g|svg)$/));

const importMaze = (r) => r.keys().map(r);
const mazeScreenshots = importMaze(require.context('../images/screenshots/MazeGame', false, /\.(png|jpe?g|svg)$/));

const importTT = (r) => r.keys().map(r);
const ticketScreenshots = importTT(require.context('../images/screenshots/TicketTracker', false, /\.(png|jpe?g|svg)$/));

const importWeather = (r) => r.keys().map(r);
const weatherScreenshots = importWeather(require.context('../images/screenshots/WeatherApp', false, /\.(png|jpe?g|svg)$/));



export const ProjectData = 
    {
        frontend: [
            {
                project: "JavaScript Calculator",
                title: "JavaScript Calculator",
                'Project Information': "",
                'Languages Used':["HTML", "CSS", "JavaScript"],
                'Future Scope': `For the next iterations of this project i'd like to add a notes section to enable users to keep track of calculations. I'd also input a change theme button `,
                thumbnail: JSCalculator,
                screenshots:[],
                preview: "",
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/javaScript-calculator-project",
            },
            {
                project: "BrewDog beer punk api",
                title: "Brew Dog API",
                'Project Information': "",
                'Languages Used':["React", "SCSS"],
                'Future Scope': "",
                thumbnail: beerpunk,
                screenshots:beerScreenshots,
                preview: brewdogPreview,
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/punk-api",
            },
            {
                project: "Morse Code Translator",
                title: "Morse Code Translator",
                'Project Information': "",
                'Languages Used':["HTML", "CSS", "JavaScript"],
                'Future Scope': "",
                thumbnail: morseCode,
                screenshots:morseScreenshots,
                preview: morsePreview,
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/morse-code-translator",
            },
            {
                project: "Weather App",
                title: "My Weather App",
                'Project Information': "",
                'Languages Used':["React", "SCSS"],
                'Future Scope': "",
                thumbnail: weatherApp,
                screenshots:weatherScreenshots,
                preview: weatherPreview,
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/weather-app",
            },
            {
                project: "Javascript Browser Game",
                title: "Javascript Maze Game",
                'Project Information': "",
                'Languages Used':["JavaScript", "HTML", "SCSS"],
                'Future Scope': "",
                thumbnail: JSMazeGame,
                screenshots:mazeScreenshots,
                preview: "",
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/js-game-project",
            },
            
            {
                project: "Ticket Tracker",
                title: "React Ticket Tracker",
                'Project Information': "",
                'Languages Used':["React", "SCSS"],
                'Future Scope': "",
                thumbnail: ticketTracker,
                screenshots:ticketScreenshots,
                preview: "",
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/ticket-tracker",
            },
            {
                project: "Property App",
                title: "Perfect Properties",
                'Project Information': "",
                'Languages Used':["React", "SCSS", "Firebase"],
                'Future Scope': "",
                thumbnail: propertyApp,
                screenshots:[""],
                preview: "",
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/PropertyApp",
            }
        ], 
        backend: [
        {
            project: "Java Calculator",
            title: "Java Calculator",
            'Project Information': "",
            'Languages Used':["Java"],
            'Future Scope': "",
            thumbnail: javaCalculator,
            screenshots:[],
            preview: "",
            alt:"",
            link:"",
            repo:"https://github.com/Connz17/java-calculator",
        },
        {
            project: "Java Hangman",
            title: "Java Hangman Game",
            'Project Information': "",
            'Languages Used':["Java"],
            'Future Scope': "",
            thumbnail: hangman,
            screenshots:[],
            preview: "",
            alt:"",
            link:"",
            repo:"https://github.com/Connz17/Java-hangman",
        },
        {
            project: "Java Card Game",
            title: "Java Card Game",
            'Project Information': "",
            'Languages Used':["Java"],
            'Future Scope': "",
            thumbnail: cardGame,
            screenshots:[],
            preview: "",
            alt:"",
            link:"",
            repo:"https://github.com/Connz17/java-card-game",
        },
        {
            project: "Java Library System",
            title: "Java Library",
            'Project Information': "",
            'Languages Used':["Java"],
            'Future Scope': "",
            thumbnail: library,
            screenshots:LMSScreenshots,
            preview: "",
            alt:"",
            link:"",
            repo:"https://github.com/Connz17/library-system",
        }
        ],
        fullstack:
        [
            {
                project: "Dark Souls",
                title: "Dark Souls Companion App",
                'Project Information': "",
                'Languages Used':["React", "SCSS", "Java", "Spring", "SQL"],
                'Future Scope': "",
                thumbnail: darkSouls,
                screenshots:soulsScreenshots,
                preview: soulsGif,
                alt:"",
                link:"",
                repo:"https://github.com/Connz17/darksouls-full-stack-project-frontend",
            }
        ] 
    }
