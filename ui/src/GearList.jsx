import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GearList(props) {

    const type = props.type;
    const navigate = useNavigate();
    const [ gearList, setGearList ] = useState([]);
    
    useEffect(() => {
        const getGear = () => {/*
            fetch(URL HERE)
            .then(response => response.json())
            .then(jsonResponse = setGearList(jsonResponse));*/
            setGearList([
                {id: 1, name: `Test ${type} 1`, test: `Test Value 1`},
                {id: 2, name: `Test ${type} 2`, test: `Test Value 2`},
                {id: 3, name: `Test ${type} 3`, test: `Test Value 3`},
                {id: 4, name: `Test ${type} 4`, test: `Test Value 4`},
            ]);
        }

        getGear();
    }, [])

    return (
        <div className='gear-list'>
            {gearList.map((gear) => {
                return (
                    <button className='gear-list-item' onClick={() => navigate(`/${type}/${gear.id}`)}>{gear.name}</button>
                )
            })}
        </div>
    )
}