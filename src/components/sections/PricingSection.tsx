import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="precios" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Precios Transparentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu volumen de pedidos. Sin comisiones ocultas, solo rentabilidad pura.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Mensual Plan */}
          <div className="flex-1 bg-white border border-border rounded-3xl p-8 flex flex-col hover:border-primary/30 transition-all hover:shadow-xl shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-2">Mensual</h3>
            <p className="text-muted-foreground text-sm mb-6">Ideal para probar la herramienta de tu restaurante.</p>
            <div className="mb-6">
              <span className="text-5xl font-black text-foreground">$20</span>
              <span className="text-muted-foreground"> USD / mes</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-foreground/80">Pedidos Ilimitados en WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-foreground/80">Integración con menú de tu restaurante</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-foreground/80">Recepción en tiempo real (Chat directo a Cocina)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-foreground/80">Soporte básico por email</span>
              </li>
            </ul>

            <Link
              href="#registro"
              className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold text-center hover:bg-primary/5 transition-colors"
            >
              Comprar Mensual
            </Link>
          </div>

          {/* Lifetime Plan */}
          <div className="flex-1 bg-gradient-to-b from-primary to-blue-800 rounded-3xl p-8 flex flex-col hover:shadow-2xl hover:shadow-primary/40 transition-all transform md:-translate-y-4 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Mejor Valor
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Pago Único</h3>
            <p className="text-blue-100 text-sm mb-6">Un sistema propio, para siempre. Sin recurrencia.</p>
            <div className="mb-6">
              <span className="text-5xl font-black text-white">$480</span>
              <span className="text-blue-200"> USD de por vida</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-blue-50">Todas las funciones del plan mensual</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-blue-50">Cero cargos recurrentes, de por vida</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-blue-50 font-bold">Asistencia permanente incluida</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-blue-50">Prioridad en actualizaciones de IA</span>
              </li>
            </ul>

            <Link
              href="#registro"
              className="w-full py-4 rounded-xl bg-white text-primary font-bold text-center hover:bg-blue-50 hover:shadow-lg transition-all"
            >
              Obtener de por vida
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
