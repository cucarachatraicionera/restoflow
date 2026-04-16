"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const restaurantName = formData.get("restaurantName") as string;
    const ownerName = formData.get("ownerName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const menu = formData.get("menu") as string;

    const data = { restaurantName, ownerName, phone, email, menu };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ocurrió un error al guardar el formulario.");
      }

      setStatus("success");
      e.currentTarget.reset();

      // Redirigir a WhatsApp
      const text = `🚀 *Nuevo Registro en RestoFlow* 🚀\n\n*Restaurante:* ${restaurantName}\n*Dueño:* ${ownerName}\n*Teléfono:* ${phone}\n*Email:* ${email}\n\n*Menú:*\n${menu}`;
      const whatsappUrl = `https://wa.me/3002667843?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registro" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empieza a automatizar hoy
            </h2>
            <p className="text-muted-foreground">
              Déjanos tus datos y el menú principal de tu restaurante. Te enviaremos a nuestro WhatsApp para terminar la configuración y activación.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">¡Redirigiendo a WhatsApp!</h3>
              <p className="text-green-700">
                Tus datos se guardaron correctamente. Completa tu solicitud enviando el mensaje en WhatsApp.
              </p>
              <button 
                onClick={() => setStatus("idle")} 
                className="mt-6 text-sm text-green-600 font-semibold hover:underline"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-foreground">
                    Nombre del Restaurante *
                  </label>
                  <input
                    id="restaurantName"
                    name="restaurantName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Ej. Burguer Master"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ownerName" className="block text-sm font-medium text-foreground">
                    Nombre del Dueño *
                  </label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Teléfono (WhatsApp) *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="+57 300 000 0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Correo Electrónico *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="menu" className="block text-sm font-medium text-foreground">
                  Menú del Restaurante * <span className="text-muted-foreground font-normal">(copia y pega tus productos principales con precios)</span>
                </label>
                <textarea
                  id="menu"
                  name="menu"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-y"
                  placeholder="Ej.&#10;1. Hamburguesa Clásica - $10&#10;2. Hot Dog Especial - $8&#10;..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-hover hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Enviar Información <Send className="w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
