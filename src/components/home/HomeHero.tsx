import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import  Hero  from "@/assets/Hero-Hakim.png";

type HomeHeroProps = {
  heroImage: string;
};

export function HomeHero() {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[16/7]">
      <img
        src={Hero}
        alt="AC rental services in Gurgaon"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </section>
  );
}