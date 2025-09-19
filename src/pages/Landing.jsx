export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <img src="/assets/profile.jpg" alt="Profile" className="rounded-full w-40 h-40 mb-6" />
            <h1 className="text-4xl font-bold">SUFIAN AHMAD CHUGHTAI</h1>
            <p className="text-lg mt-2 text-gray-300">
                Short intro about who you are, what you do, and what you love.
            </p>

            <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
                <a href="https://github.com/yourgithub" target="_blank">GitHub</a>
                <a href="https://youtube.com/yourchannel" target="_blank">YouTube</a>
            </div>

            <img src="/assets/banner.png" alt="Game Banner" className="mt-10 w-full max-w-4xl rounded-2xl shadow-lg" />
        </div>
    );
}
