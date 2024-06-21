// import useHttp from "../hooks/useHttp";
// import MealsItem from "./MealsItem";

// const requestConfig={};
// export default function Meals(){
//  const {data:loadedMeals,isLoading,error}= useHttp('http://localhost:3000/meals',requestConfig,[]);

//     if(isLoading){
//       return <p>Fetching data....</p>
//     }
//     if(!loadedMeals){
//       return <p>No meals found.</p>
//     }
//     console.log(loadedMeals);
//     return <ul id="meals">
//       {
//         loadedMeals.map((meal)=>(
//         <MealsItem key={meal.id} meal={meal}/>)
            
//         )
//       }
//     </ul>
// }

import React from 'react';
import useHttp from '../hooks/useHttp';
import MealsItem from './MealsItem';

const requestConfig = { method: 'GET' }; // Specify method here

export default function Meals() {
    const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p>Fetching data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!loadedMeals || loadedMeals.length === 0) {
        return <p>No meals found.</p>;
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealsItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
