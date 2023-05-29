const Projects = () => (
  <section id="projects" className="text-gray-600 body-font bg-gray-100">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
        Projects
      </h1>
      {/* List out your projects here */}
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/2">
          <div className="h-full bg-gray-100 p-8 rounded">
            <h2 className="text-2xl font-medium title-font mb-3">
              Project Name
            </h2>
            <p className="leading-relaxed text-base">...</p>
            <a href="/">Live Link</a>
          </div>
        </div>
        ...
      </div>
    </div>
  </section>
);

export default Projects;
