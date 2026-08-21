import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function GearList() {

    const { type } = useParams();
    const navigate = useNavigate();
    const [ gearList, setGearList ] = useState([]);
    const [ searchInput, setSearchInput ] = useState("");
    
    useEffect(() => {
        const getGear = async () => {
            await fetch(`http://localhost:3000/${type}`)
            .then(response => response.json())
            .then(jsonResponse => setGearList(jsonResponse));/*
            setGearList([
                {id: 1, name: `Test ${type} 1`, type: `Battleaxe`},
                {id: 2, name: `Test ${type} 2`, type: `Sword`},
                {id: 3, name: `Test ${type} 3`, type: `Dagger`},
                {id: 4, name: `Test ${type} 4`, type: `Bow`},
            ]);*/
        }

        getGear();
    }, [type])

    const getSearchedGearList = () => {
        if (!searchInput) return gearList;
        return(gearList.filter((gear) => {
            const lowerSearchInput = searchInput.toLowerCase();
            console.log("Checking for " + lowerSearchInput);
            const lowerName = gear.name.toLowerCase();
            return lowerName.includes(lowerSearchInput);
        }))
    }

    const searchedGearList = getSearchedGearList();

    return (
        <div className="page-display">
            <SearchBar setSearchInput={setSearchInput}/>
            <h2>{type}</h2>
            <div className='gear-list'>
                {searchedGearList.map((gear) => {
                    return (
                        <button className='gear-list-item' key={gear.id} onClick={() => navigate(`/${type}/${gear.id}`)}>
                            <div className='gear-list-item-contents'>
                                <p className='gear-list-item-contents-title'>{gear.name}</p>
                                <p className='gear-list-item-contents-type'>{gear.type}</p>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}