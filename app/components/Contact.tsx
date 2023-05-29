/* eslint-disable jsx-a11y/anchor-is-valid */
const Contact = () => (
  <section id="contact" className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-20 text-center">
        Contact
      </h1>
      {/* Insert contact info or form here */}
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a className="text-indigo-500">email@example.com</a>
        <p className="leading-normal my-5">
          1234 Street Name
          <br />
          City, State, Zip
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
