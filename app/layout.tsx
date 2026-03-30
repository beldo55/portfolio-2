import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PaystackBtn from './components/paystackbtn';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import BootstrapClient from './components/BootstrapClient';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal - Portfolio',
  description: 'Design, Development, and Marketing portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-100">
      <body className={`${jakarta.className} d-flex flex-column h-100`}>
        {/* This loads the JS for the menu toggle */}
        <BootstrapClient />
        
        <main className="flex-shrink-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              <Link className="navbar-brand" href="/">
                <span className="fw-bolder text-primary">Jo-Tech</span>
              </Link>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                  <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/resume">Resume</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          
          {children}
        </main>

        <footer className="bg-white py-4 mt-auto">
          <div className="container px-5">
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
              <div className="col-auto"><div className="small m-0">Copyright © Your Website 2026</div></div>
              <div className="col-auto">
                <Link className="small" href="#!">Privacy</Link>
                <span className="mx-1">·</span>
                <Link className="small" href="#!">Terms</Link>
                <span className="mx-1">·</span>
                <Link className="small" href="/contact">Contact</Link>
                {/* <PaystackBtn /> */}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}