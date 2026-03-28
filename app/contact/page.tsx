"use client"; // Add this if you plan to add form handling logic later

export default function ContactPage() {
    return (
        <section className="py-5">
            <div className="container px-5">
                <div className="bg-light  rounded-4 py-5 px-4 px-md-5">
                    <div className="text-center mb-5" >
                        <div 
                            className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3 mx-auto"
                            style={{ 
  height: '3.5rem', 
  width: '3.5rem', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  background: '#4e73df', // Added quotes and comma
  backgroundImage: 'linear-gradient(135deg, #e616fd 0%, #224abe 100%)', // Changed name and added quotes
  fontSize: '1.5rem' 
}}>
                            <i className="bi bi-envelope"></i>
                        </div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">Lets work together!</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <form id="contactForm">
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." required />
                                    <label htmlFor="name">Full name</label>
                                </div>
                                
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" required />
                                    <label htmlFor="email">Email address</label>
                                </div>
                                
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required />
                                    <label htmlFor="phone">Phone number</label>
                                </div>
                                
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea 
                                        className="form-control" 
                                        id="message" 
                                        placeholder="Enter your message here..." 
                                        style={{ height: "10rem" }} // FIXED: Must be an object with double braces
                                        required
                                    ></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>

                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}