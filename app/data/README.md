# Contributing

## Content changes

All website content lives in one file: **`app/data/portfolio.ts`**.

Edit that file to update anything that appears on the page — no other files need to change for content updates.

### What you can edit

| Export              | What it controls                                                                 |
| ------------------- | -------------------------------------------------------------------------------- |
| `person`            | Name, title, bio, credentials, sidebar status                                    |
| `nav`               | Sidebar navigation links                                                         |
| `research`          | Research agenda paragraph and the three pillars                                  |
| `publications`      | Publication list (year, kind, title, optional link, venue, abstract)             |
| `teachingStatement` | Teaching section paragraph                                                       |
| `courses`           | Course list entries (title, optional link, institution, term, year, description) |
| `cvUrl`             | Link behind the "View →" CV button                                               |
| `references`        | Reference entries                                                                |
| `contact`           | Email and SSRN link                                                              |

### Adding links inside text (RichText)

Fields typed as `RichText` — `person.bio`, `research.agenda`, `teachingStatement`, and each publication's `abstract` — support embedded hyperlinks.

Use a plain string when there are no links:

```ts
bio: "Plain text with no links." as RichText,
```

Switch to an array when you need to link a word or phrase mid-sentence:

```ts
bio: [
  "I have argued ",
  { text: "here", href: "https://example.com/paper" },
  " that this matters.",
] as RichText,
```

You can also use `\n` anywhere in a string segment to insert a line break.

### Linking a publication title

Add an optional `href` field to any publication entry:

```ts
{
  year: "2025",
  kind: "Article",
  title: "My Paper Title",
  href: "https://example.com/paper",   // ← makes the title a clickable link
  venue: "Some Law Review",
  abstract: "...",
},
```

### Adding a course

All fields except `title` and `description` are optional:

```ts
{
  title: "Course Title",
  href: "https://example.com/syllabus",   // ← optional, makes the title a link
  institution: "Harvard Law School",      // ← optional
  term: "Spring",                         // ← optional
  year: "2025",                           // ← optional
  description: "Course description.",
},
```

## Styling / layout changes

To change visual styling or layout, edit:

- `app/routes/home.tsx` — section layout and structure
- `app/components/Sidebar.tsx` — sidebar
- `app/app.css` — color theme (`--color-*` variables) and global styles

## Making a commit

When you run `git commit`, the pre-commit hook runs automatically:

1. **ESLint** runs on all staged `.ts` and `.tsx` files and auto-fixes them (removes semicolons, etc.). If there are unfixable errors, the commit is blocked — fix them, re-stage, and try again.
2. **Prettier** runs on all staged `.md` files and formats them in place.

You do not need to run these manually — they fire on every commit.

**Note**: if you ever need to get around the pre-commit hook add the flag `--no-verify` to the end of your commit and it'll skip it.

```bash
git commit -m "example" --no-verify
```
