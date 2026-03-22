import { useDispatch, useSelector } from 'react-redux';
// import { additem , removeitem  } from './redux/slice';
import AddToCart from './AddToCart';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productSlice';


const Products = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const ProductData = useSelector((state) => state.Products.products.products);
    console.log("yessspro",ProductData);

    return (
      <section className="products">
        <div className="product-grid">
          {
            ProductData && ProductData.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-image">
                  <img src={item.thumbnail} alt={item.title} loading="lazy" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">${item.price}</p>

                  <AddToCart product={item} />
                </div>
              </div>
            ))
          }

        </div>
      </section>
    );

}

export default Products;