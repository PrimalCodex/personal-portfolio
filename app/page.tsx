export default function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 bg-white w-full bg-transparent text-gray-900 py-4 z-10 shadow-md">
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
                  className="px-4 py-2 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-400 transition">
                  <a href="#about">About</a>
                </button>
              </li>
              <li>
                <button
                  className="px-4 py-2 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-400 transition">
                  <a href="#projects">Projects</a>
                </button>
              </li>
              <li>
                <button
                  className="px-4 py-2 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-400 transition">
                  <a href="#contact">Contact</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[80px]">
        <section
          id="about"
          className="h-screen flex flex-col justify-center items-center snap-start"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frontend Developer</h2>
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-4">
            Hello, I'm Nedim.
            As a frontend developer, I specialize in creating clean, efficient, and scalable web applications.
            I am dedicated to delivering intuitive user experiences and building solutions that drive impactful results.
          </p>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-block px-6 mt-5 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
          >
            Download CV
          </a>
        </section>
        <section
          id="projects"
          className="h-screen flex flex-col justify-center items-center snap-start bg-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="text-lg text-gray-700 max-w-2xl text-center mb-6">
            <p>Here are some of the projects I have worked on:</p>
          </div>
          <div className="flex space-x-8 justify-center">
            <div className="p-6 border-2 border-gray-300 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold text-gray-900">Project 1</h3>
              <p className="text-gray-700">A short description of project 1.</p>
              <a href="https://github.com/yourusername/project1" target="_blank"
                 className="text-blue-500 mt-2 block">View
                on GitHub</a>
            </div>
            <div className="p-6 border-2 border-gray-300 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold text-gray-900">Project 2</h3>
              <p className="text-gray-700">A short description of project 2.</p>
              <a href="https://github.com/yourusername/project2" target="_blank"
                 className="text-blue-500 mt-2 block">View
                on GitHub</a>
            </div>
            <div className="p-6 border-2 border-gray-300 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold text-gray-900">Project 3</h3>
              <p className="text-gray-700">A short description of project 3.</p>
              <a href="https://github.com/yourusername/project3" target="_blank"
                 className="text-blue-500 mt-2 block">View
                on GitHub</a>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="h-screen flex flex-col justify-center items-center snap-start"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700 text-center mb-4">
            If you’d like to work together or just want to chat, feel free to reach out!
          </p>
          <a
            href="mailto:youremail@example.com"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
          >
            Send an Email
          </a>
          <a
            href="mailto:youremail@example.com"
            className="mt-6 relative group"
          >
            <img
              src="https://example.com/email-icon.png"
              alt="Email Icon"
              className="w-20 h-20 object-cover"
            />
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 opacity-0
               group-hover:opacity-100 transition-opacity duration-300">
    </span>
          </a>
        </section>
      </main>
    </div>
  );
}
