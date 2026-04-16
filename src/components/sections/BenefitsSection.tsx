import { Clock, ShieldAlert, BadgeDollarSign, HeadphonesIcon } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Ahorro de tiempo",
      description: "Libera a tu equipo de recepción. Enfócate en preparar y entregar la comida, no en responder chats."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      title: "Menos errores humanos",
      description: "La IA no se equivoca al anotar una dirección o un plato. Múltiples validaciones aseguran el pedido correcto."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
      title: "Atención 24/7",
      description: "Ofrece un servicio al cliente inmediato, incluso fuera de tu horario de atención, o responde a pre-órdenes."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-primary" />,
      title: "Aumento de ventas",
      description: "Respuestas más rápidas significan clientes más felices. La IA recomienda productos extra de forma natural."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-muted/40 border-y border-border/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Diseñado para hacer crecer tu operación
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              La automatización con Inteligencia Artificial no es el futuro, es el estándar de hoy. Mejora tu rentabilidad y ofrece la mejor experiencia a tus consumidores.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-white p-2 rounded-lg border border-border shadow-sm shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 -z-10 animate-pulse"></div>
            <div className="glass border border-border/50 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden h-[500px] flex flex-col">
              <div className="flex items-center gap-3 border-b border-border/40 pb-4 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  W
                </div>
                <div>
                  <div className="font-bold text-sm">Cliente VIP</div>
                  <div className="text-xs text-green-500 font-medium">En línea</div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-2">
                <div className="bg-muted p-3 text-sm rounded-2xl rounded-tl-none self-start max-w-[80%]">
                  Hola, quiero pedir 2 hamburguesas clásicas y unas papas francesas. Enviar a Calle 45 # 12-32
                </div>
                <div className="bg-primary text-white p-3 text-sm rounded-2xl rounded-tr-none self-end max-w-[80%] animate-fade-in-up animation-delay-1000">
                  ¡Hola! Entendido. 2 Hamburguesas Clásicas y 1 Papas Francesas. ¿Te gustaría agregar bebida por $2 USD adicionales? 🍔🍟
                </div>
                <div className="bg-muted p-3 text-sm rounded-2xl rounded-tl-none self-start max-w-[80%] animate-fade-in-up animation-delay-2000">
                  Sí, por favor. 2 Coca Colas.
                </div>
                <div className="bg-primary text-white p-3 text-sm rounded-2xl rounded-tr-none self-end max-w-[80%] animate-fade-in-up animation-delay-3000">
                  Perfecto. El total es de $22 USD con envío a la Calle 45 # 12-32. ¿Pagas en efectivo o con tarjeta al recibir?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
