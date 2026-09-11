import type { Technology } from "../types/technology";

interface StackItemProps {
  tech: Technology;
  handleRemove: (id: string) => void;
}

const StackItem = ({
  tech,
  handleRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3">

      <div className="flex items-center gap-3">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-9 w-9 object-contain"
        />

        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            {tech.name}
          </h4>

          <p className="text-xs text-gray-500">
            {tech.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleRemove(tech.id)}
        className="text-lg font-bold text-red-500 transition hover:text-red-700"
        aria-label={`Remove ${tech.name}`}
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;
