import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Manoharan Dental Care <appointments@resend.dev>",
      to: ["rakeshrevathi2006@gmail.com"],
      subject: `New Appointment Booking: ${formData.name} - ${formData.preferredDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; margin-bottom: 20px; text-align: center;">🦷 New Appointment Booking</h2>
            <h3 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Manoharan Dental Care</h3>
            
            <div style="margin: 20px 0;">
              <h4 style="color: #1f2937; margin-bottom: 15px;">👤 Patient Details:</h4>
              <ul style="list-style: none; padding: 0; background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
                <li style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</li>
                <li style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone}</li>
                <li style="margin: 8px 0;"><strong>Email:</strong> ${formData.email || "Not provided"}</li>
              </ul>
            </div>
            
            <div style="margin: 20px 0;">
              <h4 style="color: #1f2937; margin-bottom: 15px;">📅 Appointment Details:</h4>
              <ul style="list-style: none; padding: 0; background-color: #eff6ff; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                <li style="margin: 8px 0;"><strong>Service:</strong> ${formData.service}</li>
                <li style="margin: 8px 0;"><strong>Preferred Date:</strong> ${formData.preferredDate}</li>
                <li style="margin: 8px 0;"><strong>Preferred Time:</strong> ${formData.preferredTime}</li>
              </ul>
            </div>
            
            ${
              formData.message
                ? `
            <div style="margin: 20px 0;">
              <h4 style="color: #1f2937; margin-bottom: 15px;">💬 Additional Notes:</h4>
              <div style="background-color: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
                ${formData.message}
              </div>
            </div>
            `
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background-color: #ecfdf5; border-radius: 6px; text-align: center; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46; font-weight: 600;">⚡ Action Required: Please confirm this appointment with the patient</p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
              <p>This email was sent automatically from your dental clinic website.</p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send appointment email",
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({
      success: true,
      message: "Appointment details sent successfully to the clinic!",
    })
  } catch (error) {
    console.error("Error sending appointment email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send appointment details",
      },
      { status: 500 },
    )
  }
}
