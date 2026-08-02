/** A single node in a rich-text field: either a plain string or a linked phrase. */
export type TextNode = string | { text: string; href: string }

/**
 * A rich-text value. Use a plain string when there are no links.
 * Use an array of TextNodes when you need to embed links mid-sentence:
 *
 * @example
 * ["I have argued ", { text: "here", href: "https://..." }, " that…"]
 */
export type RichText = string | TextNode[]

export type Publication = {
  year: string
  kind: string
  title: string
  /** Optional URL linking the title to the published paper or preprint. */
  href?: string
  venue: string
  abstract: RichText
}

export type Course = {
  title: string
  /** Optional URL linking the course title to a syllabus, course page, etc. */
  href?: string
  description: string
  institution?: string
  term?: string
  year?: string
}

