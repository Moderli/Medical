const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Medicine Finder</h1>
      <p className="text-lg text-gray-600 mb-6">
        Please login or sign up to access our services.
      </p>
      <div className="flex space-x-4">
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </a>
        <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
