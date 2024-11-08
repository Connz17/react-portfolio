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
import jsCalculatorGif from "../images/projectPreviews/jscalculator.gif"

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

const importJSmath = (r) => r.keys().map(r);
const jsMathScreenshots = importJSmath(require.context('../images/screenshots/JsCalculator', false, /\.(png|jpe?g|svg)$/));

const importProperties = (r) => r.keys().map(r);
const propertiesScreenshots = importProperties(require.context('../images/screenshots/PropertyApp', false, /\.(png|jpe?g|svg)$/));

const importJavaCalc = (r) => r.keys().map(r);
const javaCalcScreenshots = importJavaCalc(require.context('../images/screenshots/JavaCalculator', false, /\.(png|jpe?g|svg)$/));

const importHangman = (r) => r.keys().map(r);
const hangmanScreenshots = importHangman(require.context('../images/screenshots/Hangman', false, /\.(png|jpe?g|svg)$/));

const importCardGame = (r) => r.keys().map(r);
const cardGameScreenshots = importCardGame(require.context('../images/screenshots/CardGame', false, /\.(png|jpe?g|svg)$/));



export const ProjectData = 
{
frontend: [
    {
        project: "JavaScript Calculator",
        title: "JavaScript Calculator",
        'Project Information': 
`### Project Overview       
This web-based calculator, built with vanilla JavaScript, allows users to perform basic arithmetic operations seamlessly. Designed to provide an intuitive experience, the calculator handles user inputs with accuracy, displaying real-time updates on the screen. It also supports chain calculations, letting users perform continuous operations without needing to clear the screen after each result.

This project highlights my skills in JavaScript, DOM manipulation, and user interface design, focusing on functional, interactive web elements.

#### Key elements of the code
Two key elements in programming this calculator are:
- Utilising a switch case structure to execute the correct mathematical operation based on user selection, ensuring responsive and accurate calculations.
- The output screen, which displays the current number selection in the bottom half of the screen and updates to show the operation selected, moving the number to the top half of the screen and updating the bottom with the second number inputted. 

#### Key features
A cool feature I implemented is keyboard input support, users can input numbers and select operations directly from their keyboard for a more flexible experience.
`, 
        'Languages Used':["HTML", "CSS", "JavaScript"],
        'Future Scope': 
`For the next version/iteration of this project, the things I'd like to add are:
- Implement a notes section enabling users to write things down as they are going through calculations.
- Implement a 'change theme' button that switches the colour scheme and theme of the calculator.
- Implement history tracking to keep a list of previous calculations.
`,
        thumbnail: JSCalculator,
        screenshots:jsMathScreenshots,
        preview: jsCalculatorGif,
        alt:"",
        link:"https://connz17.github.io/javaScript-calculator-project/",
        repo:"https://github.com/Connz17/javaScript-calculator-project",
    },
    {
        project: "BrewDog beer punk api",
        title: "Brew Dog API",
        'Project Information':
`### Project Overview       
This React-based web application was built to showcase the entire range of BrewDog beers using a public API. The app displays all available beers, with additional features such as dynamic filtering, separate pages for curated beer categories, and individual beer detail pages. Each component was designed to provide an intuitive and seamless user experience, enabling users to explore the BrewDog catalog with ease.

This project demonstrates my ability to integrate complex API interactions, optimize data handling, and build user-friendly interfaces using React.

#### Key elements of the code
key elements in programming this project was:
- Utilising the useEffect hook to manage API requests efficiently, minimizing unnecessary fetches and improving overall performance. 
- Utilising React Router for seamless navigation between pages, with dedicated sections for specific beer categories. 
- Employing Employed useParams to dynamically render individual beer pages, showcasing comprehensive information about each beer a user selects.

#### Key features
2 cool features I implemented in this project were
1) Implemented a looping API request function to overcome data limitations, fetching all 300+ beers across multiple requests rather than the default 80-per-call limit.
2)  Creating a versatile search tool, allowing users to filter results based on various beer characteristics, including name and specific attributes.
`,
        'Languages Used':["React", "SCSS"],
        'Future Scope':
    `For the next version/iteration of this project, the things I'd like to add are:
- Implement User feedback for when no beers are shown.
- Having all sliding filters on one page and working together.
- Update the UI.
`,    thumbnail: beerpunk,
        screenshots:beerScreenshots,
        preview: brewdogPreview,
        alt:"",
        link:"https://connz17.github.io/punk-api/",
        repo:"https://github.com/Connz17/punk-api",
    },
    {
        project: "Morse Code Translator",
        title: "Morse Code Translator",
        'Project Information':
        `### Project Overview       
This web app is a simple yet powerful English-to-Morse code translator developed using a Test-Driven Development (TDD) approach. The front end was built with HTML, CSS, and SCSS, while the translation functionality was implemented in JavaScript. The app allows users to seamlessly translate English text into Morse code and vice versa, providing an interactive experience for language conversion.

This project highlights my ability to use TDD principles, organize code modularly, and build interactive, user-friendly interfaces with JavaScript.

#### Key parts of the code
key elements in programming this project was:
- Following a TDD approach by creating a comprehensive set of tests before implementing the translation logic, ensuring the code was reliable and met the requirements from the start.
- Organising the code with multiple JavaScript files, including one dedicated to housing the Morse alphabet and another handling the translation logic, making the app scalable and maintainable.

#### Key feature
A nice feature I implemented was a toggle feature that enables users to switch between English-to-Morse and Morse-to-English translation, with a conditional element that reveals the Morse-to-English translator at the click of a button. 
`,
        'Languages Used':["HTML", "SCSS", "JavaScript"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Implement another language to translate.
- Implement more user friendly UI i.e. help text.
`,
        thumbnail: morseCode,
        screenshots:morseScreenshots,
        preview: morsePreview,
        alt:"",
        link:"https://connz17.github.io/morse-code-translator/",
        repo:"https://github.com/Connz17/morse-code-translator",
    },
    {
        project: "Weather App",
        title: "My Weather App",
        'Project Information':
        `### Project Overview       
This React app leverages geolocation and API integration to provide users with a personalized weather report based on their location. Users are greeted by name, with a custom message that changes depending on the time of day. The app also offers selectable weather forecasts (3, 5, 7, or 10 days) and includes a dedicated page displaying real-time sporting events with details on event times and locations.

This project highlights my ability to create a user-centered experience with React, API integration, and dynamic content updates, tailored to enhance usability and engagement.

#### Key parts of the code
key elements in programming this project was:
- Utilising the user’s latitude and longitude to fetch accurate, location-specific weather data.
- Allowing users to choose a custom forecast length, dynamically updating the forecast data when a new range is selected. This functionality is managed with the useEffect dependency array to optimize API calls.

#### Key feature
A cool feature implemented was a custom greeting. I Displayed a personalised greeting based on the user’s name and the current time, creating a welcoming and engaging experience.
Secondly, the app features an additional page that pulls in live sporting event data, providing users with event times and locations for the day. 
`,
        'Languages Used':["React", "SCSS"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Implement a to-do list on the main of forecast page.
- Adding additional sports to the sports page.
- Improve the weather cards and introduce dynamic weather icons.
`,
        thumbnail: weatherApp,
        screenshots:weatherScreenshots,
        preview: weatherPreview,
        alt:"",
        link:"https://connz17.github.io/weather-app/",
        repo:"https://github.com/Connz17/weather-app",
    },
    {
        project: "Javascript Browser Game",
        title: "Javascript Maze Game",
        'Project Information':
        `### Project Overview       
This web-based game was developed using vanilla JavaScript and designed to be playable in a browser without the use of a canvas element. The game is interactive, with keypress events allowing players to restart the game without refreshing the page. Built to be engaging and responsive, it adapts well to both desktop and mobile screens.

This project showcases my skills in JavaScript and DOM manipulation, as well as my ability to design responsive and interactive game elements.

#### Key parts of the code
key elements in programming this project was:
- Optimising the game for mobile, allowing players to enjoy a smooth experience on different devices.  
- Implemented functions to handle player movement, health loss, and basic collision detection, creating an immersive and responsive gameplay experience.

#### Key feature
A cool feature that I implemented was a game board that dynamically displays player health updates and includes a countdown timer, enhancing engagement and providing real-time feedback.
`,
        'Languages Used':["JavaScript", "HTML", "SCSS"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Refactor the code to make it DRY'er
- Implement keyboard functionality for player movement.
- Implement score tracking
- Implement a difficulty setting.
- Improve the game UI and visuals.
`,
        thumbnail: JSMazeGame,
        screenshots:mazeScreenshots,
        preview: "",
        alt:"",
        link:"https://connz17.github.io/js-game-project/index.html",
        repo:"https://github.com/Connz17/js-game-project",
    },
    
    {
        project: "Ticket Tracker",
        title: "React Ticket Tracker",
        'Project Information':
        `### Project Overview       
This React-based ticket tracking system was designed to help employees monitor and manage ticket counts. Each employee can view their ticket count, as well as their co-workers' counts, with the ability to increment or decrement their own tickets. The app was developed with a focus on React hooks and component-based design for a clean, interactive experience.

This project demonstrates my proficiency in React hooks, state management, and designing user-friendly interfaces with interactive features.

#### Key parts of the code
key elements in programming this project was:
- Utilising useState to handle real-time updates to each employee's ticket count and to manage the addition of new employees.
- Leveraging the map method to render a ticket card for each employee, making the app scalable and modular.

#### Key feature
A feature I added is dynamic color changing to ticket counts that exceed a specific threshold for better visual feedback. Additionally, users can easily add new employees, with functionality passed down as props to ensure seamless component interaction.
`,
        'Languages Used':["React", "SCSS"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Implement a log in feature.
- A feature that could enable the user to filter and or search for a specific ticket card or a selection of cards based on role.
- A feature where you can delete a card that's been rendered individually.
- Implement persistence to keep the users information.
`,
        thumbnail: ticketTracker,
        screenshots:ticketScreenshots,
        preview: "",
        alt:"",
        link:"https://connz17.github.io/ticket-tracker/",
        repo:"https://github.com/Connz17/ticket-tracker",
    },
    {
        project: "Property App",
        title: "Perfect Properties",
        'Project Information':
        `### Project Overview        
This React-based property management app, integrated with Firebase, allows users to explore real estate listings while providing admins with the tools to manage property details. Firebase serves as the backend, handling data storage, user authentication, and full CRUD (Create, Read, Update, Delete) functionality. Users can log in to browse properties, while agents and admins have the ability to upload new listings with rich details and images.

This project highlights my skills in integrating third-party services like Firebase, managing user authentication and data storage, and designing user-friendly interfaces with conditional access.

#### Key parts of the code
key elements in programming this project was:
- Utilized Firebase for user authentication, secure data management, and CRUD operations, enabling real-time updates and efficient data handling.
- Implemented conditional functionality that grants agents access to upload new properties to the database, including images for each room and other property details.
#### Key feature
Added the ability for users to update their profile picture by uploading a new image, enhancing personalization.
`,
        'Languages Used':["React", "SCSS", "Firebase"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Improve the UI.
- Implement a filter for the properties.
- Implement Single property detail page.
`,
        thumbnail: propertyApp,
        screenshots:propertiesScreenshots,
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
    'Project Information':
    `### Project Overview       
This calculator application, developed in Java, provides users with a command-line interface for performing basic arithmetic operations. The calculator guides the user through selecting operations and entering numbers directly from the terminal using the Scanner class. It is designed to enable continuous calculations, allowing users to use the result of the previous calculation in subsequent operations. The application is also backed by unit tests to ensure the reliability of each calculation.

This project highlights my proficiency in Java, encapsulation principles, and building interactive, user-friendly command-line applications.

#### Key parts of the code
key elements in programming this project was:
- **Continuous Calculations:** Runs within a while loop with a boolean condition, allowing users to perform ongoing calculations until they choose to exit. 
- **Encapsulation of Computation Logic:** Implements all computation methods in a separate class, showcasing encapsulation and keeping the calculation logic hidden from the user interface.

#### Key feature
**Interactive Operation Selection:** Uses a switch statement to dynamically select the correct method based on the user's input, creating a streamlined and intuitive operation selection process.
`,
    'Languages Used':["Java"],
    'Future Scope':
    `For the next version/iteration of this project, the things I'd like to add are:
- Refactor code to increase adherence to SOLID principles and OOP pillars.
- Implement another class to abstract user interaction.
- Implement ASCII art or another visual UI for the terminal.
`,
    thumbnail: javaCalculator,
    screenshots:javaCalcScreenshots,
    preview: "",
    alt:"",
    link:"",
    repo:"https://github.com/Connz17/java-calculator",
},
{
    project: "Java Hangman",
    title: "Java Hangman Game",
    'Project Information':
    `### Project Overview       
This terminal-based Hangman game, developed in Java, challenges users to guess letters in a hidden word, with each incorrect guess decreasing their remaining lives. The game provides visual feedback on the letters guessed so far, and allows users to choose a difficulty level, affecting their starting lives. The application also includes a word generator that selects a random word from a separate list for each round.

This project showcases my proficiency in Java, including loop management, regex for input validation, and creating user-friendly, customizable terminal applications.

#### Key parts of the code
key elements in programming this project was:
- **Interactive User Input Filtering:** Utilized Java’s Pattern and Matcher classes with regex to filter out non-alphabetic inputs, ensuring only valid guesses are accepted.
- **Dynamic Word Display:** Implemented a method that initializes an array of dashes representing the hidden word, updating it as the user guesses correctly.

#### Key feature
**Custom Difficulty Setting:** Users can choose from different difficulty levels, impacting the number of lives at the start, adding a layer of customization to the gameplay.
`,
    'Languages Used':["Java"],
    'Future Scope':
    `For the next version/iteration of this project, the things I'd like to add are:
- Have more words and split the words up to correspond to the difficulty selection of Hard, Medium or Easy.
- Refactor code to increase adherence to SOLID principles and OOP pillars. Creating Single Responsibility classes for the Player, User Interaction, the Game Loop etc.
- Implement ASCII art for the Hangman or another visual UI in the terminal.
`,
    thumbnail: hangman,
    screenshots:hangmanScreenshots,
    preview: "",
    alt:"",
    link:"",
    repo:"https://github.com/Connz17/Java-hangman",
},
{
    project: "Java Card Game",
    title: "Java Card Game",
    'Project Information':
    `### Project Overview       
This Java-based "Snap" card game follows Object-Oriented Programming (OOP) principles and SOLID design, with a clean main method focused on initializing and running the game. Designed as a two-player game in the terminal, it challenges players to react quickly by typing "snap" when a card match appears, with both single-player and multiplayer modes available.

This project highlights my skills in Java, OOP, and creating interactive, real-time gameplay in a console environment.

#### Key parts of the code
key elements in programming this project was:
- **OOP Structure with Class Separation:** Created distinct classes for player details (name, score, lives), card attributes (suit, value), and general card game functionalities (shuffling, dealing), along with a specific class for managing the Snap game’s logic.
- **Multiplayer Gameplay and Timer-Based Win Condition:** The game loop supports both single-player and multiplayer modes, with win conditions requiring a quick response to card matches before a timer expires.

#### Key feature
**Visual Suit Display in Terminal:** Used Unicode values to display suit icons, enhancing the visual experience in the terminal as players draw cards.
`,
    'Languages Used':["Java"],
    'Future Scope':
    `For the next version/iteration of this project, the things I'd like to add are:
- Implementing an additional card game to expand the variety of games available.
- Adding an option for multiplayer play against a computer opponent, creating a dynamic single-player experience.
`,
    thumbnail: cardGame,
    screenshots:cardGameScreenshots,
    preview: "",
    alt:"",
    link:"",
    repo:"https://github.com/Connz17/java-card-game",
},
{
    project: "Java Library System",
    title: "Java Library",
    'Project Information':
    `### Project Overview       
This Java-based Library System follows Object-Oriented Programming (OOP) principles, featuring dedicated classes for user interaction, user profiles, book records, and a database to handle various library operations. The system allows users to search, borrow, and return books, creating an interactive library experience in the terminal.

This project highlights my skills in Java, data transformation, and designing interactive systems using OOP principles.

#### Key parts of the code
key elements in programming this project was:
- **CSV to JSON Data Transformation for Book Database:** The library book list is initially stored in a CSV file. A custom method converts the CSV data to JSON format, then parses it into an array, allowing each item to be instantiated as a book object when the library is initialized.
- **Flexible User Interface with While Loop and Switch Case:** Users can continuously access multiple library functions, like searching for books by title, genre, or author, and loaning or returning books, as long as the library remains "online."

#### Key feature
**Enhanced Loan Tracking:** Users can view a list of books they currently have on loan and see which books are unavailable due to being loaned out by other users.
`,
    'Languages Used':["Java"],
    'Future Scope':
    `For the next version/iteration of this project, the things I'd like to add are:
- Introduce a visual interface into the project.
- Add persistence to users.
- Add a function to generate reports and to write back to CSV.
- Add in error handling and error messages.
`,
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
        'Project Information':
        `### Project Overview       
For my bootcamp capstone, I built a full-stack web application from scratch. The project featured React on the front end, Java with Spring for the back end and API, and MySQL as the database. The primary goal was to create an application capable of performing full CRUD (Create, Read, Update, Delete) operations with real-time updates linked to a local database.

This capstone project solidified my skills in full-stack development, integrating complex CRUD operations, and building responsive, real-time applications.

#### Key parts of the code
key elements in programming this project was:
- Constructing the back end and API in Java, which involved creating a class for the main objects with relevant fields and methods, a Controller class with all CRUD endpoint methods, a repository interface, and a service class that utilized the repository.
- Establishing a seamless connection between the front end and API, ensuring all user interactions for creating and updating data were accurately represented on the web application.

#### Key feature
One of the standout features I implemented was the ability to dynamically add new locations to the locations menu. If a user creates or updates a character with a new location that isn't already listed, the location menu updates in real-time, displaying the new location with the appropriate population data.
`,
        'Languages Used':["React", "SCSS", "Java", "Spring", "SQL", "Postman"],
        'Future Scope':
        `For the next version/iteration of this project, the things I'd like to add are:
- Implement Axios
- Implement log in and authentication.
- Store the database on the cloud
- Host the application.
- Add a notes part to single character page
`,
        thumbnail: darkSouls,
        screenshots:soulsScreenshots,
        preview: soulsGif,
        alt:"",
        link:"",
        repo:"https://github.com/Connz17/darksouls-full-stack-project-frontend",
    }
] 
}

