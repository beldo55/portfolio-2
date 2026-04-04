"use client";

import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 filter-sidebar">
              <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Projects</li>
                  <li data-filter=".filter-photography">Photography</li>
                  <li data-filter=".filter-design">Design</li>
                  <li data-filter=".filter-automotive">Automotive</li>
                  <li data-filter=".filter-nature">Nature</li>
                </ul>
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="col-lg-9">
              <div className="row gy-4 portfolio-container isotope-container" data-aos="fade-up" data-aos-delay="200">
                
                {/* Item 1: Photography */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-portrait-1.webp" className="img-fluid" alt="Capturing Moments" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Photography</span>
                        <h4>Capturing Moments</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-portrait-1.webp" className="glightbox" title="Capturing Moments"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2: Design */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-2.webp" className="img-fluid" alt="Woodcraft Design" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Web Design</span>
                        <h4>Woodcraft Design</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-2.webp" className="glightbox" title="Woodcraft Design"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3: Automotive */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-automotive">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-portrait-2.webp" className="img-fluid" alt="Classic Beauty" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Automotive</span>
                        <h4>Classic Beauty</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-portrait-2.webp" className="glightbox" title="Classic Beauty"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4: Nature (FIXED NESTING HERE) */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-nature">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-portrait-4.webp" className="img-fluid" alt="Natural Growth" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Nature</span>
                        <h4>Natural Growth</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-portrait-4.webp" className="glightbox" title="Natural Growth"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 5: Photography */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-5.webp" className="img-fluid" alt="Urban Stories" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Photography</span>
                        <h4>Urban Stories</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-5.webp" className="glightbox" title="Urban Stories"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 6: Design */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <Image width={400} height={400} src="/assets/img/portfolio/portfolio-6.webp" className="img-fluid" alt="Digital Experience" loading="lazy" />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Web Design</span>
                        <h4>Digital Experience</h4>
                        <div className="portfolio-links">
                          <a href="/assets/img/portfolio/portfolio-6.webp" className="glightbox" title="Digital Experience"><i className="bi bi-plus-lg"></i></a>
                          <a href="portfolio-details.html" title="More Details"><i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div> {/* End Portfolio Container */}
            </div> {/* End col-lg-9 */}
          </div> {/* End Row */}
        </div> {/* End Isotope Layout */}
      </div> {/* End Container */}
    </section>
  );
}