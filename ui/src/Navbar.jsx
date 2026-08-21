import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <header>
                <button className="site-logo" onClick={() => navigate("/")}>
                    <h1>Skyrim Gear Viewer</h1>
                </button>
                <p>By: Jacob Flory and Emilio Roybal</p>
            </header>
            <button className="navbar-button" onClick={() => navigate("/armor")}>Armor</button>
            <button className="navbar-button" onClick={() => navigate("/weapons")}>Weapons</button>
        </div>
    )
}