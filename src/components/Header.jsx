import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between items-center px-20">
        <ul className="flex items-center justify-between">
            <li className="ml-20">
                <Link to="/" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">Search Stock</Link>
            </li>
            <li className="ml-20">
                <Link to="/saved" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">Saved Stock</Link>
            </li>
            <li className="ml-20">
                <Link to="/about" className="no-underline text-emerald-500 hover:bg-slate-600 rounded-full p-2">About</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header