import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



const AvailableMeals = () => {
  const [meals,setMeals]  = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get(`https://push-notifications-20f90-default-rtdb.firebaseio.com/meals.json`).then((response) => {
        let mealsArray = [];
        setLoading(false);
        for( const key in response.data) {
          const singleItem = {
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price
          }
          mealsArray.push(singleItem);
        }
        setMeals(mealsArray);

    }).catch((err) => {
      setLoading(false);
      setError(true);    
    })
  },[])
  const mealsList = !loading ? meals && meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    /> 
  )): <p className={classes.MealsLoading}> Loading....</p>;

  return (
    <section className={classes.meals}>
      <Card>
      { error && <p className={classes.error}> Some Error has Occurred </p>}
      { !error && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
