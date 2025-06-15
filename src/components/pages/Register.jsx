import { RevealOnScroll } from "../utils/RevealOnScroll";
import {Navbar} from "../sections/Navbar"
import { RegisterForm } from "../sections/RegisterForm";
import { Footer } from "../sections/footer";

export const Register = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <Navbar />
        <RegisterForm />
        <Footer />
      </RevealOnScroll>
    </section>
  );
};
