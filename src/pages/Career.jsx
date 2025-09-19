// src/pages/Career.jsx
export default function Career() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Career</h1>
            <p className="mb-6 text-gray-700">
                I'm a passionate Game Developer with 5+ years of experience in Unity3D,
                working on hyper-casual and casual games for multiple studios. I enjoy
                taking ideas from concept to release, focusing on performance,
                playability, and player experience.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Experience</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Game Developer</strong> – Sablo Studio</li>
                <li><strong>Game Developer</strong> – TapNation</li>
                <li><strong>Game Developer</strong> – Artistic Gamers</li>
                <li><strong>Game Developer</strong> – Mood Games</li>
                <li><strong>Game Developer</strong> – M.A.S Games</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {["Unity3D", "C#", "C++", "Game Design", "Blender", "Photoshop", "Premiere Pro"].map(skill => (
                    <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
