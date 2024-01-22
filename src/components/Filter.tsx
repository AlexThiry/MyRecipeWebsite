import "./Filter.css"

const Filter = () => {
    const filters = ["Breakfast", "Lunch", "Dinner", "Desert"]
    return (
        <div className="filterContainer">
            {filters.map(filter => <button className="filter" key={filter}>{filter}</button>)}
        </div>
    );
}

export default Filter