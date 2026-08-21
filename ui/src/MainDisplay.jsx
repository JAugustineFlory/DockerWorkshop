import GearList from './GearList'

export default function MainDisplay() {
    return (
        <div className="main-display">
            <div className="gear-list-container" id="armor-list-container">
            <h2>Armor</h2>
            <GearList type="armor"/>
            </div>
            <div className="gear-list-container" id="weapons-list-container">
            <h2>Weapons</h2>
            <GearList type="weapons"/>
            </div>
        </div>
    )
}