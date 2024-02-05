import InitialPageLoad from "./InitialPageLoad";
import './style.css';
import BackgroundImage from "./assets/images/background.jpg";

const content = new InitialPageLoad("content", "Bougie Palace", "Flame Grilled Lounge Experience");
content.setOpeningHours("Open 24/7!");
content.setLandingBackgroundImage(BackgroundImage);
content.render();
console.log("Hi mom!");