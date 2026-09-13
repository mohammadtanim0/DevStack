import { useState } from "react";
import TechnologyCard from "./TechnologyCard";

type Technology = {
  id: number;
  name: string;
  icon: string;
  category: string;
  description: string;
};

function Technologies() {
  const [stack, setStack] = useState<Technology[]>([]);

  const technologies: Technology[] = [
    {
      id: 1,
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      name: "Vue.js",
      icon: "💚",
      category: "Frontend",
      description: "A progressive JavaScript framework for building interfaces.",
    },
    {
      id: 3,
      name: "Next.js",
      icon: "▲",
      category: "Frontend",
      description: "A React framework for modern web applications.",
    },
    {
      id: 4,
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      description: "A JavaScript runtime for server-side applications.",
    },
    {
      id: 5,
      name: "PostgreSQL",
      icon: "🐘",
      category: "Database",
      description: "A powerful open-source relational database.",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: "🎨",
      category: "Styling",
      description: "A utility-first CSS framework for modern websites.",
    },
  ];

  // Add technology
  function addToStack(technology: Technology) {
    const alreadyExists = stack.some(function (item) {
      return item.id === technology.id;
    });

    if (!alreadyExists) {
      setStack([...stack, technology]);
    }
  }

  // Remove one technology
  function removeFromStack(id: number) {
    const newStack = stack.filter(function (technology) {
      return technology.id !== id;
    });

    setStack(newStack);
  }

  // Remove everything
  function removeAll() {
    setStack([]);
  }

  return (
    <section
      id="technologies"
      className="bg-gray-50 px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Technologies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Discover the tools and technologies you can use to
            build your next project.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Technology Cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">

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
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Stack
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {stack.length} technologies selected
                </p>
              </div>

              {stack.length > 0 && (
                <button
                  onClick={removeAll}
                  className="text-sm font-medium text-red-500 hover:text-red-600"
                >
                  Remove All
                </button>
              )}
            </div>

            {/* Empty Stack */}
            {stack.length === 0 && (
              <div className="mt-6 rounded-lg bg-gray-50 p-5 text-center">
                <p className="text-sm text-gray-500">
                  Your stack is empty.
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Add technologies from the list.
                </p>
              </div>
            )}

            {/* Stack Items */}
            {stack.length > 0 && (
              <div className="mt-5 space-y-3">

                {stack.map(function (technology) {
                  return (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg border border-gray-100 p-3"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                          {technology.icon}
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">
                            {technology.name}
                          </h3>

                          <p className="text-xs text-gray-400">
                            {technology.category}
                          </p>
                        </div>

                      </div>

                      <button
                        onClick={function () {
                          removeFromStack(technology.id);
                        }}
                        className="text-xs font-medium text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>

                    </div>
                  );
                })}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Technologies;