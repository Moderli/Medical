import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">Medicine Finder</Link>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
