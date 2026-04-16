import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          RestoFlow
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#como-funciona" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Cómo Funciona
          </Link>
          <Link href="#beneficios" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Beneficios
          </Link>
          <Link href="#precios" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Precios
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#registro"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm hover:shadow-md"
          >
            Empezar Ahora
          </Link>
        </div>
      </div>
    </header>
  );
}
