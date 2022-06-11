import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <Fragment>
            <h1> Welcome To The Products </h1>
        <ul>
        <li> <Link to="/products/book">Book</Link> </li>
        <li> <Link to="/products/pen">Pen</Link> </li>
        <li> <Link to="/products/none">None</Link> </li>
        </ul>
        </Fragment>
    )
}

export default Products;