import SearchBar from '../components/SearchBar';
import DoctorAvailability from '../components/DoctorAvailablity';
import MedicineList from '../components/MedicineList';
import FeaturedDoctors from '../components/FraturedDoctors';
import Cart from '../components/Cart';
import PrescriptionTable from '../components/PrescriptionTable';

const MainPage = () => {
  const handleSearch = (query) => {
    console.log(`Searching for medicine: ${query}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-blue-600">
          Welcome to Medicine Finder
        </h1>

        <SearchBar onSearch={handleSearch} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <DoctorAvailability />
          <MedicineList />
          <div className="flex flex-col items-center cursor-pointer hover:bg-yellow-50 p-4 rounded-md transition">
            <div className="bg-yellow-500 text-white p-6 rounded-full mb-2">
              <i className="fas fa-notes-medical text-4xl"></i>
            </div>
            <p className="text-center text-yellow-600 font-medium">Health Tips</p>
          </div>
        </div>

        <FeaturedDoctors />

        {/* Cart Section */}
        <Cart />

        {/* Prescription Table */}
        <PrescriptionTable />
      </div>
    </div>
  );
};

export default MainPage;
