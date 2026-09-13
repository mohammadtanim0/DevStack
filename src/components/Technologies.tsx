import { useState } from "react";
import TechnologyCard from "./TechnologyCard";

type Technology = {
  id: number;
  name: string;
  icon: string;
  category: string;
  description: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
  },
  {
    id: 2,
    name: "Vue.js",
    icon: "💚",
    category: "Frontend",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
  },
  {
    id: 3,
    name: "Svelte",
    icon: "🟠",
    category: "Frontend",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
  },
  {
    id: 4,
    name: "Next.js",
    icon: "▲",
    category: "Frontend",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
  },
  {
    id: 5,
    name: "Node.js",
    icon: "🟢",
    category: "Backend",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id: 7,
    name: "Redis",
    icon: "🔴",
    category: "Database",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
  },
  {
    id: 8,
    name: "JavaScript",
    icon: "JS",
    category: "Language",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
  },
  {
    id: 9,
    name: "TypeScript",
    icon: "TS",
    category: "Language",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
  },
  {
    id: 10,
    name: "Java",
    icon: "☕",
    category: "Language",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: "🎨",
    category: "Styling",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
  },
  {
    id: 12,
    name: "Docker",
    icon: "🐳",
    category: "DevOps",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
  },
];

function Technologies() {
  const [stack, setStack] = useState<Technology[]>([]);

  function addToStack(technology: Technology) {
    const alreadyExists = stack.some(function (item) {
      return item.id === technology.id;
    });

    if (!alreadyExists) {
      setStack([...stack, technology]);
    }
  }

  function removeFromStack(id: number) {
    const newStack = stack.filter(function (technology) {
      return technology.id !== id;
    });

    setStack(newStack);
  }

  function removeAll() {
    setStack([]);
  }

  return (
    <section id="technologies" className="bg-gray-50 px-5 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the Technologies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Discover the tools and technologies you can use to build your next
            project.
          </p>
        </div>

        {/* Technologies + Your Stack */}
        <div className="grid gap-8 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map(function (technology) {
                return (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    addToStack={addToStack}
                  />
                );
              })}
            </div>
          </div>

          {/* Your Stack */}
          <div className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                Your Stack
              </h3>

              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
                {stack.length}
              </span>
            </div>

            {stack.length === 0 ? (
              <p className="mt-6 text-sm leading-6 text-gray-400">
                Your stack is empty. Add technologies to build your stack.
              </p>
            ) : (
              <div className="mt-5 flex flex-col gap-3">

                {stack.map(function (technology) {
                  return (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span>{technology.icon}</span>

                        <span className="text-sm font-medium text-gray-700">
                          {technology.name}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromStack(technology.id)}
                        className="text-xs text-gray-400 transition hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}

                <button
                  onClick={removeAll}
                  className="mt-2 rounded-md border border-gray-200 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100"
                >
                  Remove All
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;