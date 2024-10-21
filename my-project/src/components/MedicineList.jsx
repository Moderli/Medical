import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const MedicineList = () => {
  const { addToCart } = useCart();
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const medicines = [
    { id: 1, name: 'Paracetamol', price: '$10', description: 'Pain relief and fever.' },
    { id: 2, name: 'Ibuprofen', price: '$15', description: 'Anti-inflammatory medicine.' },
    { id: 3, name: 'Amoxicillin', price: '$20', description: 'Antibiotic for infections.' },
  ];

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const closeModal = () => {
    setSelectedMedicine(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Medicines</h2>
      <div className="grid grid-cols-1 gap-4">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-green-500 text-white p-4 rounded cursor-pointer hover:bg-green-600 flex justify-between items-center"
            onClick={() => handleMedicineClick(medicine)}
          >
            <div>
              <h3 className="font-bold">{medicine.name}</h3>
              <p>{medicine.price}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(medicine);
              }}
              className="bg-white text-green-500 p-2 rounded hover:bg-gray-100"
            >
              <i className="fas fa-cart-plus"></i> Add
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-2xl font-bold mb-2">{selectedMedicine.name}</h3>
            <p>{selectedMedicine.description}</p>
            <p className="text-green-500 font-bold">{selectedMedicine.price}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineList;
