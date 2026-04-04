import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
// import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    
   
  <main className="main">
    <Hero />
    <About />
    <Stats />
    <Skills/>
    <Resume />
    <Portfolio />

    
    <Services/>
    <Testimonials />
    <Contact /> 

  </main>
    
    

  );
}
