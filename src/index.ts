import InitialPageLoad from "./InitialPageLoad";
import './style.css';
import BackgroundImage from "./assets/images/background.jpg";
import Menu from "./Menu";

const domId = document.getElementById("content");

if (domId === null) {
    throw new Error("No content div found");
}

const content = new InitialPageLoad(domId, "Bougie Palace", "Flame Grilled Lounge Experience");
content.setOpeningHours("Open 24/7!");
content.setLandingBackgroundImage(BackgroundImage);
content.render();

const menu = new Menu(domId, ["Bougie Burger", "Bougie Fries", "Bougie Shake"]);

console.log("Hi mom!");