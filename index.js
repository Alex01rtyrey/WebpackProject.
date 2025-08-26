import './index.css';

import JSImage from "./2022112112120055bb90ccbe.jpg";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "I love JavaScript";
const JSImageHTML = document.createElement("img");
JSImageHTML.src = JSImage;

document.body.append(mainTitle, JSImageHTML);
