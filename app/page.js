"use client";

import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />

      <Testimonial />
    </div>
  );
}
