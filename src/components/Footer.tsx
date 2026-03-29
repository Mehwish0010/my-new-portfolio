"use client";

const socials = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehwish-fatima-816198217",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-28">
        {/* Top row: big text + back to top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-20">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Let&apos;s build something
            <br />
            <span className="text-accent">extraordinary.</span>
          </h3>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 border border-[#333] rounded-full px-8 py-4 text-sm uppercase tracking-widest text-[#888] hover:border-accent hover:text-accent transition-all duration-300"
          >
            Back to top
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path
                d="M6 10L6 2M6 2L2 6M6 2L10 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1a1a1a] mb-16" />

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand + copyright */}
          <div>
            <p className="text-sm font-bold tracking-widest text-white uppercase mb-4">
              Mehwish Fatima
            </p>
            <p className="text-xs text-[#555] leading-relaxed mb-6">
              Full-Stack Developer &amp; AI Engineer crafting intelligent digital experiences from Karachi, Pakistan.
            </p>
            <p className="text-xs text-[#444]">
              &copy; 2025 Creative Developer Portfolio.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-6">
              Quick Links
            </p>
            <div className="flex flex-col gap-4">
              {["Work", "About", "Services", "Process", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-[#666] hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 3: Socials */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555] mb-6">
              Socials
            </p>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#666] hover:text-accent transition-colors duration-200"
                >
                  <span className="text-[#555]">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button className="text-[11px] uppercase tracking-wider text-[#444] hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span className="h-3 w-px bg-[#333]" />
              <button className="text-[11px] uppercase tracking-wider text-[#444] hover:text-white transition-colors">
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <a
        href="mailto:mehwishsheikh0010sheikh@gmail.com"
        className="fixed bottom-8 right-10 z-50 bg-accent text-black text-sm font-bold uppercase tracking-wider rounded-full px-14 py-6 hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/20"
      >
        LET&apos;S TALK
      </a>
    </footer>
  );
}
