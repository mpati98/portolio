import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import NewBoards from "../sections/NewBoards";
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";

export const NewLatest = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {" "}
      {!loading && (
        <LoadingScreen
          onComplete={() => {
            setLoading(true);
          }}
        />
      )}{" "}
      <RevealOnScroll>
        <Navbar />
        <NewBoards />
      </RevealOnScroll>
    </section>
  );
};
