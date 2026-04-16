import nodemailer from 'nodemailer';

// You would typically store these in .env
// For demonstration, we'll try to use env vars, or fallback to returning early if not configured
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export interface EmailParams {
  restaurantName: string;
  ownerName: string;
  phone: string;
  email: string;
  menu: string;
}

export async function sendRegistrationEmail(data: EmailParams) {
  if (!SMTP_USER || !SMTP_PASS) {
    console.log("No SMTP credentials configured. Simulating email send:", data);
    return true; // Return true for demo purposes to avoid breaking the form if no email is set
  }

  const mailOptions = {
    from: `"RestoFlow Notificaciones" <${SMTP_USER}>`,
    to: 'cucarachatraicionera@gmail.com',
    subject: `¡Nuevo Lead de RestoFlow! - ${data.restaurantName}`,
    text: `
      Nuevo registro en RestoFlow:
      
      Restaurante: ${data.restaurantName}
      Dueño: ${data.ownerName}
      Teléfono (WhatsApp): ${data.phone}
      Email: ${data.email}
      
      Menú:
      ${data.menu}
    `,
    html: `
      <h2>¡Nuevo lead para RestoFlow!</h2>
      <p>Un restaurante ha llenado el formulario de registro en la landing page.</p>
      
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Restaurante</td>
          <td>${data.restaurantName}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Nombre del Dueño</td>
          <td>${data.ownerName}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Teléfono</td>
          <td>${data.phone}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Email</td>
          <td>${data.email}</td>
        </tr>
      </table>
      
      <h3 style="margin-top: 20px;">Menú del Restaurante</h3>
      <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.menu}</div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // Even if email fails, we might still want to say success to the user if the DB save worked
    // But throwing allows the API to handle the error properly
    throw error;
  }
}
