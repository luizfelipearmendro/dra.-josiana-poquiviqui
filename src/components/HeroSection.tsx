import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Consultório de psicologia acolhedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(262,60%,18%)] via-[hsl(262,50%,22%,0.85)] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-xl">
          <p className="text-primary-foreground/80 font-body text-sm tracking-[0.2em] uppercase mb-4">
            Psicóloga — CRP 18/8067
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
            Dra. Josiana<br />
            <span className="italic font-normal text-accent">Fernanda</span>
          </h1>
          <p className="text-primary-foreground/90 font-body text-lg md:text-xl leading-relaxed mb-4">
            Terapia Cognitivo Comportamental
          </p>
          <p className="text-primary-foreground/70 font-body text-base mb-8">
            Atendimento para Adolescentes, Jovens, Adultos e Idosos
          </p>
          <a
            href="https://wa.me/5565999159691/?text=Olá%20Dra.%20Fernanda%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-base gap-2 px-8 py-6 rounded-full shadow-lg">
              <Phone className="w-5 h-5" />
              Agendar Consulta
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
