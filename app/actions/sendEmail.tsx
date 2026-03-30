// app/actions/sendEmail.js
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendEmail(data:any) {

    try {
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER, // sender address
    to: process.env.SMTP_RECIEVER, // list of recipients
    subject: data.subject, // subject line
    text: data.message, // plain text body
    html: `
                  <b>${data.email} wants to contact you</b>
                  <br/>
                  <b>${data.subject}</b>
                  
                  <p>${data.message}</p>
    
    
    `, // HTML body
  });

//   console.log("Message sent: %s", info.messageId);
//   // Preview URL is only available when using an Ethereal test account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
    return { success: false, error: err };

}
  // Example logic
  console.log("Sending email:", data);

  // You can use nodemailer or any backend logic here
  return { success: true };
}