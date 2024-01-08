import Image from "next/image";
import Hero from "./components/Hero";
import Experties from "./components/Experties";
import Using from "./components/Using";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experties />
      <Using />
    </main>
  );
}
