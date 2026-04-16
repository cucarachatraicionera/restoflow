import { NextRequest, NextResponse } from "next/server";
import { saveRegistration } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { restaurantName, ownerName, phone, email, menu } = body;

    // Validate inputs
    if (!restaurantName || !ownerName || !phone || !email || !menu) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Save to database (will fail on Vercel due to read-only filesystem, but works locally)
    try {
      saveRegistration({
        restaurantName,
        ownerName,
        phone,
        email,
        menu,
      });
    } catch (dbErr: any) {
      console.warn("No se pudo guardar localmente en SQLite (Vercel Serverless). Saltando esto para proceder con WhatsApp:", dbErr?.message);
    }

    return NextResponse.json(
      { success: true, message: "Registro completado con éxito" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error en el servidor: " + error?.message + "\nStack: " + error?.stack },
      { status: 500 }
    );
  }
}
