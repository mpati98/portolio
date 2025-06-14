import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";
import ProductBoard from "../sections/productBoard";
import { Footer } from "../sections/footer";

export const Shop = () => {
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
        <ProductBoard />
        <Footer/>
      </RevealOnScroll>
    </section>
  );
};
