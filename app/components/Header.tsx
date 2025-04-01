export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white text-gray-900 py-4 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Nedim</h1>
            <img
              src="/dev-icon-1.png"
              alt="Nedim Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button
                  className="w-30 h-12 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800
                  hover:text-white transition">
                  <a href="#about">About</a>
                </button>
              </li>
              <li>
                <button
                  className="w-30 h-12 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800
                  hover:text-white transition">
                  <a href="#projects">Projects</a>
                </button>
              </li>
              <li>
                <button
                  className="w-30 h-12 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800
                  hover:text-white transition">
                  <a href="#contact">Contact</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

