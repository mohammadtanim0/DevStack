type Technology = {
  id: number;
  name: string;
  icon: string;
  category: string;
  description: string;
};

type TechnologyCardProps = {
  technology: Technology;
  addToStack: (technology: Technology) => void;
};

function TechnologyCard({
  technology,
  addToStack,
}: TechnologyCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:bg-gray-200">
      
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
          {technology.icon}
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
          {technology.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {technology.description}
      </p>

      <button
        onClick={() => addToStack(technology)}
        className="mt-4 text-sm font-semibold text-pink-500"
      >
        Add to Stack →
      </button>

    </div>
  );
}

export default TechnologyCard;