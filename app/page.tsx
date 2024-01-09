import Image from "next/image";
import Hero from "./components/Hero";
import Experties from "./components/Experties";
import Using from "./components/Using";
import CodeForFun from "./components/CodeForFun";
import Contact from "./components/Contact";
import { ResumeData } from "./constants/personal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experties />
      <Using />
      <CodeForFun />
      <ResumeData />
      <Contact />
    </main>
  );
}
