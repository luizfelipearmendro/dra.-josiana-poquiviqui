import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Sobre Mim
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Sou a Dra. Josiana Fernanda Poquiviqui, psicóloga registrada sob o CRP 18/8067,
            especializada em Terapia Cognitivo Comportamental (TCC). Meu trabalho é ajudar
            você a compreender seus pensamentos, emoções e comportamentos, promovendo mudanças
            que geram bem-estar e qualidade de vida.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Atendo adolescentes, jovens, adultos e idosos, sempre com acolhimento,
            ética e respeito à singularidade de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
