import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import GolfDailyNews from "../sections/GolfDailyNews"
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";
import { Footer } from "../sections/footer";

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
        <GolfDailyNews />
        <Footer />
      </RevealOnScroll>
    </section>
  );
};
