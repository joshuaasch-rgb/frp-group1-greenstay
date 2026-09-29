# GreenStay Consultancy – FRP Group 1

Website for **Group 1**, Flexible Research Project (FRP1) 2026–2027, Hanze University of Applied Sciences.
Topic 2: *Encouraging Hotel Guests to Participate in Sustainable Practices*.

Built with [Astro](https://astro.build) + Tailwind CSS. Every chapter is its own page.

## Editing the text

You never need to touch layout code to change the content.

| What you want to change | File |
| --- | --- |
| A chapter (Introduction, Methodology, Findings …) | `src/content/chapters/<chapter>.mdx` |
| Home page: title, summary, key figures, abstract | `src/data/home.json` |
| Team members, coach, address | `src/data/site.json` |
| Chart numbers and captions | `src/data/charts.json` |
| Questionnaire breakout table | `src/data/questionnaire.json` |
| Photos and photo credits | `src/assets/photos/` + `src/data/photos.json` |

### Chapter files (`.mdx`)

Each chapter starts with a small header between `---` lines:

```yaml
---
title: Findings
number: 4
order: 4                 # position in the menu / page order
lead: One sentence shown under the title.
status: coming-later     # remove this line (and statusLabel) once the chapter is written
statusLabel: Coming later in the project
photo: greenWall         # a key from src/data/photos.json
toc: false               # set to true to show "On this page"
---
```

Below that you write normal Markdown:

- `## 4.1 Descriptive statistics` – a numbered section (appears in the "On this page" menu)
- `**bold**`, `*italic*`, lists with `-`, and tables with `|` all work.

Special blocks you can use anywhere in a chapter (no import needed):

```mdx
<Hypothesis id="H1">Environmental concern is positively associated with …</Hypothesis>

<MainQuestion>To what extent do …?</MainQuestion>

<BarChart id="booking" figure="1" />        {/* data from src/data/charts.json */}

<ConceptualModel figure="4" />

<StepFlow steps={['Step one', 'Step two', 'Step three']} />

<Scope>Text about the scope …</Scope>

<ComingLater items={['First thing', 'Second thing']} />
```

**Example – writing the Findings chapter:** open `src/content/chapters/findings.mdx`,
delete the `status`, `statusLabel` and `toc: false` lines, replace the `<ComingLater … />` block
with your text (`## 4.1 …`, `## 4.2 …`), and push. To add a new chart, add an entry to
`src/data/charts.json` and put `<BarChart id="your-id" figure="5" />` in the text.

> Tip: in `.mdx` files, curly braces `{ }` and `<` have a special meaning. Write "less than"
> or use `&lt;` if you need a literal `<` in normal text (e.g. `p &lt; .05`).

## Running it on your own computer

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev        # open http://localhost:4321
npm run build      # production build into dist/
```

## Publishing

The site is published with **GitHub Pages**. Every push to the `main` branch rebuilds and
redeploys automatically (see `.github/workflows/deploy.yml`); the new version is live after
about a minute. You can follow progress under the repository's **Actions** tab.

Editing directly on github.com also works: open a file, click the pencil icon, change the text
and "Commit changes" – the site redeploys on its own.

## Sources and photos

All figures and statements on the site come from our own project documents and the sources listed on
the References page. Photos are from [Unsplash](https://unsplash.com) (free licence); the
photographers are credited in the footer.
