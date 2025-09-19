// src/pages/Portfolio.jsx
export default function Portfolio() {
    const projects = [
        { title: "Hero Adventure", studio: "TapNation" },
        { title: "Corn Hole", studio: "TapNation" },
        { title: "Match Food – Triple Match 3D", studio: "Sablo Studio" },
        { title: "Cannon Shoot 3D", studio: "Artistic Gamers" },
        { title: "Combo 2048", studio: "Mood Games" },
        { title: "Baby Happy Jump", studio: "M.A.S Games" }
    ];

    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
                <div
                    key={idx}
                    className="bg-white shadow-md p-4 rounded-2xl hover:shadow-lg"
                >
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-500">{p.studio}</p>
                </div>
            ))}
        </div>
    );
}
