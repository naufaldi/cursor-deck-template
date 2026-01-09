# Cursor Deck Template

A beautiful, minimal slide deck template with Cursor branding. Built with Next.js, Tailwind CSS, and Framer Motion.

![Cursor Deck](https://cursor.com/social.png)

## Quick Start

```bash
# Clone this template
git clone https://github.com/YOUR_USERNAME/cursor-deck-template.git
cd cursor-deck-template

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your slides.

## How It Works

**All your content lives in one file:** `lib/slides.ts`

```typescript
export const slides: Slide[] = [
  {
    id: 1,
    title: "Your Title Here",
    content: `Your markdown content here`,
    type: "title",
  },
  // Add more slides...
];
```

That's it. Edit the slides array, save, and your presentation updates instantly.

## Slide Types

Each slide has a `type` that affects its layout and styling:

### `title`

Full-screen centered layout with the Cursor logo. Perfect for opening and closing slides.

```typescript
{
  id: 1,
  title: "Your Presentation Title",
  content: `Subtitle or tagline

**Your Name**

Your Role`,
  type: "title",
}
```

### `content`

Standard slide with left-aligned content. Use for bullets, lists, and general content.

```typescript
{
  id: 2,
  title: "Agenda",
  content: `## What We'll Cover

- First topic
- Second topic
- Third topic`,
  type: "content",
}
```

### `code`

Optimized for code blocks with syntax highlighting.

```typescript
{
  id: 3,
  title: "Code Example",
  content: `## Implementation

\`\`\`typescript
function hello(name: string) {
  return \`Hello, \${name}!\`;
}
\`\`\``,
  type: "code",
}
```

### `quote`

Styled for impactful quotes with the orange accent border.

```typescript
{
  id: 4,
  title: "Key Insight",
  content: `## The Big Idea

> "Your memorable quote goes here."
> 
> — Author Name`,
  type: "quote",
}
```

### `diagram`

For ASCII art, architecture diagrams, or visual layouts.

```typescript
{
  id: 5,
  title: "Architecture",
  content: `## System Overview

\`\`\`
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
┌──────▼──────┐
│   Server    │
└─────────────┘
\`\`\``,
  type: "diagram",
}
```

## Markdown Features

The content field supports full GitHub Flavored Markdown:

| Feature | Syntax | Example |
|---------|--------|---------|
| Bold | `**text**` | **bold** |
| Italic | `*text*` | *italic* |
| Code | `` `code` `` | `code` |
| Link | `[text](url)` | [Cursor](https://cursor.com) |
| Image | `![alt](url)` | — |
| Table | GFM tables | ✓ |
| Blockquote | `> text` | ✓ |
| Lists | `- item` or `1. item` | ✓ |

### Code Blocks

Syntax highlighting is automatic. Just specify the language:

````markdown
```typescript
const x = 42;
```

```python
x = 42
```

```bash
npm install
```
````

## Navigation

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |

Click the progress bar at the bottom to jump to any slide.

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #14120b;      /* Dark background */
  --foreground: #edecec;      /* Light text */
  --accent-primary: #f54e00;  /* Cursor orange */
  --accent-secondary: #34785C; /* Green accent */
}
```

### Fonts

The template uses **CursorGothic** (included in `public/fonts/`). To use a different font, update the `@font-face` declarations in `globals.css`.

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/cursor-deck-template)

### Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

The build output is a standard Next.js app that works on any Node.js hosting platform.

## Project Structure

```
cursor-deck-template/
├── app/
│   ├── globals.css        # Cursor theme & typography
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Redirects to /slides/1
│   └── slides/[id]/       # Dynamic slide routes
├── components/
│   ├── Slide.tsx          # Main slide component
│   ├── SlideNav.tsx       # Navigation controls
│   ├── CodeBlock.tsx      # Syntax highlighting
│   └── MarkdownRenderer.tsx # Markdown to React
├── lib/
│   ├── slides.ts          # YOUR CONTENT GOES HERE
│   └── types.ts           # TypeScript interfaces
└── public/
    ├── logo.svg           # Cursor logo
    └── fonts/             # CursorGothic font files
```

## Tips

1. **Start simple** — Begin with title, content, and code slides. Add variety as needed.

2. **Use speaker notes** — Each slide supports an optional `notes` field for your reference:
   ```typescript
   {
     id: 1,
     title: "...",
     content: "...",
     type: "content",
     notes: "Remember to mention X and Y here",
   }
   ```

3. **Test on your target display** — Run `npm run build && npm start` to test production mode before presenting.

4. **Keep slides scannable** — Aim for 3-5 bullet points max. Put details in speaker notes.

## License

MIT — Use this template for any purpose.

---

Built by [Agrim Singh](https://x.com/agrimsingh), Cursor Ambassador for Singapore.

Powered by Next.js.
