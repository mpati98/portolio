import { RevealOnScroll } from "../utils/RevealOnScroll";
import {Navbar} from "../sections/Navbar"
import { RegisterForm } from "../sections/RegisterForm";

export const Register = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <Navbar />
        <RegisterForm />
      </RevealOnScroll>
    </section>
  );
};
