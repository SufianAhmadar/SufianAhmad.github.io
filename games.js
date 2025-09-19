// 🎮 Simple Game Showcase Config
const games = [
    {
        title: "Game Title 1",
        link: "https://play.google.com/store/apps/details?id=com.example.game1",
        icon: "assets/game1-icon.png"
    },
    {
        title: "Game Title 2",
        link: "https://play.google.com/store/apps/details?id=com.example.game2",
        icon: "assets/game2-icon.png"
    },
    {
        title: "Playable Ad",
        link: "https://your-webgl-playable-link.com",
        icon: "assets/game3-icon.png"
    }
];

// 🔧 Dynamically Render Games
const container = document.getElementById("games-container");

games.forEach(game => {
    const gameEl = document.createElement("a");
    gameEl.href = game.link;
    gameEl.target = "_blank";
    gameEl.style.textDecoration = "none";

    gameEl.innerHTML = `
    <img src="${game.icon}" alt="${game.title}" 
         style="width:120px; height:120px; border-radius:20px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
    <p style="margin-top:8px; font-weight:bold; color:#333;">${game.title}</p>
  `;

    container.appendChild(gameEl);
});
