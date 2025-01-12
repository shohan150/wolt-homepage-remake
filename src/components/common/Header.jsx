
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Wolt Logo" className="h-6" />
        <div className="flex items-center space-x-2 text-sm">
          <span>Kerava</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in Wolt..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 text-sm focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2a9 9 0 100-18 9 9 0 000 18zm-7-2h7m4 0h7m-2 0a2 2 0 11-4 0" />
          </svg>
        </div>
      </div>

      {/* Right Side: Auth Links */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-sm text-gray-600">Log in</a>
        <a href="#" className="text-sm text-white bg-blue-500 px-4 py-2 rounded-full">Sign up</a>
      </div>
    </header>
  );
};

export default Header;
