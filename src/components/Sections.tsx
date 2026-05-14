import { FaGoogle, FaYelp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import {
  PinIcon,
  GaugeIcon,
  TireIcon,
  CoiloverIcon,
  WheelIcon,
  CarIcon,
  ArrowRight,
  PlayIcon,
  StarIcon,
  PhoneIcon,
  ClockIcon,
  QuoteIcon,
  CarFrontIcon,
  FitmentIcon,
  QualityIcon,
  EnthusiastIcon,
} from './icons';
import { Logo } from './Logo';

const HERO_CAR = '/images/hero-civic-white.png';

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden hero-grad">
      <div
        className="absolute inset-y-0 right-[-5%] w-[68%] bg-no-repeat bg-cover bg-center opacity-95"
        style={{
          backgroundImage: `url('${HERO_CAR}')`,
          maskImage:
            'linear-gradient(90deg, transparent 0%, #000 18%, #000 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, #000 18%, #000 100%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/95 via-black/60 to-transparent" aria-hidden />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" aria-hidden />

      <div className="container-pad relative z-10">
        <h1 className="font-display text-white text-[64px] md:text-[80px] leading-[0.95] tracking-wide max-w-[760px]">
          PRECISION ALIGNMENT.
          <br />
          PERFORMANCE FITMENT.
          <br />
          <span className="text-electric-400">BUILT FOR NJ.</span>
        </h1>

        <p className="mt-6 max-w-[460px] text-white/65 text-[14px] leading-relaxed">
          Koiwerks is Linden, NJ&apos;s destination for tires, alignments,
          coilovers, fender rolling, wheel fitment, suspension work, and
          maintenance for drivers who care how their car looks, feels, and
          performs.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#book" className="btn-koi">
            Book Alignment / Service
          </a>
          <a href="#work" className="btn-ghost">
            <PlayIcon /> View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

const STRIP = [
  { Icon: PinIcon, label: 'LINDEN, NJ', sub: 'Local Shop' },
  { Icon: GaugeIcon, label: 'PERFORMANCE', sub: 'Alignments' },
  { Icon: TireIcon, label: 'TIRES', sub: 'Mounting & Balancing' },
  { Icon: CoiloverIcon, label: 'COILOVERS', sub: 'Installs & Setup' },
  { Icon: WheelIcon, label: 'FITMENT', sub: 'Dialed In' },
  { Icon: CarIcon, label: 'MODIFIED CAR', sub: 'Friendly' },
];

export function FeatureStrip() {
  return (
    <section className="border-y border-white/5 bg-ink-900/85 backdrop-blur-sm">
      <div className="container-pad grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/5">
        {STRIP.map(({ Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 px-5 py-5 first:pl-0">
            <Icon className="w-6 h-6 text-koi-500" />
            <div className="leading-tight">
              <div className="text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                {label}
              </div>
              <div className="text-[11px] text-white/55">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    img: '/images/svc-alignment.png',
    title: 'Performance Alignments',
    body: 'Street, lowered, stance or track. Precision alignment for the way you drive.',
  },
  {
    img: '/images/svc-tires.png',
    title: 'Tires: Sales, Mounting & Balancing',
    body: 'New tires, replacement tires and performance tire mounting with care.',
  },
  {
    img: '/images/svc-coilover.png',
    title: 'Coilover Install & Setup',
    body: 'Professional install, ride height adjustment and alignment after install.',
  },
  {
    img: '/images/svc-fender.png',
    title: 'Fender Rolling & Fitment',
    body: 'Clear the rub. Perfect fitment for wider wheels and aggressive setups.',
  },
  {
    img: '/images/svc-suspension.png',
    title: 'Suspension & Steering Work',
    body: 'Control arms, camber arms, bushings and suspension diagnosis you can trust.',
  },
  {
    img: '/images/svc-maintenance.png',
    title: 'Maintenance & Repairs',
    body: 'Oil changes, brakes, TPMS, inspections and general maintenance.',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="section-title">What We Do</h2>
            <p className="text-white/60 text-sm mt-2">
              Specialized services for real drivers and real builds.
            </p>
          </div>
          <a
            href="#services"
            className="text-koi-500 text-[12px] font-semibold tracking-[0.18em] uppercase flex items-center gap-2"
          >
            View All Services <ArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="card-dark group overflow-hidden flex flex-col"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display text-[15px] tracking-wide uppercase text-white">
                  {s.title}
                </h3>
                <p className="text-[11.5px] text-white/55 mt-2 leading-relaxed flex-1">
                  {s.body}
                </p>
                <a
                  href="#"
                  className="mt-3 text-koi-500 text-[11px] font-semibold tracking-[0.16em] uppercase inline-flex items-center gap-1.5"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  {
    Icon: CarFrontIcon,
    title: 'Modified-Car Friendly',
    body: 'We understand builds.\nWe align them right.',
  },
  {
    Icon: FitmentIcon,
    title: 'Fitment Focused',
    body: 'From poke to tucked,\nwe dial it in.',
  },
  {
    Icon: QualityIcon,
    title: 'Quality Equipment',
    body: 'Hunter alignment\nsystem & top tools.',
  },
  {
    Icon: EnthusiastIcon,
    title: 'Real Enthusiasts\nReal Results',
    body: 'We build and drive\nwhat we work on.',
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-pad relative grid lg:grid-cols-[1fr_2fr] gap-10 py-16">
        <div>
          <h2 className="section-title leading-tight">
            Built For Cars
            <br />
            Regular Shops <span className="text-koi-500">Avoid.</span>
          </h2>
          <p className="text-white/60 text-sm mt-5 max-w-[360px] leading-relaxed">
            Most chain shops are built for factory-spec vehicles. Koiwerks is
            built for drivers running coilovers, aftermarket wheels, camber
            arms, performance tires, lowered suspension, and custom fitment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {WHY.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-ink-850/80 backdrop-blur border border-white/5 p-5 flex flex-col gap-3"
            >
              <Icon className="w-7 h-7 text-koi-500" />
              <h3 className="font-display text-[15px] tracking-wide uppercase text-white whitespace-pre-line leading-tight">
                {title}
              </h3>
              <p className="text-[11.5px] text-white/55 whitespace-pre-line leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PACKAGES = [
  {
    title: 'Daily Alignment',
    body: 'For stock or lightly modified daily drivers. Improved tire wear, handling and stability.',
    price: '$129',
    img: '/images/pkg-daily-bmw.png',
  },
  {
    title: 'Lowered Car Alignment',
    body: 'For coilovers, lowering springs, and adjustable suspension setups. Drive straight, stay safe.',
    price: '$169',
    img: '/images/pkg-lowered-blue.png',
  },
  {
    title: 'Fitment Alignment',
    body: 'Aggressive wheels, negative camber, fender work and custom setups dialed in.',
    price: '$199',
    img: '/images/pkg-civic-white.png',
  },
  {
    title: 'Performance Alignment',
    body: 'Track-inspired setups for maximum handling, turn-in and tire performance.',
    price: '$229',
    img: '/images/hero-civic-white.png',
  },
];

export function Packages() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="section-title">Alignment Packages</h2>
            <p className="text-white/60 text-sm mt-2">
              Choose the alignment that matches your build and driving style.
            </p>
          </div>
          <a
            href="#packages"
            className="text-koi-500 text-[12px] font-semibold tracking-[0.18em] uppercase flex items-center gap-2"
          >
            View All Packages <ArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PACKAGES.map((p) => (
            <article key={p.title} className="card-dark overflow-hidden flex flex-col">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${p.img}')` }}
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-[16px] tracking-wide uppercase text-white">
                  {p.title}
                </h3>
                <p className="text-[12px] text-white/55 mt-2 leading-relaxed flex-1">
                  {p.body}
                </p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Starting at{' '}
                  <span className="text-koi-500 font-bold tracking-normal text-[14px]">
                    {p.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  '/images/pkg-daily-bmw.png',
  '/images/pkg-civic-white.png',
  '/images/svc-tires.png',
  '/images/svc-fender.png',
  '/images/hero-civic-white.png',
  '/images/pkg-lowered-blue.png',
];

export function Gallery() {
  return (
    <section className="pb-20">
      <div className="container-pad">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="section-title">
              Built. Aligned. <span className="text-koi-500">Dialed In..</span>
            </h2>
            <p className="text-white/60 text-sm mt-2">
              Real cars. Real results. Follow the build @koiwerks
            </p>
          </div>
          <a
            href="#gallery"
            className="text-koi-500 text-[12px] font-semibold tracking-[0.18em] uppercase flex items-center gap-2"
          >
            View Full Gallery <ArrowRight />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {GALLERY.map((src, i) => (
            <a
              key={i}
              href="#"
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: 'Chris V.',
    body: 'Took my lowered car here for an alignment after other shops said they couldn’t help. Koiwerks not only did it, they did it perfectly. Car drives amazing now. Highly recommend!!',
  },
  {
    name: 'Mike R.',
    body: 'Best shop in NJ for fitment and alignment. Professional, dialed in and they genuinely care about your build. Won’t go anywhere else.',
  },
  {
    name: 'Eric D.',
    body: 'Needed fender rolling and an alignment. Amazing work and super clean shop. Definitely coming back.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="section-title">Trusted By Hundreds Of Drivers</h2>
            <p className="text-white/60 text-sm mt-2">
              See what our customers are saying.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">4.9</span>
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-white/55 text-xs">300+ Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <a href="#" aria-label="Google" className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#4285F4]"><FaGoogle size={14} /></a>
              <a href="#" aria-label="Yelp" className="w-7 h-7 rounded-full bg-[#D32323] flex items-center justify-center text-white"><FaYelp size={14} /></a>
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center text-white"><FaFacebookF size={14} /></a>
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white"><FaInstagram size={14} /></a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <article key={r.name} className="card-dark p-6">
              <QuoteIcon className="w-6 h-6 text-koi-500/80 mb-3" />
              <p className="text-white/75 text-[13px] leading-relaxed">{r.body}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-white/85 text-[12px] font-semibold">— {r.name}</span>
                <div className="flex text-yellow-400 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr]">
        <div className="p-10 lg:p-12">
          <h2 className="section-title">Visit Us</h2>
          <ul className="mt-6 space-y-4 text-white/80 text-[14px]">
            <li className="flex gap-3">
              <PinIcon className="w-5 h-5 text-koi-500 mt-0.5" />
              <span>
                611 Pennsylvania Ave<br />
                Linden, NJ 07036
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="w-5 h-5 text-koi-500 mt-0.5" />
              <span>908-499-3321</span>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="w-5 h-5 text-koi-500 mt-0.5" />
              <span>
                Mon – Fri: 10AM – 6:30PM<br />
                Saturday: 8AM – 2PM<br />
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>

        <a
          href="https://maps.google.com/?q=611+Pennsylvania+Ave+Linden+NJ"
          target="_blank"
          rel="noreferrer"
          className="relative min-h-[260px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/map-linden.png')" }}
          aria-label="Open Koiwerks location in Google Maps"
        />

        <div className="relative p-10 lg:p-12 overflow-hidden">
          <div className="relative">
            <h2 className="section-title leading-tight">
              Ready To Get Your
              <br />
              Fitment <span className="text-koi-500">Dialed?</span>
            </h2>
            <p className="text-white/60 text-sm mt-4">
              Book your alignment, tire, or suspension service today.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="#book" className="btn-koi !py-3">Book Appointment</a>
              <a href="tel:9084993321" className="btn-ghost !py-3">
                <PhoneIcon className="w-4 h-4" /> Call 908-499-3321
              </a>
            </div>
            <a href="#ig" className="btn-ghost mt-2 !py-3">
              <FaInstagram /> DM Us On Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5">
      <div className="container-pad py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-10">
        <div>
          <Logo small />
          <p className="text-white/45 text-[12px] mt-4 leading-relaxed">
            Precision Alignment. Performance Fitment.<br />
            Built for NJ&apos;s Modified Cars.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[0.18em] uppercase mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-white/55 text-[13px]">
            <li>Services</li>
            <li>Alignments</li>
            <li>Fitment</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[0.18em] uppercase mb-4">
            &nbsp;
          </h4>
          <ul className="space-y-2 text-white/55 text-[13px]">
            <li>Reviews</li>
            <li>About</li>
            <li>Contact</li>
            <li>Book Appointment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[12px] font-semibold tracking-[0.18em] uppercase mb-4">
            Follow Us
          </h4>
          <div className="flex gap-3 mb-6">
            {[FaInstagram, FaFacebookF, FaTiktok, FaYoutube].map((Ico, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-ink-800 hover:bg-koi-500 transition-colors flex items-center justify-center text-white/80"
              >
                <Ico size={14} />
              </a>
            ))}
          </div>
          <h4 className="text-white text-[12px] font-semibold tracking-[0.18em] uppercase mb-3">
            Stay In The Loop
          </h4>
          <p className="text-white/45 text-[12px] mb-3">
            Get updates, builds and shop news.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-ink-800 border border-white/10 text-white text-[13px] px-3 py-2.5 placeholder:text-white/35 focus:outline-none focus:border-koi-500"
            />
            <button type="submit" className="btn-koi !py-2.5 !px-5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-pad py-4 text-white/35 text-[11px] flex justify-end">
          © 2026 Koiwerks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
