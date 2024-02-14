import { Metadata } from "next";
import Hero from '@/components/Hero/page';
import Levels from '@/components/Levels/page';
import Header from "@/components/Header/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Levels />
    </main>
  );
} 