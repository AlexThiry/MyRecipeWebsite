import { useState, useEffect } from "react";
import Recommended from "./Recommended";
import "./Filter.css"

const Filter = () => {
    const [currentFilter, setCurrentFilter] = useState("")
    const filters = ["Breakfast", "Lunch", "Dinner", "Desert"]

    useEffect(()=> {
        console.log(currentFilter)
    },[currentFilter])
   
    return (
        <>
            <div className="filterContainer">
                {filters.map(filter => <button className="filter" key={filter} onClick={() => setCurrentFilter(filter)}>{filter}</button>)}
            </div>
            <Recommended filter={currentFilter}/>
        </>
    );
}

export default Filter