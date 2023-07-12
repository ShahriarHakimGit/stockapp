import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between items-center lg:px-20">
        <ul className="flex items-center justify-between">
            <li className="ml-20 sm:ml-20 md:ml-2">
                <Link to="/" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">Search</Link>
            </li>
            <li className="ml-20 sm:ml-20 md:ml-2">
                <Link to="/saved" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">Saved</Link>
            </li>
            <li className="ml-20 sm:ml-20 md:ml-2">
                <Link to="/about" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">About</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header