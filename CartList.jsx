import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem, increaseQty, decreaseQty } from "./src/redux/slice";
import { FaTrash } from "react-icons/fa";

const CartList = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.value);

  const totalPrice = cartSelector.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart cart-container">
      <h1 className="heading center">
        Your Cart{" "}
        {cartSelector.length > 0 && <span>({cartSelector.length})</span>}
      </h1>

      {cartSelector.length > 0 ? (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Sub Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartSelector.map((item, index) => (
                  <tr key={index}>
                    {/* PRODUCT */}
                    <td className="product-cell" data-label="Product">
                      <div className="product-info">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="product-img"
                        />
                        <div>
                          <h4>{item.title}</h4>
                          <p className="brand">{item.brand}</p>
                        </div>
                      </div>
                    </td>

                    {/* PRICE */}
                    <td data-label="Unit Price">₹ {item.price}</td>

                    {/* QUANTITY */}
                   <td data-label="Quantity">
                    <div className="qty-control">
                      <button
                        onClick={() => dispatch(decreaseQty(item))}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        −
                      </button>

                      <span>{item.quantity || 1}</span>

                      <button onClick={() => dispatch(increaseQty(item))}>
                        +
                      </button>
                    </div>
                  </td>

                    {/* SUBTOTAL */}
                    <td data-label="Sub Total">
                      ₹ {(item.price * (item.quantity || 1)).toFixed(2)}
                    </td>

                    {/* REMOVE */}
                    <td data-label="Action">
                      <button
                        className="remove-button icon-btn"
                        onClick={() => dispatch(removeitem(item))}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="cart-footer">
            <button className="continue-btn">← Continue Shopping</button>

            <div className="checkout-section">
              <h2>Total: ₹ {totalPrice.toFixed(2)}</h2>
              <button className="checkout-btn">Checkout →</button>
            </div>
          </div>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartList;