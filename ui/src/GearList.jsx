import { useEffect, useState } from "react";

export default function GearList(props) {

    const type = props.type;
    const [ gearList, setGearList ] = useState([]);
    
    useEffect(() => {
        const getGear = () => {/*
            fetch(URL HERE)
            .then(response => response.json())
            .then(jsonResponse = setGearList(jsonResponse));*/
            return [
                {name: `Test ${type} 1`, test: `Test Value 1`},
                {name: `Test ${type} 2`, test: `Test Value 2`},
            ]
        }

        getGear();
    })

    return (
        <>
            {gearList.map((gear) => {
                return (
                    <div className='gear-list-item'>{gear.name}, {gear.test}</div>
                )
            })}
        </>
    )
}