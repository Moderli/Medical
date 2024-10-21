import { useState } from 'react';

const DoctorAvailability = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', experience: '10 years', details: 'Available from 10 AM to 5 PM' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', experience: '8 years', details: 'Available from 9 AM to 4 PM' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrician', experience: '5 years', details: 'Available from 12 PM to 6 PM' },
  ];

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Doctors</h2>
      <div className="grid grid-cols-1 gap-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-blue-500 text-white p-4 rounded cursor-pointer hover:bg-blue-600"
            onClick={() => handleDoctorClick(doctor)}
          >
            <h3 className="font-bold">{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p>{doctor.experience}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h3>
            <p>{selectedDoctor.specialty}</p>
            <p>{selectedDoctor.details}</p>
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

export default DoctorAvailability;
