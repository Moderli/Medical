import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow-md">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Medicine</th>
                <th className="text-left">Price</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
