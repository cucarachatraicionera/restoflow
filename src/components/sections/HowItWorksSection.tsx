import { MessageCircle, BrainCircuit, CheckCircle2, Ticket } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Cliente escribe por chat",
      description: "Tus clientes se comunican a tu número de WhatsApp de siempre. El flujo comienza de inmediato.",
      number: "01"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "IA toma el pedido",
      description: "RestoFlow comprende lenguaje natural, ofrece opciones del menú, toma la dirección y método de pago.",
      number: "02"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Confirmación del pedido",
      description: "Se envía un resumen automático al cliente confirmando productos y precios sin margen de error.",
      number: "03"
    },
    {
      icon: <Ticket className="w-8 h-8 text-primary" />,
      title: "Envío a cocina",
      description: "El pedido llega directo al chat interno o sistema que usa el equipo de cocina como un ticket organizado.",
      number: "04"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Cómo Funciona <span className="text-primary">RestoFlow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un flujo optimizado para automatizar las ventas de tu restaurante de principio a fin, totalmente por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all hover:border-primary/50">
              <div className="absolute top-4 right-4 text-5xl font-black text-muted/30 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
