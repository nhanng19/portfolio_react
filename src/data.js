import Simplify from "./img/simplify1.png";
import DrawMe from "./img/homepage.png";
import Fooder from "./img/Fooder.png";
import Jingle from "./img/Jingle.png";
import Notepad from "./img/notepad.png";
import Portfolio from "./img/oldportfolio.png";
export const projects = [
  {
    id: 1,
    title: "Simplify",
    techno: "React | MySQL | Express",
    description: "Text Summarizer",
    summary: `Simplify is a website productivity application that can take long and tedious text and summarize it for students to easily digest information. By utilizing the innovations of natural language processing and web scraping technologies, we're able to create a more practical method for students to streamline their studying process. As a result, Simplify was developed with the goal of making it easier for students to comprehend extensive information and automatically generate flashcards to assist them in retaining key concepts. I had the pleasure to collaborate with a UX designer and a brilliant <a href="https://brian-lam.netlify.app/" target="_blank">developer</a> to win 1st place at the <a href="https://devpost.com/software/simplify-82ux9o" target="_blank">2022 API World Hackathon</a> with this project!`,
    img: Simplify,
    link: "https://simplify-apiworlds.netlify.app/summarize",
    source: "https://github.com/lam-brian/API-World",
    delay: "0",
  },
  {
    id: 2,
    title: "Draw.me",
    techno: "Handlebars | MySQL | Node | Express",
    description: "Drawing Platform",
    summary:
      "Draw.me is a community-based drawing platform where users can create an account to draw, post, share, and comment on other user's art. Our server uses mySQL database to store users' confidential credentials, drawings, and comments. Our drawing application is engineered with the Canvas API. Canvas provides a means for drawing graphics via JavaScript and the HTML canvas element. Our Javascript function can render objects such as shapes, lines, and strokes on the Canvas element at any given space coordinates, which in our application's case, the x and y coordinates of our cursor. By using Sequelize ORM, we were able to consistently store data such as drawings and comments by updating queries, so our Express server can respond back to user's requests. Our social network service is entirely built on this stack to retrieve, store, and render data back to our client.",
    img: DrawMe,
    link: "https://drawme.herokuapp.com/",
    source: "https://github.com/nhanng19/Draw.me",
    delay: "100",
  },
  {
    id: 3,
    title: "Fooder",
    techno: "HTML | CSS | JavaScript | Web API",
    description: "Food Application",
    summary: `Fooder is a food search web application that would allow users to quickly find multiple restaurant locations of savory and delicious food. We will ask you for your location services and with that we can directly pinpoint your position wherever you are and give you food in your location. Spoonacular gave us the ability to use a information (data) of different types of food and manipulate the data where we could let the user find any type of food of their choice. The YelpAPI calls would allow us to find different restaurants and store data and by taking SpoonacularsAPI calls and manipulating the data moving forward into Yelp's API, we would be able to accomplish our goal to allow the user to get any type of food in his/her area. I was lucky enough to have won 2nd place at the <a href = "https://devpost.com/software/fooder-gtnmkz">2022 API World Hackathon</a> with this project!`,
    img: Fooder,
    link: "https://nhanng19.github.io/Fooder",
    source: "https://github.com/nhanng19/Fooder",
    delay: "200",
  },
  {
    id: 4,
    title: "Jingle",
    techno: "HTML | CSS | JavaScript | Web API",
    description: "Music Guessing Game",
    summary:
      "We wanted to find a interactive way to use data from an API that worked with music specifically, was inspired by the recent game wordle. Small music themed game that uses the last.fm API to pull a top track list, and Wikipedia's MediaWiki Api to pull a artist photo, so that users can play by guessing the artist who performed a song name that is randomly generated. ",
    img: Jingle,
    link: "https://nhanng19.github.io/music_wordle",
    source: "https://github.com/nhanng19/music_wordle",
    delay: "0",
  },
  {
    id: 5,
    title: "CSS Portfolio",
    techno: "HTML | CSS",
    description: "First Porfolio",
    summary:
      "This is my first portfolio site made with pure HTML and CSS. This is my favorite project out of the six because it reminds me how far I've come!",
    img: Portfolio,
    link: "https://nhanng19.github.io/css_portfolio/develop/index",
    source: "https://github.com/nhanng19/css_portfolio",
    delay: "100",
  },
  {
    id: 6,
    title: "Note Express",
    techno: "HTML | CSS | JavaScript",
    description: "Note taking application",
    summary:
      "A note application utilizing Express.js backend to write, store, retrieve, and delete notes. It uses an Express.js back end that save and retrieve note data from a JSON file.",
    img: Notepad,
    link: "https://expressnotepad.herokuapp.com/",
    source: "https://github.com/nhanng19/notepad",
    delay: "200",
  },
];
