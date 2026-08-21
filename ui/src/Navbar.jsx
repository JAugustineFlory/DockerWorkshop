import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <header>
                <h1>Skyrim Gear Viewer</h1>
                <p>By: Jacob Flory and Emilio Roybal</p>
            </header>
            <button onClick={() => navigate("/armor")}>Armor</button>
            <button onClick={() => navigate("/weapons")}>Weapons</button>
        </div>
    )
}