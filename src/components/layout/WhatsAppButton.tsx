"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/3002667843?text=Hola,%20quiero%20información%20sobre%20RestoFlow";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center group"
      aria-label="Hablar por WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-medium text-sm">
        Contactar ventas
      </span>
    </Link>
  );
}
