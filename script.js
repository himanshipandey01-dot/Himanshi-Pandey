let xp = 0;

function startGame() {
document.getElementById("content").classList.remove("hidden");
increaseXP(30);
}

function unlockProjects() {
const projectList = document.getElementById("projects");

projectList.innerHTML = `     <li>🚌 Smart Bus Stand System</li>     <li>🌿 Air Purifier Project</li>     <li>📊 Tableau Dashboard Project</li>     <li>🎮 Gamified Resume Website</li>
  `;

increaseXP(70);
}

function increaseXP(value) {
xp += value;
document.getElementById("xp").style.width = xp + "%";
}
