export default function Header() {
  return (
    <header className="header dark-background d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="header-container d-flex flex-column align-items-start">
        <nav className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}