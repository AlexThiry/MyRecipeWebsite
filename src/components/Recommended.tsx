import {useState, useEffect} from "react";
import "./Recommended.css"

interface RecommededData {
    recipes?: string[];
}

const Recommended = () => {
    const  [backendData, setBackendData] = useState<RecommededData>({});
    
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
                backendData.recipes.map((recipe, i) => (
                    <p key={i}>{recipe}</p>
                  ))
            )}
        </div>
    );
}

export default Recommended