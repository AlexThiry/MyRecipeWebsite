import "./Filter.css"

const Filter = () => {
    const filters = ["Breakfast", "Lunch", "Dinner", "Desert"]
    return (
        <div className="Container">
            {filters.map(filter => <button className="Filter">{filter}</button>)}
        </div>
    );
}

export default Filter