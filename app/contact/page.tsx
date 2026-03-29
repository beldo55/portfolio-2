import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
   loading: () => <p>Loading form...</p>,
});

export default function ContactPage() {
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          
          <div className="text-center mb-5">
            <div
              className="feature text-white rounded-3 mb-3 mx-auto"
              style={{
                height: "3.5rem",
                width: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                  "linear-gradient(135deg, #e616fd 0%, #224abe 100%)",
                fontSize: "1.5rem",
              }}
            >
              <i className="bi bi-envelope"></i>
            </div>

            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              Lets work together!
            </p>
          </div>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <ContactForm /> {/* ONLY this is client */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}