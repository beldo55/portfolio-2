export default function ProjectsPage() {
  return (
    <>
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>

        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">

            {/* EXPERIENCE */}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                <a className="btn btn-primary px-4 py-3" href="/resume.pdf">
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </a>
              </div>

              {/* FAAN Internship */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2022</div>
                        <div className="small fw-bolder">Mechanic Intern</div>
                        <div className="small text-muted">FAAN Automobile Workshop</div>
                        <div className="small text-muted">Nigeria</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Assisted in diagnosing and repairing vehicle faults, performed maintenance on engines and air conditioning systems, and worked alongside experienced mechanics to solve complex technical problems.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teaching */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2023</div>
                        <div className="small fw-bolder">Instructor</div>
                        <div className="small text-muted">Government Technical & Science College</div>
                        <div className="small text-muted">Nigeria</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Taught Mathematics and Automobile Mechanics, helping students understand technical concepts and apply problem-solving skills in practical scenarios.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Work */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2025 - Present</div>
                        <div className="small fw-bolder">Full Stack Developer</div>
                        <div className="small text-muted">Freelance</div>
                        <div className="small text-muted">Remote</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Building modern web applications using React, Next.js, Node.js, and Express. Focused on REST APIs, and backend systems.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>

              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2016 - 2023</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">Federal University of Technology, Minna</div>
                          <div className="small text-muted">Niger State</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">B.Eng</div>
                          <div className="small text-muted">Mechanical Engineering</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Developed strong analytical and problem-solving skills with a solid engineering foundation applicable to software development and system design.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2025</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">IBTECH</div>
                          <div className="small text-muted">Zaria, Kaduna</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Diploma</div>
                          <div className="small text-muted">Backend Development</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        Gained hands-on experience building APIs, working with databases, and developing backend systems using Node.js and Express.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">

                  {/* Professional Skills */}
                  <div className="mb-5">
                    <h3 className="fw-bolder mb-3 text-gradient">Professional Skills</h3>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col"><div className="bg-light p-3 rounded-4">Web Development</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">Backend Development</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">REST API Design</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">Problem Solving</div></div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="fw-bolder mb-3 text-gradient">Technologies</h3>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col"><div className="bg-light p-3 rounded-4">HTML</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">CSS</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">JavaScript</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">React / Next.js</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">Node.js / Express</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">MongoDB/PostgreSQL</div></div>
                      <div className="col"><div className="bg-light p-3 rounded-4">C# / ASP.NET</div></div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}