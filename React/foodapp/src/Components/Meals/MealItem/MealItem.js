const MealItem = props => {
    const price =  `$${props.price.toFixed(2)}`;
    return <li>
        <div>
            <h3>
                {props.name}
            </h3>
        </div>
        <div>{props.description}</div>
        <div>{props.price}</div>
    </li>
}

export default MealItem;