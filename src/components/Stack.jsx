import { useState, useEffect, useRef } from "react";

const STACK = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/src/assets/images/node.webp" },
      { name: "Express", icon: "/src/assets/images/express.png" },
    ],
  },
  {
    title: "Frontend",
    featured: true,
    items: [
      { name: "React", icon: "/src/assets/images/react.webp" },
      { name: "Next.js", icon: "/src/assets/images/next.webp" },
      { name: "TypeScript", icon: "/src/assets/images/ts.jpeg" },
      { name: "JavaScript", icon: "/src/assets/images/js.webp" },
      { name: "HTML5", icon: "/src/assets/images/html.jpg" },
      { name: "CSS3", icon: "/src/assets/images/css.webp" },
      { name: "Tailwind", icon: "/src/assets/images/tailwind.webp" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "/src/assets/images/git.webp" },
      { name: "GitHub", icon: "/src/assets/images/github.jpeg" },
      { name: "Postman", icon: "/src/assets/images/postman.avif" },
    ],
  },
];

function Stack() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const init = {};
    STACK.forEach((_, i) => (init[i] = 0));
    return init;
  });
  const refs = useRef([]);

  const scrollToIndex = (groupIndex, index) => {
    const container = refs.current[groupIndex];
    if (!container) return;

    const item = container.children[index];
    if (!item) return;

    container.scrollTo({
      left: item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const updated = { ...prev };

        STACK.forEach((group, i) => {
          const nextIndex = (prev[i] + 1) % group.items.length;
          scrollToIndex(i, nextIndex);
          updated[i] = nextIndex;
        });

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stack" className="bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-50 font-secondary">
            My Tech Stack __
          </h2>
          <p className="mt-4 text-gray-400 font-primary italic">
            Technologies and tools I use to build scalable and modern
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {STACK.map((group, groupIndex) => {
            const currentIndex = activeIndex[groupIndex] || 0;

            return (
              <div
                key={group.title}
                className={`
                  relative  p-6 transition duration-300 
                  ${
                    group.featured
                      ? "bg-white shadow-md md:shadow-2xl md:scale-105 z-10"
                      : "bg-white/80 shadow-md opacity-100"
                  }
                `}
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-600 text-center font-secondary">
                  {group.title}
                </h3>

                <div
                  ref={(el) => (refs.current[groupIndex] = el)}
                  className="flex gap-6 overflow-x-auto px-4 sm:px-10 scrollbar-hide py-8"
                >
                  {group.items.map((item, index) => {
                    const isActive = currentIndex === index;

                    return (
                      <div
                        key={item.name}
                        onClick={() => {
                          setActiveIndex((prev) => ({
                            ...prev,
                            [groupIndex]: index,
                          }));
                          scrollToIndex(groupIndex, index);
                        }}
                        className={`
                          shrink-0 w-20 sm:w-24 flex flex-col items-center transition-all duration-300 cursor-pointer
                          ${isActive ? "scale-110" : "scale-90 opacity-60"}
                        `}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-15 h-15 sm:w-18 sm:h-18 rounded-full mb-2 shadow-md"
                        />
                        <span className="text-xs sm:text-sm text-gray-500 font-primary">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stack;
