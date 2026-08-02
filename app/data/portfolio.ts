/** All editable content for the portfolio. Update this file to change what appears on the site. */

import type { Course, Publication, RichText } from "~/types/portfolio"

export const person = {
  name: "Leonard Alexander Walker III",
  title: "Esquire",
  subtitle: "Immigration & Racial Justice Law",
  /** Displayed at the bottom of the sidebar. Use \n for line breaks. */
  marketStatus: "On the entry-level\nteaching market, 2026–27\n\n云泥之差别不太大",
  bio: [
    "I am an Academic Fellow at Columbia Law School, having previously been a law clerk to a judge on the Second Circuit Court of Appeals, and before that ",
    { text: "Rappaport Fellow", href: "https://hls.harvard.edu/academics/fellowships-and-prizes/fellowships/rappaport-fellowship/current-rappaport-fellow/" },
    " and Lecturer on Law at Harvard Law School (2023-2024), where I taught \"Language and the Law: Beyond the Canons.\"\n\n",
    "Aside from my research, I've helped represent asylum seekers. I have also done policy work in the law and neuroscience space with the ",
    { text: "Center for Law, Brain & Behavior", href: "https://clbb.mgh.harvard.edu/" },
    " in conjunction with Massachusetts General Hospital as a Fellow in Law and Applied Neuroscience.\n\n",
    "I love teaching, having taught high school Spanish in Atlanta where I grew up and always having a blast learning with the folks at ",
    { text: "Harlem Clemente", href: "https://harlemclemente.org/" },
    ". In college, I studied Political Science, Economics, and Linguistics, focusing on the relationship between the ",
    { text: "Ainu", href: "(https://courier.unesco.org/en/articles/saga-ainu-language" },
    " language and Japanese. Unsurprisingly, I'm a language nerd (my current fixation is ʻŌlelo Hawaiʻi!)."
  ] as RichText,
  credentials: [
    "J.D., Harvard Law School · B.A., Columbia University",
    "Former clerk, United States Court of Appeals for the Second Circuit",
  ],
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "C.V.", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

export const research = {
  agenda: [
    "My research focuses on the implications language and linguistics have for the legal system and analysis of legal linguistic policy. For example, I have argued ", 
    { text: "here", href: "https://harvardlawreview.org/print/vol-136/dialectal-due-process/" }, 
    " that failures in the judicial system to account for dialectal differences in English are cognizable as due process issues. And ", 
    { text: "here", href: "https://www.californialawreview.org/print/black-english" }, 
    " I try to make guides for lawyers dealing with nonstandard English varieties in their practices."
  ],
  pillars: [
    { label: "Pillar I", title: "Language & Due Process" },
    { label: "Pillar II", title: "Legal Linguistics for Practitioners" },
    { label: "Pillar III", title: "Race, Language & the Criminal System" },
  ],
}

export const publications: Publication[] = [
  {
    year: "2026",
    kind: "Chapter",
    title: "Racial Administration: How Enforcement Discretion Sorts by Race",
    href: "https://www.cambridge.org/core/books/language-and-justice/evidence-and-assessing-verbatim-transcription-quality-of-black-english-and-standard-american-english/ECE100949B1E8BD3AB3234F2240696F3",
    venue: "LANGUAGE AND JUSTICE (Tatiana Grieshofer & Kate Haworth eds., Cambridge University Press, 2026)",
    abstract:
      "The chapter finds that both human and AI transcription services make significantly more, and more legally consequential, errors when transcribing Black English than Standard American English, raising serious concerns about fairness in the U.S. criminal justice system and calling for reforms to improve transcription accuracy.",
  },
  {
    year: "2025",
    kind: "Article",
    title: "Black English for Lawyers: A Primer",
    href: "https://www.californialawreview.org/print/black-english",
    venue: "113 CALIF. L. REV. 81 (2025)",
    abstract:
      "The article argues that lawyers need a much stronger understanding of Black English because misinterpreting its sounds, grammar, vocabulary, and social context can lead to wrongful legal outcomes, and it provides a practical guide with real-world examples to help legal practitioners interpret it accurately. More broadly, it contends that language is complex and context-dependent, so relying on dictionaries or generalized definitions is insufficient if the legal system is to reach just decisions.",
  },
  {
    year: "2023",
    kind: "Blog Essay",
    title: "On Taboos, Morality, and Bluebook Citations",
    href: "https://harvardlawreview.org/blog/2023/06/on-taboos-morality-and-bluebook-citations/",
    venue: "HARV. L. REV. BLOG (Jun. 2023)",
    abstract:
      "The essay argues that the The Bluebook: A Uniform System of Citation is not a morally neutral style guide because citation rules shape how the legal profession acknowledges and remembers marginalized people, particularly those affected by slavery.",
  },
  {
    year: "2023",
    kind: "Note",
    title: "Dialectal Due Process",
    href: "https://harvardlawreview.org/print/vol-136/dialectal-due-process/",
    venue: "136 HARV. L. REV. 1958 (2023)",
    abstract:
      "The article argues that the Constitution’s guarantee of due process requires courts and law enforcement to adopt procedures that prevent the misinterpretation of English dialects, particularly Black English, because linguistic misunderstandings can unfairly affect legal outcomes and undermine a person's right to a meaningful hearing.",
  },
  {
    year: "2022",
    kind: "Issue",
    href: "https://harvardlawreview.org/print/vol-135/same-surname-case/",
    title: "Same Surname Case: Japanese Supreme Court Holds That Forcing Couples to Share a Surname is Constitutional",
    venue: "135 HARV. L. REV. 1504 (2022)",
    abstract:
      "The article argues that the Japanese Supreme Court’s decision upholding the requirement that married couples share a surname reflects an overly deferential approach to judicial review that fails to adequately protect constitutional rights such as individual dignity, equality, and freedom of expression.",
  },
]

export const teachingStatement: RichText =
  "Teaching has always been central to who I am. I've taught high school Spanish in Atlanta, led reading groups at Harlem Clemente, and lectured on law at Harvard. In my classroom, I try to push students to critically think about language, law, and society, and to understand and challenge how these all intersect."

export const courses: Course[] = [
  {
    title: "Language and the Law: Beyond the Canons",
    institution: "Harvard Law School",
    term: "Spring",
    year: "2024",
    description: "This reading group explores how linguistics intersects with the law by introducing core linguistic concepts and examining legal issues such as statutory interpretation, linguistic due process, and hate speech. Through interdisciplinary materials, students develop an understanding of how language shapes legal reasoning and engage with competing linguistic and legal theories.",
  },
]

/** Link to the CV PDF. Replace "#" with an actual URL or path. */
export const cvUrl = "https://www.dropbox.com/scl/fi/qg1katq84i6o8qw42ss35/Alex-Walker-Academic-CV.pdf?rlkey=9mgrk99t2fil4j57umm9ww0oz&e=2&dl=0"

export const contact = {
  email: "leonardalexanderwalkeriii@gmail.com",
  /** Replace "#" with actual profile URLs */
  ssrn: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6038206",
}
