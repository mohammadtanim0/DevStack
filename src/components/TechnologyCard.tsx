import type { IconType } from "react-icons";

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

type TechnologyCardProps = {
  technology: Technology;
  addToStack: (technology: Technology) => void;
};

function TechnologyCard({
  technology,
  addToStack,
}: TechnologyCardProps) {
  const Icon = technology.icon;

  return (
    <div className="flex min-h-[245px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>

        {technology.badge && (
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* Technology Name */}
      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[10px] text-gray-400">

        <span className="rounded bg-gray-50 px-2 py-1">
          {technology.category}
        </span>

        <span>
          {technology.level}
        </span>

        <span className="text-gray-600">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        onClick={() => addToStack(technology)}
        className="mt-3 rounded-md bg-gray-900 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
      >
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;