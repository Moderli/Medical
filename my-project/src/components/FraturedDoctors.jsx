const FeaturedDoctors = () => {
    const doctors = [
      { name: 'Dr. John Doe', specialty: 'Cardiologist', experience: '10 years' },
      { name: 'Dr. Jane Smith', specialty: 'Dermatologist', experience: '8 years' },
      { name: 'Dr. Emily Johnson', specialty: 'Pediatrician', experience: '5 years' },
    ];
  
    return (
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Featured Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-gray-500">Experience: {doctor.experience}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedDoctors;
  