const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-lg font-semibold text-foreground mb-1">
          Josiana Fernanda Poquiviqui
        </p>
        <p className="font-body text-sm text-muted-foreground mb-1">
          Psicóloga Clínica — CRP 18/8067
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
