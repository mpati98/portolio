import { RevealOnScroll } from "../utils/RevealOnScroll";
import {Navbar} from "../sections/Navbar"
import NewBoards from "../sections/NewBoards"

export const NewLatest = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <Navbar />
        <NewBoards />
      </RevealOnScroll>
    </section>
  );
};
