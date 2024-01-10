import Image from "next/image";
import Hero from "./components/Hero";
import Experties from "./components/Experties";
import Using from "./components/Using";
import CodeForFun from "./components/CodeForFun";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { GoogleAnalytics } from "@next/third-parties";
export default function Home() {
  return (
    <main>
      <GoogleAnalytics id="G-GFF36FH35B">
        <Hero />
        <Experties />
        <Using />
        <CodeForFun />
        <Resume />
        <Contact />
      </GoogleAnalytics>
    </main>
  );
}
