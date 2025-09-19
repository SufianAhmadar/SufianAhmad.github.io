export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sufian Portfolio</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/portfolio" className="hover:underline">Portfolio</a>
        <a href="/career" className="hover:underline">Career</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}