"use client";

export default function PayButton() {
  const handlePayment = async () => {
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "josiahlikita96@gmail.com",
          amount: 5000, // in kobo (₦50)
        }),
      });

      const data = await res.json();

      // Redirect to Paystack payment page
      window.location.href = data.authorization_url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}