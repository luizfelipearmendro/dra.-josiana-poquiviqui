import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(262,60%,18%,0.6)] backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-semibold text-primary-foreground">
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          Psicóloga Clínica Josiana Fernanda
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[hsl(262,60%,18%,0.95)] backdrop-blur-md px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-primary-foreground/80 hover:text-primary-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
