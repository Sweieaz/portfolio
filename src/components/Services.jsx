function Services() {
  const services = [
    {
      title: "Responsive Web Development",
      description:
        "Design and implement websites that look great on desktop, tablet, and mobile devices.",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transform designs into clean, user-friendly interfaces with focus on accessibility.",
    },
    {
      title: "Frontend Component Development",
      description:
        "Build reusable React/Next.js components for scalable and maintainable applications.",
    },
    {
      title: "API Integration & Frontend Logic",
      description:
        "Connect frontend applications to REST APIs or mock services for dynamic data handling.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize web performance through efficient code, responsive layouts, and fast load times.",
    },
    {
      title: "Maintenance & Continuous Improvement",
      description:
        "Regularly update existing projects to enhance features, responsiveness, and UI consistency.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-50 font-secondary">
            Services __
          </h2>
          <p className="mt-4 text-gray-400 font-primary italic">
            As a Frontend Engineer, I offer the following services to help
            businesses build modern, responsive, and user-friendly web
            applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-4 font-secondary">
                {service.title}
              </h3>
              <p className="text-gray-700 font-primary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
