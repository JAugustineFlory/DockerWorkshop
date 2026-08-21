import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function GearViewer() {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [ gearItem, setGearItem ] = useState({});

    useEffect(() => {
        const getGearItem = () => {
            fetch(`http://localhost:3000/${type}/${id}`)
            .then(response => response.json())
            .then(jsonResponse => setGearItem(jsonResponse));
        }

        getGearItem();
    }, [])

    return (
        <div className='page-display'>
            <button className='back-button' onClick={() => navigate(`/${type}`)}>Back</button>
            <div className='gear-item-container'>
                <h1>{gearItem.name}</h1>
                <div className='gear-item-properties'>
                    {Object.keys(gearItem).map((column) => {
                        return (
                            <div className='gear-item-property' key={gearItem.id}>{column}: {gearItem[column]}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}