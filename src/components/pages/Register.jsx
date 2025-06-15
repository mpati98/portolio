import { RevealOnScroll } from "../utils/RevealOnScroll";
import { Navbar } from "../sections/Navbar";
import { RegisterForm } from "../sections/RegisterForm";
import { Footer } from "../sections/footer";
import { useState } from "react";
import { LoadingScreen } from "../utils/LoadingScreen";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section
      id="register"
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
        <RegisterForm />
        <Footer />
      </RevealOnScroll>
    </section>
  );
};
