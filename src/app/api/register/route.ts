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

    // Save to database
    saveRegistration({
      restaurantName,
      ownerName,
      phone,
      email,
      menu,
    });

    return NextResponse.json(
      { success: true, message: "Registro completado con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor al guardar el registro." },
      { status: 500 }
    );
  }
}
