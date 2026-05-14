import { Logo } from './Logo';
import { ChevronDown } from './icons';

const NAV = [
  { label: 'HOME', active: true },
  { label: 'SERVICES', dropdown: true },
  { label: 'ALIGNMENTS', dropdown: true },
  { label: 'FITMENT', dropdown: true },
  { label: 'GALLERY' },
  { label: 'REVIEWS' },
  { label: 'ABOUT' },
  { label: 'CONTACT' },
];

export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container-pad flex items-center justify-between pt-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`relative nav-link flex items-center gap-1 ${
                item.active ? 'text-koi-500' : ''
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown />}
              {item.active && (
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-koi-500" />
              )}
            </a>
          ))}
        </nav>

        <a href="#book" className="btn-koi">
          Book Appointment
        </a>
      </div>
    </header>
  );
}
