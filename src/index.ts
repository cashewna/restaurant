import Home from "./Home";
import './style.css';
import BackgroundImage from "./assets/images/background.avif";
import Menu from "./Menu";
import About from "./About";

const domId = document.getElementById("content");

if (domId === null) {
    throw new Error("No content div found");
}

const home = new Home(domId, "Bougie Palace", "Flame Grilled Lounge Experience");
home.setOpeningHours("Open 24/7!");
home.setLandingBackgroundImage(BackgroundImage);
home.render();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

if (homeBtn === null || menuBtn === null || aboutBtn === null) {
    throw new Error("One of the nav elements is missing");
}

homeBtn.addEventListener("click", () => {
    home.render();
});

const menu = new Menu(domId, ["Bougie Burger", "Bougie Fries", "Bougie Shake"]);
menuBtn.addEventListener("click", () => {
    menu.render();
});

const about = new About(domId);
about.setAboutContent("Bougie Palace is a flame grilled lounge experience. We offer a variety of flame grilled burgers, fries, and shakes. We are open 24/7 and offer a variety of seating options. We are located in the heart of the city and offer a variety of entertainment options.");
aboutBtn.addEventListener("click", () => {
    about.render();
});


console.log("Hi mom!");