// pages/Cart.jsx
import React from "react";
import { useState } from "react";
import {useCart} from "../../context/cartContext";
import './cart.css'

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  const [shippingFee, setShippingFee] = useState(10); // Default to Standard-Delivery
  const VAT_RATE = 0.07; // 7% VAT

  const handleCheckout = () => {
    // Handle checkout logic
    alert("Checkout functionality is not implemented yet.");
  };

  // Calculate VAT and total price
  const totalPrice = getTotalPrice();
  const vatAmount = totalPrice * VAT_RATE;
  const finalTotalPrice = totalPrice + vatAmount + shippingFee;

  return (
    <div className="carrt w-full h-full justify-center">
      <div className="title">
        <div className="flex flex-row p-2">
          <div className="col">
            <h4>
              <b>Shopping Cart</b>
            </h4>
          </div>
          <div className="col align-self-center text-white text-right">
            3 items
          </div>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="card">
            <div className="flex flex-col">
              {cartItems.map((item) => (
                <div key={item.id} className="cart">
                  <div className="row border-top border-bottom w-fa-skull">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img
                          className="img-fluid"
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </div>
                      <div className="col p-2">
                        <div className="row text-muted">{item.title}</div>
                        <div className="row">{item.description}</div>
                      </div>
                      <div className="flex flex-col h-auto gap-3 justify-center items-center col">
                        <div className=" flex flex-row gap-3 font-bold text-2xl items-center">
                          <button
                            className="items-center"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <p className="border px-5">{item.quantity}</p>
                          <button onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                        <div className="col">
                          <p className="text-muted text-sm">
                            Total: ${item.price * item.quantity}
                          </p>
                        </div>
                        <div>
                          <button
                            className="w-full px-3 bg-red-500 border-red-500 border-1 rounded-lg flex hover:bg-red-50"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col summary">
              <div>
                <h2>
                  <b className="text-sm p-2">Summary</b>
                </h2>
              </div>
              <hr />
              <div className="flex flex-row py-4 text-lg w-full ">
                <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
              </div>
              <form className="flex flex-col gap-2 justify-center items-start w-full">
                <p className="text-sm ">SHIPPING</p>
                <select
                  className="w-44 h-6 rounded-md px-2"
                  onChange={(e) => setShippingFee(parseFloat(e.target.value))}
                >
                  <option value={10} className="text-muted">
                    Standard-Delivery- $10.00
                  </option>
                  <option value={5} className="text-muted">
                    PickUp-Delivery- $5.00
                  </option>
                </select>
                <p className="text-sm">GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div className="flex flex-col justify-normal w-full p-3 gap-2">
                <span>VAT: ${vatAmount.toFixed(2)}</span>
                <h2 className="text-sm font-semibold">
                  Final Total Price: ${finalTotalPrice.toFixed(2)}
                </h2>
                <button
                  className="p-2 bg-green-500 rounded-lg font-bold hover:bg-green-600 hover:text-white"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
