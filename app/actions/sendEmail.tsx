// app/actions/sendEmail.tsx
"use server";
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type ContactPayload = {
  name?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: ContactPayload) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER, // sender address
      to: process.env.SMTP_RECIEVER, // list of recipients
      replyTo: data.email,
      subject: data.subject, // subject line
      text: data.message, // plain text body
      html: `
                  <b>${data.email} wants to contact you</b>
                  <br/>
                  <b>${data.subject}</b>

                  <p>${data.message}</p>
    `, // HTML body
    });

    return { success: true };
  } catch (err) {
    console.error("Error while sending mail:", err);
    return { success: false, error: String(err) };
  }
}
