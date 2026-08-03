/** All editable content for the portfolio. Update this file to change what appears on the site. */

import type { Course, Publication, RichText } from "~/types/portfolio"

export const person = {
  name: "Leonard Alexander Walker III",
  title: "NYC Lawyer",
  subtitle: "Fellow interested in Interpretation and Legal Structure",
  /** Displayed at the bottom of the sidebar. Use \n for line breaks. */
  marketStatus: "On the entry-level\nteaching market, 2026–27\n\n云泥之差别不太大",
  bio: [
    "I am an Academic Fellow at Columbia Law School, having previously been a law clerk to a judge on the Second Circuit Court of Appeals, and before that ",
    { text: "Rappaport Fellow", href: "https://hls.harvard.edu/academics/fellowships-and-prizes/fellowships/rappaport-fellowship/current-rappaport-fellow/" },
    " and Lecturer on Law at Harvard Law School (2023-2024), where I taught \"Language and the Law: Beyond the Canons.\"\n\n",
    "Aside from my research, I've helped represent asylum seekers and those facing immigration detention. I have also done policy work in the law and neuroscience space with the ",
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
    "I write about interpretation and legal structure. I am interested in both internal and external legal interpretation. External interpretation relates to how the legal system interprets and misinterprets people on the outside, like speakers of nonstandard varieties of English. For example, I have argued ", 
    { text: "here", href: "https://harvardlawreview.org/print/vol-136/dialectal-due-process/" }, 
    " that failures in the judicial system to account for dialectal differences in English are cognizable as due process issues. And ", 
    { text: "here", href: "https://www.californialawreview.org/print/black-english" }, 
    " I made a guide and described best practices for lawyers dealing with nonstandard English varieties in their practices. When it comes to internal legal interpretation, I am drawn to issues that consider the role of normativity, intent, common law, and the relationship between the past and present as interpretive authority. I take a broad, somewhat philological view of interpretation, and apply it to literal texts and systems."
  ],
  pillars: [
    { label: "Pillar I", title: "Internal Legal Interpretation" },
    { label: "Pillar II", title: "External Legal Interpretation" },
    { label: "Pillar III", title: "The Common Law-Public Law Connection" },
  ],
}

export const publications: Publication[] = [
  {
    year: "2026",
    kind: "Chapter",
    title: "Evidence & Assessing Verbatim Transcription Quality of Black English and Standard American English",
    href: "https://www.cambridge.org/core/books/language-and-justice/evidence-and-assessing-verbatim-transcription-quality-of-black-english-and-standard-american-english/ECE100949B1E8BD3AB3234F2240696F3",
    venue: "LANGUAGE AND JUSTICE (Tatiana Grieshofer & Kate Haworth eds., Cambridge University Press, 2026)",
    abstract:
      "This chapter shows that private transcription companies using both AI and human transcription make more errors of a legally significant character when transcribing Black English as opposed to Standard American English.",
  },
  {
    year: "2025",
    kind: "Article",
    title: "Black English for Lawyers: A Primer",
    href: "https://www.californialawreview.org/print/black-english",
    venue: "113 CALIF. L. REV. 81 (2025)",
    abstract:
      "This article catalogues features of Black English lawyers should know and considers the role fo the legal profession when it comes to linguistic diversity.",
  },
  {
    year: "2023",
    kind: "Note",
    title: "Dialectal Due Process",
    href: "https://harvardlawreview.org/print/vol-136/dialectal-due-process/",
    venue: "136 HARV. L. REV. 1958 (2023)",
    abstract:
      "This piece argues that due process requires linguistic awareness of different varieties of English because they predictably lead to misunderstanding and legally incorrect outcomes.",
  },
  {
    year: "2022",
    kind: "Issue",
    href: "https://harvardlawreview.org/print/vol-135/same-surname-case/",
    title: "Same Surname Case: Japanese Supreme Court Holds That Forcing Couples to Share a Surname is Constitutional",
    venue: "135 HARV. L. REV. 1504 (2022)",
    abstract:
      "This piece explores the deferential approach of the Japanese Supreme Court's judicial review in the context of gender equality and free expression.",
  },
]

export const teachingStatement: RichText =
  "The law school courses I have taught are below!"

export const courses: Course[] = [
  {
  title: "LL.M. Legal Research & Writing",
    institution: "Columbia Law School",
    term: "Fall",
    year: "2025 & 2026",
    description: "In this course, students learn how to read and analyze U.S. case law and how to understand case law within the federalist, common-law system. Students also learn effective legal research techniques and writing skills, including common U.S. citation requirements.",
  },
  {
    title: "Language and the Law: Beyond the Canons",
    institution: "Harvard Law School",
    term: "Spring",
    year: "2024",
    description: "This reading group explored the academic literature in linguistics' various subfields and considered how they applied to various legal doctrinal areas, from hate speech to language rights to statutory and constitutional interpretation.",
  },
]

/** Link to the CV PDF. Replace "#" with an actual URL or path. */
export const cvUrl = "https://www.dropbox.com/scl/fi/qg1katq84i6o8qw42ss35/Alex-Walker-Academic-CV.pdf?rlkey=9mgrk99t2fil4j57umm9ww0oz&e=2&dl=0"

export const contact = {
  email: "leonardalexanderwalkeriii@gmail.com",
  /** Replace "#" with actual profile URLs */
  ssrn: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6038206",
}
