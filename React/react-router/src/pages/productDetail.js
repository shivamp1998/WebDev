import { Fragment } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const productNumber = useParams().id;
    return (
        <Fragment>
            <h1> Product detail {productNumber} </h1>
        </Fragment>
    )
}

export default ProductDetail;