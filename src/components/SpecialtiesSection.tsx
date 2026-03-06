import { Brain, HeartCrack, Users, Sparkles, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const specialties = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Técnicas eficazes para identificar e gerenciar gatilhos de ansiedade, retomando o controle da sua vida.",
  },
  {
    icon: HeartCrack,
    title: "Depressão",
    description: "Acompanhamento terapêutico para superar a depressão e reencontrar motivação e alegria no dia a dia.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Desenvolvimento de habilidades para construir relações mais saudáveis e comunicação assertiva.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Processo de autodescoberta para compreender padrões emocionais e alcançar seu potencial pleno.",
  },
  {
    icon: GraduationCap,
    title: "Adolescentes",
    description: "Suporte especializado para as questões emocionais e desafios únicos da adolescência.",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Especialidades
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Áreas em que posso te ajudar na sua jornada de cuidado com a saúde mental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specialties.map((item) => (
            <Card
              key={item.title}
              className="bg-background border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
