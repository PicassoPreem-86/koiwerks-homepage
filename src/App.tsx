import { Header } from './components/Header';
import {
  Hero,
  FeatureStrip,
  WhatWeDo,
  WhyUs,
  Packages,
  Gallery,
  Testimonials,
  Visit,
  Footer,
} from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Header />
      <main>
        <Hero />
        <div className="koi-backdrop">
          <FeatureStrip />
          <WhatWeDo />
          <WhyUs />
          <Packages />
          <Gallery />
          <Testimonials />
          <Visit />
        </div>
      </main>
      <Footer />
    </div>
  );
}
