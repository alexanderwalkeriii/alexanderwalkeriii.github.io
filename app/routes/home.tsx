import { Fragment } from "react"
import headshotUrl from "~/assets/images/Headshot.jpg"
import type { Route } from "./+types/home"
import { Sidebar } from "~/components/Sidebar"
import type { RichText } from "~/types/portfolio"
import {
  contact,
  courses,
  cvUrl,
  person,
  publications,
  research,
  teachingStatement,
} from "~/data/portfolio"

/** Splits a string on \n and returns alternating text fragments and <br /> elements. */
const splitLines = (text: string, key: string) =>
  text.split("\n").flatMap((line, j, arr) =>
    j < arr.length - 1
      ? [<Fragment key={`${key}-${j}`}>{line}</Fragment>, <br key={`${key}-${j}-br`} />]
      : [<Fragment key={`${key}-${j}`}>{line}</Fragment>]
  )

/** Renders a RichText value: turns link nodes into anchor tags and \n into <br />. */
const rt = (content: RichText) => {
  const segments = typeof content === "string" ? [content] : content
  return segments.flatMap((node, i) => {
    if (typeof node !== "string") {
      return [
        <a key={i} href={node.href} className="text-link hover:text-link-hover underline decoration-2 underline-offset-2">
          {node.text}
        </a>,
      ]
    }
    return splitLines(node, String(i))
  })
}

export const meta = (_: Route.MetaArgs) => [
  { title: `${person.name} — Portfolio` },
  {
    name: "description",
    content: `Academic portfolio of ${person.name}, ${person.title} in ${person.subtitle}.`,
  },
]

const Home = () => (
  <div className="flex flex-nowrap max-w-350 mx-auto font-serif text-ink bg-page">
    <Sidebar />

    <main className="flex-1 min-w-85">

      {/* ── HOME ── */}
      <section
        id="home"
        className="pt-24 px-16 pb-22 border-b border-border flex flex-wrap gap-14 items-start"
      >
        <div className="grow basis-95 min-w-70">
          <h1 className="text-[44px] font-medium leading-[1.15] m-0 mb-5">{person.name}</h1>
          <p className="font-sans text-[15px] text-ink-2 leading-[1.7] max-w-[70ch] mb-7">
            {rt(person.bio)}
          </p>
          <p className="font-sans text-[13px] text-ink-3 leading-[1.7] m-0">
            {person.credentials.map((line, i) => (
              <span key={i}>
                {line}
                {i < person.credentials.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <img
          src={headshotUrl}
          alt={`Portrait of ${person.name}`}
          className="shrink-0 w-55 h-65 object-cover object-top"
        />
      </section>

      {/* ── RESEARCH ── */}
      <section id="research" className="py-20 px-16 border-b border-border">
        <div className="flex gap-6 items-baseline mb-9">
          <span className="text-[15px] text-accent font-medium">01</span>
          <h2 className="text-[26px] font-medium m-0">Research Agenda</h2>
        </div>
        <p className="font-sans text-[15px] text-ink-2 leading-[1.75] max-w-[64ch] mb-12">
          {rt(research.agenda)}
        </p>
        <div
          className="grid gap-px bg-border border border-border"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {research.pillars.map((pillar) => (
            <div key={pillar.label} className="bg-page py-7 px-6">
              <div className="font-sans text-[12px] uppercase tracking-[0.06em] text-accent mb-2.5">
                {pillar.label}
              </div>
              <div className="text-[17px] leading-[1.4]">{pillar.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section id="publications" className="py-20 px-16 border-b border-border">
        <div className="flex gap-6 items-baseline mb-11">
          <span className="text-[15px] text-accent font-medium">02</span>
          <h2 className="text-[26px] font-medium m-0">Publications</h2>
        </div>
        <div>
          {publications.map((pub, i) => (
            <div
              key={i}
              className="flex gap-7 pb-9 mb-9 border-b border-border-soft"
            >
              <div className="shrink-0 basis-16 font-sans text-[14px] text-ink-3 pt-0.5">
                {pub.year}
              </div>
              <div className="grow">
                <div className="font-sans text-[11px] uppercase tracking-[0.06em] text-accent mb-2">
                  {pub.kind}
                </div>
                {pub.href ? (
                  <a
                    href={pub.href}
                    className="block text-[19px] leading-[1.4] mb-2 text-ink underline underline-offset-2 hover:text-accent"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <div className="text-[19px] leading-[1.4] mb-2">{pub.title}</div>
                )}
                <div className="font-sans text-[13px] text-ink-3 mb-2.5">{pub.venue}</div>
                <p className="font-sans text-[14px] text-ink-2 leading-[1.65] max-w-[62ch] m-0">
                  {rt(pub.abstract)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEACHING ── */}
      <section id="teaching" className="py-20 px-16 border-b border-border">
        <div className="flex gap-6 items-baseline mb-9">
          <span className="text-[15px] text-accent font-medium">03</span>
          <h2 className="text-[26px] font-medium m-0">Teaching</h2>
        </div>
        <p className="font-sans text-[15px] text-ink-2 leading-[1.75] max-w-[64ch] mb-10">
          {rt(teachingStatement)}
        </p>
        <div className="border-t border-border">
          {courses.map((course) => (
            <div key={course.title} className="py-8 border-b border-border">
              {course.href ? (
                <a
                  href={course.href}
                  className="block text-[17px] mb-1.5 text-ink underline underline-offset-2 hover:text-accent"
                >
                  {course.title}
                </a>
              ) : (
                <div className="text-[17px] mb-1.5">{course.title}</div>
              )}
              {(course.institution || course.term || course.year) && (
                <div className="font-sans text-[11px] uppercase tracking-[0.06em] text-ink-3 mb-4">
                  {[
                    course.institution,
                    [course.term, course.year].filter(Boolean).join(" "),
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
              )}
              <p className="font-sans text-[14px] text-ink-2 leading-[1.65] max-w-[64ch] m-0">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CV ── */}
      <section
        id="cv"
        className="py-20 px-16 border-b border-border flex items-center justify-between flex-wrap gap-6"
      >
        <div className="flex gap-6 items-baseline">
          <span className="text-[15px] text-accent font-medium">04</span>
          <h2 className="text-[26px] font-medium m-0">Curriculum Vitae</h2>
        </div>
        <a
          href={cvUrl}
          className="font-sans text-[13px] py-3 px-6 border border-ink text-ink tracking-[0.03em] hover:underline"
        >
          View →
        </a>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="pt-20 pb-30 px-16">
        <div className="flex gap-6 items-baseline mb-7">
          <span className="text-[15px] text-accent font-medium">06</span>
          <h2 className="text-[26px] font-medium m-0">Contact</h2>
        </div>
        <div className="font-sans text-[15px] leading-loose text-ink-2">
          <div>
            <a href={`mailto:${contact.email}`} className="text-accent hover:text-accent-dark">
              {contact.email}
            </a>
          </div>
          <div>
            <a href={contact.ssrn} className="text-accent hover:text-accent-dark">
              SSRN
            </a>
          </div>
        </div>
      </section>

    </main>
  </div>
)

export default Home
