import {useState, useEffect} from "react";
import "./Recommended.css"

const Recommended = () => {
    const  [backendData, setBackendData] = useState([{}])
    
    useEffect(() => {
        fetch('/api/recipes').then(
            (response) => {return response.json();}
        ).then(
            (data) => {
                console.log(data);
                setBackendData(data);
            }
        );
    }, []);
    return (
        <div className="recommendedContainer">
            {(typeof backendData.recipes === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                backendData.recipes.map((recipe: string[], i: number) => (
                    <p key={i}>{recipe}</p>
                  ))
            )}
        </div>
    );
}

export default Recommended