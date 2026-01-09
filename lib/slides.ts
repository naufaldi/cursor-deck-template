import { Slide } from "./types";

export const slides: Slide[] = [
  // ============================================================
  // SLIDE 1: Title Slide
  // The first slide typically introduces your presentation
  // ============================================================
  {
    id: 1,
    title: "Your Presentation Title",
    content: `Subtitle or Event Name

**Your Name**

Your Role or Organization`,
    type: "title",
  },

  // ============================================================
  // SLIDE 2: Content Slide with Bullets
  // Use for agenda, key points, or any list-based content
  // ============================================================
  {
    id: 2,
    title: "Agenda",
    content: `## What We'll Cover

- First topic or section
- Second topic or section  
- Third topic or section
- Fourth topic or section

**Pro tip:** Use bullet points for scannable content.`,
    type: "content",
  },

  // ============================================================
  // SLIDE 3: Content Slide with Table
  // Tables work great for comparisons, schedules, or structured data
  // ============================================================
  {
    id: 3,
    title: "Schedule or Comparison",
    content: `## Session Overview

| Time | Topic | Format |
|------|-------|--------|
| 0:00 - 0:15 | **Introduction** | Presentation |
| 0:15 - 0:45 | **Main Content** | Demo |
| 0:45 - 1:00 | **Q&A** | Discussion |

Tables support full GitHub Flavored Markdown.`,
    type: "content",
  },

  // ============================================================
  // SLIDE 4: Quote Slide
  // Use for impactful quotes, testimonials, or key insights
  // ============================================================
  {
    id: 4,
    title: "Key Insight",
    content: `## The Big Idea

> "This is a blockquote. Use it for memorable quotes, key insights, or to highlight important concepts that deserve special attention."
> 
> — Author Name, Source

Blockquotes stand out with the orange accent border.`,
    type: "quote",
  },

  // ============================================================
  // SLIDE 5: Code Slide
  // Perfect for technical presentations, tutorials, or demos
  // ============================================================
  {
    id: 5,
    title: "Code Example",
    content: `## Show Your Code

\`\`\`typescript
// Syntax highlighting works for many languages
interface Example {
  name: string;
  value: number;
}

function greet(example: Example): string {
  return \`Hello, \${example.name}!\`;
}
\`\`\`

Inline code like \`const x = 42\` also works in paragraphs.`,
    type: "code",
  },

  // ============================================================
  // SLIDE 6: Diagram Slide
  // Use for ASCII art, architecture diagrams, or visual layouts
  // ============================================================
  {
    id: 6,
    title: "Architecture Overview",
    content: `## System Diagram

\`\`\`
┌─────────────────────────────────────────────┐
│  Your Application                           │
├─────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Frontend │  │   API    │  │ Database │  │
│  └──────────┘  └──────────┘  └──────────┘  │
├─────────────────────────────────────────────┤
│  Infrastructure Layer                        │
└─────────────────────────────────────────────┘
\`\`\`

ASCII diagrams render beautifully in the monospace font.`,
    type: "diagram",
  },

  // ============================================================
  // SLIDE 7: Mixed Content Slide
  // Combine multiple elements for rich content
  // ============================================================
  {
    id: 7,
    title: "Combining Elements",
    content: `## Mix and Match

You can combine **bold text**, *italics*, and \`inline code\` freely.

### Links Work Too

Check out [cursor.com](https://cursor.com) for more.

### Nested Lists

1. First ordered item
2. Second ordered item
3. Third ordered item`,
    type: "content",
  },

  // ============================================================
  // SLIDE 8: Closing Title Slide
  // End with a call to action or thank you
  // ============================================================
  {
    id: 8,
    title: "Thank You",
    content: `## Questions?

---

**Your Presentation Title**

*Your memorable closing thought.*`,
    type: "title",
  },
];

export function getSlide(id: number): Slide | undefined {
  return slides.find((s) => s.id === id);
}

export function getTotalSlides(): number {
  return slides.length;
}
