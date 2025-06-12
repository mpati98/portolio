import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import AllGolfNews from "../sections/AllGolfNews";
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";

export const News = () => {
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
        <AllGolfNews />
      </RevealOnScroll>
    </section>
  );
};
