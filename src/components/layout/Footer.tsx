export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-2xl text-primary mb-4">RestoFlow</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          El sistema automático que lleva los pedidos de tu restaurante al siguiente nivel gracias a la Inteligencia Artificial.
        </p>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RestoFlow. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
