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

import technologyData from "../technologies.json";

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

type TechnologyData = {
  id: number;
  name: string;
  category: string;
  description: string;
  badge?: string;
  level: string;
  rating: number;
};

/* 
  Icons stay in TypeScript because functions/components
  cannot be stored inside JSON.
*/
const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Vue.js": SiVuedotjs,
  Svelte: SiSvelte,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: FaJava,
  "Tailwind CSS": SiTailwindcss,
  Docker: SiDocker,
};

/*
  Get card data from JSON and add the correct icon.
*/
const technologies: Technology[] = (technologyData as TechnologyData[]).map(
  function (technology) {
    return {
      ...technology,
      icon: technologyIcons[technology.name],
    };
  }
);

function Technologies() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology to stack
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
              <span className="bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technologies + Your Stack */}
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
                      isAdded={stack.some(function (item) {
                        return item.id === technology.id;
                      })}
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
                    {stack.length}{" "}
                    {stack.length === 1
                      ? "Technology"
                      : "Technologies"}{" "}
                    Selected
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

                /* Selected Technologies */
                <div className="mt-4 flex flex-col gap-2">

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

                        {/* Remove Button */}
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