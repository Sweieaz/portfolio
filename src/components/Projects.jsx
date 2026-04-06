function Projects() {
  const projects = [
    {
      title: "Kalority | Home Website",
      company: "Kalority Ventures",
      image: "/images/kalority.png",
      link: "https://www.kalority.com/",
      description:
        "Designed and developed the company’s official website with a strong focus on responsiveness and modern UI design. Implemented responsive layouts to ensure optimal user experience across desktop, tablet, and mobile devices.",
      tech: "HTML • CSS • JavaScript • Tailwind CSS",
    },
    {
      title: "Enssy Enterprises Website",
      company: "Enssy Enterprises",
      image: "/images/enssy.png",

      link: "https://www.enssy.co.ke/",
      description:
        "Developed a fully responsive business website to present company services and information. Implemented modern UI design principles to improve accessibility and mobile responsiveness.",
      tech: "HTML • CSS • JavaScript • Tailwind CSS",
    },
    {
      title: "SAVIX Platform Improvements",
      company: "The SAVIX",
      image: "/images/savix.png",
      description:
        "Improved the design and responsiveness of the SAVIX pricing page. Implemented contact email functionality and contributed to ongoing improvements of the SAVIX MIS platform including API mocking and frontend testing.",
      tech: "JavaScript • Tailwind CSS • API Integration",
      links: [
        {
          label: "The SAVIX",
          url: "https://thesavix.org",
        },
        { label: "MIS Platform", url: "https://mis.thesavix.org/login" },
      ],
    },
    {
      title: "SAVIX Billing System (In Progress)",
      company: "The SAVIX",
      image: "/images/savix-billing.png",
      description:
        "Currently contributing to rebuilding the UI of the SAVIX billing system. Developed billing account features and implemented frontend logic for account management. Integrated mock APIs for testing and validation, and worked with modern tools such as Zod for schema validation and TanStack for state and data handling.",
      tech: "React • TypeScript • Tailwind CSS • Zod • TanStack • API Mocking",
      links: [
        {
          label: "Coming Soon",
          url: "#",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 font-secondary text-gray-600">
            Projects <span className="text-purple-600">__</span>
          </h2>
          <p className="mt-4 text-gray-400 font-primary italic">
            These are the projects that i have been able to work on that
            showcase my potential skills and what i offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow p-6 hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover shadow-xl"
              />

              <h3 className="text-xl text-gray-600 font-bold mb-2 mt-4 font-secondary">
                {project.title}
              </h3>

              <p className="text-purple-600 text-sm mb-3 font-primary">
                {project.company}
              </p>

              <p className="text-gray-500 mb-4 grow font-primary">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-4 font-secondary">
                {project.tech}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.links
                  ? project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-purple-600 font-secondary2 text-white px-4 py-1 rounded-lg hover:bg-purple-700 transition"
                      >
                        {link.label}
                      </a>
                    ))
                  : project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-purple-600 font-secondary2 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
                      >
                        Visit Website
                      </a>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
