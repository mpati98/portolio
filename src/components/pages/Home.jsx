import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import GolfDailyNew from "../sections/GolfDailyNew";
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";

export const Home = () => {
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
        <GolfDailyNew />
      </RevealOnScroll>
    </section>
  );
};
