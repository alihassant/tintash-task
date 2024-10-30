import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LiveOpsCaseStudy from "@/components/LiveOpsCaseStudy";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <WhyUs />
      <Services />
      <LiveOpsCaseStudy />
      <Projects />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
