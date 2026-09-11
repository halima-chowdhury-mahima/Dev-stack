import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

interface TechnologiesProps {
  technologies: Technology[];
  selectedTechs: Technology[];
  handleAddToStack: (technology: Technology) => void;
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const Technologies = ({
  technologies,
  selectedTechs,
  handleAddToStack,
  handleRemove,
  handleRemoveAll,
}: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-5 py-16"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards + Your Stack */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedTechs={selectedTechs}
              handleAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Your Stack Sidebar */}
        <div className="lg:col-span-1">
          <YourStack
            selectedTechs={selectedTechs}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>

      </div>
    </section>
  );
};

export default Technologies;