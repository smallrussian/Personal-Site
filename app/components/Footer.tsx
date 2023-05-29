export const Footer = () => (
  <footer className="text-gray-600 body-font bg-gray-200">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a
        href="/"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <span className="ml-3 text-xl">Julian Shniter</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © {new Date().getFullYear()} Julian Shniter —
        <a
          href="https://twitter.com/julian_s"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @julian_s
        </a>
      </p>
    </div>
  </footer>
);
