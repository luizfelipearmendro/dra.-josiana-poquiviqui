import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-12">
            Agende sua consulta e dê o primeiro passo para o seu bem-estar.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-body text-lg">(65) 9 9915-9691</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-foreground">
              <Instagram className="w-5 h-5 text-primary" />
              <a href="https://www.instagram.com/nandapsi_cologia" target="_blank" rel="noopener noreferrer">
                <span className="font-body text-lg">@nandapsi_cologia</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body">Atendimento presencial e online</span>
            </div>
          </div>

          <a
            href="https://wa.me/5565999159691/?text=Olá%20Dra.%20Fernanda%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-base gap-2 px-10 py-6 rounded-full shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
