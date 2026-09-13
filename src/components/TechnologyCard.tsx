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
  isAdded: boolean;
};

function TechnologyCard({
  technology,
  addToStack,
  isAdded,
}: TechnologyCardProps) {
  const Icon = technology.icon;

  return (
    <div
      className={`flex min-h-61.25 flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        isAdded ? "border-pink-500" : "border-gray-200"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center">
          <Icon/>
        </div>

        {technology.badge && (
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* Name */}
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

        <span>{technology.level}</span>

        <span className="text-gray-600">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={`mt-3 rounded-md border py-2 text-xs font-medium transition ${
          isAdded
            ? "cursor-not-allowed border-pink-500 bg-pink-50 text-pink-500"
            : "border-gray-900 bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;