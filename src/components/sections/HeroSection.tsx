import Link from "next/link";
import { ArrowRight, Bot, ChefHat, MessageSquareText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-0 left-0 -m-32 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-8 border border-blue-100 shadow-sm animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Nueva versión disponible
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-6 animate-fade-in-up animation-delay-100">
          Automatiza los pedidos de tu restaurante con <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">IA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
          Toma de pedidos en WhatsApp, confirmación automática y envíos directos a cocina. Reduce errores, ahorra tiempo y atiende 24/7 sin esfuerzo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <Link
            href="#registro"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
          >
            Empezar Ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="https://wa.me/3002667843?text=Hola,%20quiero%20conocer%20RestoFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-foreground border border-border font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-all hover:shadow-md"
          >
            <MessageSquareText className="w-5 h-5 text-green-500" />
            Hablar por WhatsApp
          </Link>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-500">
          <div className="glass p-6 rounded-2xl flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Bot Inteligente</h3>
            <p className="text-sm text-muted-foreground">Habla de forma natural con tus clientes y toma el pedido.</p>
          </div>
          
          <div className="glass p-6 rounded-2xl flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Atención en WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Donde están tus clientes. Respuestas en milisegundos.</p>
          </div>
          
          <div className="glass p-6 rounded-2xl flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-4">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Directo a Cocina</h3>
            <p className="text-sm text-muted-foreground">El pedido llega listo a la cocina, sin intermediarios.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
