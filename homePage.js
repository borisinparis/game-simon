const main = document.createElement("div");
main.className = "main";

const homePageImg = document.createElement("img");
homePageImg.src = "homePage.png";

const welcomeText = document.createElement("div");
welcomeText.innerHTML = "Welcome to Simon Says!";
welcomeText.id = "welcomeText";

const playButton = document.createElement("a");
playButton.innerHTML = "Play Simon Says!";
playButton.id = "playButton";
playButton.href = "./simon.html";

main.appendChild(playButton);
main.appendChild(welcomeText);
main.appendChild(homePageImg);
document.getElementById("landingPage").appendChild(main);
