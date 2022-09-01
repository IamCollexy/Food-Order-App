import React, {useEffect}from 'react'
import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Swallow & Soup',
//     description: 'Finest fish, meat and veggies',
//     price: 20.99,
//   },
//   {
//     id: 'm2',
//     name: 'Rice and Chicken',
//     description: 'A Nigerian specialty!',
//     price: 15.5,
//   },
//   {
//     id: 'm5',
//     name: 'Plantain, Pasta &  sauce',
//     description: 'Tasty...and saucy..',
//     price: 18.99,
//   },
//   {
//     id: 'm4',
//     name: 'Veggie fries',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
// ];


const AvailableMeals = () => {
const [meals, setMeals ] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState();

   useEffect(() => {
    const fetchMeals = async () => {
    const response = await fetch('https://react-practice-e9d43-default-rtdb.firebaseio.com/meals.json');
    // For Error to be thrown we Omit .json
    // const response = await fetch('https://react-practice-e9d43-default-rtdb.firebaseio.com/meals');

if (!response.ok) {
  throw new Error ('something went wrong!');
}

  const responseData = await response.json();

  const loadedMeals = []; 
  
  for (const key in responseData) { 
    loadedMeals.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price,
    });
  }
  setMeals(loadedMeals);
  setIsLoading(false);
};

fetchMeals().catch((error) => {
  setIsLoading(false); 
  setHttpError (error.message)
});

//Cannot work like this because this function is an async function

// try {
//     fetchMeals();
// } catch(error) {
//   setIsLoading(false);
//   setHttpError (error.message)
// }
    },[]);


const mealsList = meals.map((meal) =>
 <MealItem 
//  meal={meal}
 key={meal.id} 
 id={meal.id}
 name={meal.name}
 description={meal.description}
price={meal.price}
 
 />);

if (isLoading) {
  return( <section className={classes.MealsLoading}>
    <p>Loading...</p>
  </section> )
};
if (httpError) {
  return( <section className={classes.MealsError}>
<p>{httpError}</p>
  </section>
  )
}


  return (
   <section className={classes.meals}>
    <Card>
    <ul>
      {mealsList}
    </ul>
    </Card>
   
   </section>
  )
}

export default AvailableMeals