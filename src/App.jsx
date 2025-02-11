import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
// import Inquiry from "./components/Inquiry";

const App = () => {
  return (
    <div>
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      {/* <Inquiry /> */}
      <Footer />
    </main>
    </div>
  );
};
export default Sentry.withProfiler(App);
