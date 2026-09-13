import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import TechnologyCard from "./TechnologyCard";

type Technology = {
  id: number;
  name: string;
  icon: IconType;
  category: string;
  description: string;
  badge?: string;
  level: string;
  rating: number;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    icon: SiReact,
    category: "Frontend",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    badge: "Popular",
    level: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 2,
    name: "Vue.js",
    icon: SiVuedotjs,
    category: "Frontend",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    badge: "Versatile",
    level: "Beginner-Friendly",
    rating: 4.8,
  },

  {
    id: 3,
    name: "Svelte",
    icon: SiSvelte,
    category: "Frontend",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    badge: "Fast",
    level: "Intermediate",
    rating: 4.8,
  },

  {
    id: 4,
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    level: "Intermediate",
    rating: 4.9,
  },

  {
    id: 5,
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    badge: "Standard",
    level: "Intermediate",
    rating: 4.8,
  },

  {
    id: 6,
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    badge: "Top SQL",
    level: "Intermediate",
    rating: 4.9,
  },

  {
    id: 7,
    name: "Redis",
    icon: SiRedis,
    category: "Database",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    badge: "Cache",
    level: "Intermediate",
    rating: 4.8,
  },

  {
    id: 8,
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    badge: "Ubiquitous",
    level: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    badge: "Essential",
    level: "Intermediate",
    rating: 4.9,
  },

  {
    id: 10,
    name: "Java",
    icon: FaJava,
    category: "Language",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    badge: "Robust",
    level: "Intermediate",
    rating: 4.6,
  },

  {
    id: 11,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Styling",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    badge: "Modern",
    level: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 12,
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    badge: "Containers",
    level: "Intermediate",
    rating: 4.9,
  },
];

function Technologies() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology
  function addToStack(technology: Technology) {
    const alreadyExists = stack.some(function (item) {
      return item.id === technology.id;
    });

    if (alreadyExists) {
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  }

  // Remove one technology
  function removeFromStack(id: number) {
    const technology = stack.find(function (item) {
      return item.id === id;
    });

    const newStack = stack.filter(function (item) {
      return item.id !== id;
    });

    setStack(newStack);

    if (technology) {
      toast.success(`${technology.name} removed from your stack!`);
    }
  }

  // Remove all technologies
  function removeAll() {
    setStack([]);

    toast.success("All technologies removed!");
  }

  return (
    <>
      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />

      <section
        id="technologies"
        className="bg-white px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Pick technologies to build your ideal development stack.
            </p>
          </div>

          {/* Technology Cards + Stack */}
          <div className="grid gap-5 lg:grid-cols-4">

            {/* Technology Cards */}
            <div className="lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

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
            <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

              {/* Stack Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    {stack.length} Technology
                    {stack.length !== 1 ? "ies" : "y"} Selected
                  </p>
                </div>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50 text-xs font-semibold text-pink-500">
                  {stack.length}
                </span>
              </div>

              {/* Empty Stack */}
              {stack.length === 0 ? (
                <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-5 text-center">
                  <p className="text-xs leading-5 text-gray-400">
                    Your stack is empty.
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Add technologies to build your stack.
                  </p>
                </div>
              ) : (
                <div className="mt-4 flex flex-col gap-2">

                  {/* Selected Technologies */}
                  {stack.map(function (technology) {
                    const Icon = technology.icon;

                    return (
                      <div
                        key={technology.id}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2"
                      >
                        <div className="flex items-center gap-3">

                          <Icon className="h-5 w-5 text-gray-700" />

                          <div>
                            <p className="text-xs font-medium text-gray-800">
                              {technology.name}
                            </p>

                            <p className="text-[8px] text-gray-400">
                              {technology.category}
                            </p>
                          </div>

                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromStack(technology.id)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full text-sm text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}

                  {/* Remove All */}
                  <button
                    onClick={removeAll}
                    className="mt-4 rounded-md border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
                  >
                    Remove All
                  </button>

                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;