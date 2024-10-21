import { useCart } from '../contexts/CartContext';

const PrescriptionTable = () => {
  const { cart } = useCart();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Prescription</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No medicines added to your prescription.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow-md">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Medicine</th>
                <th className="text-left">Description</th>
                <th className="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PrescriptionTable;
