import StackItem from "./StackItem";
import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechs: Technology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="mb-5">
        <h3 className="text-xl font-bold text-slate-900">
          Your Stack
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {selectedTechs.length}{" "}
          {selectedTechs.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      {selectedTechs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center">
          <div className="mb-3 text-4xl">
            🧰
          </div>

          <h4 className="font-semibold text-slate-700">
            Your stack is empty
          </h4>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {selectedTechs.map((tech) => (
              <StackItem
                key={tech.id}
                tech={tech}
                handleRemove={handleRemove}
              />
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
};

export default YourStack;