import { useDispatch ,useSelector } from 'react-redux';
import { additem , removeitem  } from './redux/slice';

const AddToCart = (props) => {
    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart.value);
    console.log("Product.id--",props.product.id);
    console.log("card_items--",cartSelector);
    // console.log(typeof cartSelector);
    return (
        <>
            {cartSelector.some((cartitem) => cartitem.id === props.product.id) ? ( 
                <button className="add-to-cart " onClick={() => dispatch(removeitem(props.product))}>Remove from Cart</button>
            ) : (
                <button className="add-to-cart " onClick={() => dispatch(additem(props.product))}>Add to Cart </button>
            )
            }
        </>
    );
}

export default AddToCart;