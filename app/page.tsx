import Image from "next/image";
import Hero from "./components/Hero";
import Experties from "./components/Experties";
import Using from "./components/Using";
import CodeForFun from "./components/CodeForFun";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
export default function Home() {
  return (
    <main>
      <Hero />
      <Experties />
      <Using />
      <CodeForFun />
      <Resume />
      <Contact />
    </main>
  );
}
