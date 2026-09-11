import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  selectedTechs: Technology[];
  handleAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  selectedTechs,
  handleAddToStack,
}: TechnologyCardProps) => {
  // Check if technology is already added
  const isAdded = selectedTechs.some(
    (item) => item.id === technology.id
  );

  return (
    <div
      className={`rounded-2xl border-2 bg-white p-5 transition-all duration-300 ${
        isAdded
          ? "border-pink-400 shadow-md shadow-pink-100"
          : "border-gray-200 shadow-sm hover:border-pink-300 hover:shadow-md"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-3 min-h-20 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        <span className="text-yellow-500">★</span>

        <span className="text-sm font-semibold text-slate-700">
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
          isAdded
            ? "cursor-not-allowed border border-pink-300 bg-pink-50 text-pink-500"
            : "bg-slate-800 text-white hover:bg-slate-900"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;