import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="testimonial-masonry">
          
          {/* Testimonial Item 1 */}
          <div className="testimonial-item" data-aos="fade-up">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-f-7.webp" 
                    alt="Rachel Bennett" 
                  />
                </div>
                <div className="client-details">
                  <h3>Rachel Bennett</h3>
                  <span className="position">Strategy Director</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="testimonial-item highlight" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Exceptional service delivery and innovative solutions have transformed our business operations.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-m-7.webp" 
                    alt="Daniel Morgan" 
                  />
                </div>
                <div className="client-details">
                  <h3>Daniel Morgan</h3>
                  <span className="position">Chief Innovation Officer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 3 */}
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Strategic partnership has enabled seamless digital transformation and operational excellence.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-f-8.webp" 
                    alt="Emma Thompson" 
                  />
                </div>
                <div className="client-details">
                  <h3>Emma Thompson</h3>
                  <span className="position">Digital Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 4 */}
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Professional expertise and dedication have significantly improved our project delivery timelines.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-m-8.webp" 
                    alt="Christopher Lee" 
                  />
                </div>
                <div className="client-details">
                  <h3>Christopher Lee</h3>
                  <span className="position">Technical Director</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 5 */}
          <div className="testimonial-item highlight" data-aos="fade-up" data-aos-delay="400">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Collaborative approach and industry expertise have revolutionized our product development cycle.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-f-9.webp" 
                    alt="Olivia Carter" 
                  />
                </div>
                <div className="client-details">
                  <h3>Olivia Carter</h3>
                  <span className="position">Product Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Item 6 */}
          <div className="testimonial-item" data-aos="fade-up" data-aos-delay="500">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>Innovative approach to user experience design has significantly enhanced our platform&#39;s engagement metrics.</p>
              <div className="client-info">
                <div className="client-image">
                  <Image 
                    width={200} 
                    height={200} 
                    src="/assets/img/person/person-m-13.webp" 
                    alt="Nathan Brooks" 
                  />
                </div>
                <div className="client-details">
                  <h3>Nathan Brooks</h3>
                  <span className="position">UX Director</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}