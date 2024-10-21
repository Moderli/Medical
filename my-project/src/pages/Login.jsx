import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // Static user credentials for the demo
  const staticUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  // Function to handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate credentials against the static user
    if (email === staticUser.email && password === staticUser.password) {
      setMessage({ type: 'success', text: 'Login successful!' });
      onLogin(); // Update the app state to logged in
      localStorage.setItem('isAuthenticated', 'true'); // Save state in localStorage
      setTimeout(() => navigate('/main'), 1000); // Navigate to the main page after a delay
    } else {
      setMessage({ type: 'error', text: 'Invalid email or password' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>
        {message && (
          <div
            className={`mb-4 text-center text-sm ${
              message.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message.text}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
