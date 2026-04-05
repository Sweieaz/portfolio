function Skills() {
  const skills = [
    { name: "JavaScript", level: "Advanced", percent: 90 },
    { name: "Next.js", level: "Advanced", percent: 90 },
    { name: "React.js", level: "Advanced", percent: 90 },
    { name: "HTML & CSS", level: "Expert", percent: 98 },
    { name: "TypeScript", level: "Advanced", percent: 85 },
    { name: "Tailwind CSS", level: "Advanced", percent: 95 },
    { name: "Node.js", level: "Proficient", percent: 75 },
    { name: "Express", level: "Proficient", percent: 75 },
    { name: "REST APIs", level: "Proficient", percent: 75 },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-secondary font-bold text-gray-600">
            My Skills <span className="text-purple-600">__</span>
          </h2>
          <p className="text-purple-500 font-secondary italic font-semibold  mt-2">
            ... what i know ...{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-600">
              My Creative Skills ...
            </h3>
            <p className="text-gray-500 leading-relaxed font-primary">
              I have gained my skills by working on a couple of personal
              projects which are available in my{" "}
              <span className="text-purple-500 underline cursor-pointer">
                github
              </span>{" "}
              account.
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 text-sm font-secondary ">
                  <span>{skill.name}</span>
                  <span className="italic">{skill.level}</span>
                </div>

                <div className="w-full bg-gray-300 h-1.5 rounded">
                  <div
                    className="bg-purple-500 h-1.5 rounded"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
