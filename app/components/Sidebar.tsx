import { nav, person } from "~/data/portfolio"

/** Fixed left sidebar with name, role, navigation, and market status. */
const Sidebar = () => (
  <aside className="shrink-0 basis-75 min-w-65 sticky top-0 self-start h-screen flex flex-col justify-between border-r border-border pt-16 pr-10 pb-10 pl-12">
    <div>
      <div className="font-serif text-[15px] tracking-[0.08em] uppercase text-accent mb-1.5">
        {person.name}
      </div>
      <div className="font-sans text-[13px] text-ink-3 leading-normal mb-10">
        {person.title}
        <br />
        {person.subtitle}
      </div>
      <nav className="flex flex-col gap-3.5">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-sans text-[13px] text-ink hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
    <div className="font-sans text-[11px] text-ink-4 tracking-[0.03em] whitespace-pre-line">
      {person.marketStatus}
    </div>
  </aside>
)

export { Sidebar }
