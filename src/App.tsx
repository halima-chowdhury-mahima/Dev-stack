import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology): void => {
    const alreadyAdded = selectedTechs.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechs([...selectedTechs, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemove = (id: string): void => {
    const removedTech = selectedTechs.find(
      (tech) => tech.id === id
    );

    const remainingTechs = selectedTechs.filter(
      (tech) => tech.id !== id
    );

    setSelectedTechs(remainingTechs);

    if (removedTech) {
      toast.info(`${removedTech.name} removed from stack!`);
    }
  };

  const handleRemoveAll = (): void => {
    if (selectedTechs.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedTechs([]);
    toast.info("All technologies removed from stack!");
  };

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <Loading />
      ) : (
        <Technologies
          technologies={technologies}
          selectedTechs={selectedTechs}
          handleAddToStack={handleAddToStack}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      )}

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;