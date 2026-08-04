import { useState } from "react"
import { nav, person } from "~/data/portfolio"

/** Sticky top bar for mobile — hidden on md+ screens. Includes a full-screen nav drawer. */
const MobileHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 border-b border-border bg-page">
        <span className="font-serif text-[13px] tracking-[0.08em] uppercase text-accent">
          {person.name}
        </span>
        <button
          onClick={() => setOpen(true)}
          className="font-sans text-[13px] text-ink"
          aria-label="Open navigation"
        >
          Menu
        </button>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-page flex flex-col px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <span className="font-serif text-[13px] tracking-[0.08em] uppercase text-accent">
              {person.name}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="font-sans text-[13px] text-ink"
              aria-label="Close navigation"
            >
              Close
            </button>
          </div>
          <div className="font-sans text-[13px] text-ink-3 leading-normal mb-8">
            {person.title}
            <br />
            {person.subtitle}
          </div>
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[16px] text-ink hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto font-sans text-[11px] text-ink-4 tracking-[0.03em] whitespace-pre-line">
            {person.marketStatus}
          </div>
        </div>
      )}
    </>
  )
}

export { MobileHeader }
