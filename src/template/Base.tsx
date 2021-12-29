import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FAQ } from './FAQ';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Pricing } from './Pricing';
import { Testimonial } from './Testimonial';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Base };
