    import MealsSummary from "./mealsSummary"
    import AvailableMeals from "./availableMeals"
    import { Fragment } from 'react';
    const Meals = () => {
        return <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    }

    export default Meals;