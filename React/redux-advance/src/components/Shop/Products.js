import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {id: 'p1', price:5, title: 'My first Book', description: 'Awsome book'},
  {id: 'p2', price: 4, title: 'My second Book', description: 'Second Awsome book'}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((value,index) => (
            <ProductItem
            id={value.id}
           title={value.title}
           price={value.price}
            description={value.description}
        />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
