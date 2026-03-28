import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HEADER */}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">

            {/* TEXT */}
            <div className="col-xxl-5">
              <div className="text-center text-xxl-start">

                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">Full Stack Developer </div>
                </div>

                <div className="fs-3 fw-light text-muted">
                  I build modern web applications
                </div>

                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Turning ideas into real digital products
                  </span>
                </h1>

                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link href="/projects" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">
                    View Projects
                  </Link>
                  <Link href="/resume" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">
                    My Resume
                  </Link>
                </div>

              </div>
            </div>

            {/* IMAGE */}
            <div className="col-xxl-7">
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <Image 
                    className="profile-img" 
                    src="/assets/profile-7.png" 
                    alt="Josiah Likita" 
                    width={400} 
                    height={400} 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">

              <div className="text-center my-5">

                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>

                <p className="lead fw-light mb-4">
                  I am a Full Stack Developer with a background in Mechanical Engineering.
                </p>

                <p className="text-muted">
                  I specialize in building modern web applications using technologies like 
                  React, Next.js, Node.js, PostgreSql and MongoDB. I also explore Web3 development using 
                  Solidity and blockchain tools.
                  <br /><br />
                  I have hands-on experience developing real-world projects including a 
                  learning platform and a real-time chat application. 
                  My focus is on writing clean, scalable code and solving real problems with technology.
                </p>

                {/* SOCIAL LINKS */}
                <div className="d-flex justify-content-center fs-2 gap-4 mt-4">
                  <a className="text-gradient" href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                  <a className="text-gradient" href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient" href="#" target="_blank">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}