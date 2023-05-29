/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => (
  <nav className="fixed w-full z-30 bg-white">
    <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div>
          <a
            className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
            href="#"
          >
            Julian Shniter
          </a>
        </div>
        <div>
          <a href="#skills" className="text-gray-800 hover:text-gray-700 mx-3">
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-gray-700 mx-3"
          >
            Projects
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-700 mx-3">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);
