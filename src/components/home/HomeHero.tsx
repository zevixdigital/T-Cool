import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


type HomeHeroProps = {
  heroImage: string;
};

export function HomeHero() {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[16/7]">
      <img
        src="https://res.cloudinary.com/dadqwaqis/image/upload/v1771416881/Hero-Hakim_iqwvkh.png"
        alt="AC rental services in Gurgaon"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </section>
  );
}