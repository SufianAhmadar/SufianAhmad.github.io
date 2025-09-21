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
    const a = document.createElement("a");
    a.href = game.link;
    a.target = "_blank";
    a.className = "flex flex-col items-center w-[120px] text-white hover:text-red-400 transition";

    a.innerHTML = `
    <img src="${game.icon}" alt="${game.title}" 
         class="rounded-xl shadow-md hover:scale-110 transition-transform duration-200 w-[120px] h-[120px]">
    <p class="mt-2 font-semibold">${game.title}</p>
  `;

    container.appendChild(a);
});
