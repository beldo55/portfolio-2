"use client";

import { useState } from "react";
import { sendEmail } from "../actions";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = await sendEmail(data);
    setLoading(false);
    if (result.success === true) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input name="name" className="form-control" required />
        <label>Full name</label>
      </div>

      <div className="form-floating mb-3">
        <input name="email" type="email" className="form-control" required />
        <label>Email</label>
      </div>

      <div className="form-floating mb-3">
        <input name="phone" className="form-control" required />
        <label>Phone</label>
      </div>
       <div className="form-floating mb-3">
        <input name="subject" className="form-control" required />
        <label>Subject</label>
      </div>

      <div className="form-floating mb-3">
        <textarea name="message" className="form-control" style={{ height: "10rem" }} required />
        <label>Message</label>
      </div>

      <button className="btn btn-primary w-100" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
