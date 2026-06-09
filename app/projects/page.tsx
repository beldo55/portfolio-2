import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { 
    id: 1, 
    title: 'Tech Academy (Learning Platform)', 
    description: 'A full-stack learning platform where users can search and apply for courses. Built with Next.js, Redux Toolkit, and Node.js backend. Features include authentication, course filtering, and a scalable API structure.', 
    tech: ['Next.js', 'Redux Toolkit', 'Node.js', 'Express', 'PostgreSQL'],
    img: '/assets/tech-academy.png',
    link: 'https://tech-academy-front-end.vercel.app/',
    backendLink: 'https://tech-academy-ten.vercel.app/swagger'
  },
  {
    id: 2,
    title: 'Apex Zenith (ASP.NET Core)',
    description: 'A business/agency website with a full content-management admin panel — manage services, team, testimonials, clients, and news from one dashboard. Built on ASP.NET Core MVC with Entity Framework Core and SQL Server, secured with role-based authentication via ASP.NET Identity, and deployed on Render via Docker.',
    tech: ['ASP.NET Core', 'C#', 'EF Core', 'SQL Server', 'Bootstrap'],
    img: '/assets/apex.png',
    link: 'https://apexzenith.onrender.com'

  },
{
  id: 3,
  title: 'Inventory Management System (ASP.NET Core)',
  description: 'A backend API for inventory and sales management built with ASP.NET Core (.NET 8) in a clean, layered architecture (API, Application, Core, Infrastructure). Handles products and categories, multi-warehouse stock tracking with audited stock movements, purchases and suppliers, customer sales with transactional, all-or-nothing stock deduction, payments, low-stock email alerts, and a financial dashboard. Secured with JWT and ASP.NET Identity — role-based authorization plus email OTP two-factor authentication. Data access via EF Core on PostgreSQL, containerized with a multi-stage Docker build and deployed on Render.',
  tech: ['ASP.NET Core', 'C#', 'EF Core', 'PostgreSQL', 'JWT', 'Docker'],
  img: '/assets/api.png',
  link: 'https://ibtechaplication-api.onrender.com/swagger/index.html'
}

];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
            <p className="text-muted mt-3">
              Here are some of the projects I have built, focusing on full-stack development, real-world problem solving, and modern technologies.
            </p>
          </div>

          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">

              {projects.map((project) => (
                <div key={project.id} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex flex-column flex-lg-row align-items-center">

                      {/* TEXT */}
                      <div className="p-5">
                        <h2 className="fw-bolder">{project.title}</h2>
                        <p className="mb-3">{project.description}</p>

                        {/* TECH STACK */}
                        <div className="mb-3">
                          {project.tech.map((tech, index) => (
                            <span key={index} className="badge bg-primary me-2 mb-2">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* LINKS */}
                        <div>
                          <Link href={project.link} className="btn btn-primary btn-sm me-2">
                            View Project
                          </Link>
                          {project.backendLink && (
                            <Link href={project.backendLink} className="btn btn-outline-dark btn-sm">
                              Swagger Docs
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* IMAGE */}
                      <Image 
                        className="img-fluid"
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={400}
                        style={{ objectFit: 'cover' }}
                        priority={project.id === 1}
                      />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let&apos;s build something together
            </h2>
            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="/contact">
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}