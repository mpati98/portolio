import { RevealOnScroll } from "../utils/RevealOnScroll";
import {Navbar} from "../sections/Navbar"
import GolfNew from "./GolfNew";
import { RegisterForm } from "./RegisterForm";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <Navbar />
        <GolfNew />
        <RegisterForm />
      </RevealOnScroll>
    </section>
  );
};
