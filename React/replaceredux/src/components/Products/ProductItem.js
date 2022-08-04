import React, { useContext } from 'react';
import Card from '../UI/Card';
import './ProductItem.css';
import  { ProductsContext } from '../../Context/product-context';


const ProductItem = props => {
  // const dispatch = useDispatch();
  const toggleFavourite = useContext(ProductsContext).toggleFavourite;

  const toggleFavHandler = (id) => {
    toggleFavourite(id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={() => toggleFavHandler(props.id)}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
