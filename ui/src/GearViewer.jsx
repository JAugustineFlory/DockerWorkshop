import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function GearViewer() {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [ gearItem, setGearItem ] = useState({});

    useEffect(() => {
        const getGearItem = () => {/*
            fetch(URL GOES HERE)
            .then(response => response.json())
            .then(jsonResponse => setGearItem(jsonResponse));*/
            setGearItem({id: id, name: `Test ${type}`})
        }

        getGearItem();
    }, [])

    return (
        <div className='gear-viewer-page'>
            <button onClick={() => navigate("/")}>Back</button>
            <div className='gear-item-container'>
                <h1>{gearItem.id}: {gearItem.name}</h1>
                <div className='gear-item-properties'>
                    {Object.keys(gearItem).map((column) => {
                        return (
                            <div className='gear-item-property'>{column}: {gearItem[column]}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}