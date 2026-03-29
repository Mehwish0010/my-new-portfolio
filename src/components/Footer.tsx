"use client";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mehwish-fatima-816198217" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a1a1a] py-8 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-[11px] text-[#555] tracking-wider">
          &copy; 2025 Mehwish Fatima. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-wider text-[#555] hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
          <span className="h-3 w-px bg-[#333]" />
          <button className="text-[11px] uppercase tracking-wider text-[#555] hover:text-white transition-colors">
            Privacy Policy
          </button>
          <button className="text-[11px] uppercase tracking-wider text-[#555] hover:text-white transition-colors">
            Terms of Service
          </button>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="text-[11px] uppercase tracking-wider text-[#555] hover:text-accent transition-colors flex items-center gap-2"
        >
          <span>Back to top</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M6 2L6 10M6 10L2 6M6 10L10 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Floating CTA */}
      <a
        href="mailto:mehwishsheikh0010sheikh@gmail.com"
        className="fixed bottom-6 right-6 z-50 bg-accent text-black text-[11px] font-bold uppercase tracking-wider rounded-full px-5 py-3 hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/20"
      >
        Let&apos;s Talk
      </a>
    </footer>
  );
}
