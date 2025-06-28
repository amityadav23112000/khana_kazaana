import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        {cartItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="desc">{item.description}</p>
            </div>
            <div className="image-area">
              <img src={item.image} alt={item.name} />
              <button className="add-btn">
                Proceed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
