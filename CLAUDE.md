# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive visualizer for the priority system ("prelación") for admission to conservatories of music and dance in the Comunitat Valenciana, based on Orden 8/2026. Deployed as a static GitHub Pages site.

## Architecture

- **Static site**: pure HTML + CSS + JS with Alpine.js bundled locally (no CDN, must work offline)
- **No build step**: edit files, push to `main`, GitHub Pages serves directly
- **Single-page app** with two view modes: hierarchical (expandable sections) and flowchart (step-by-step decision tree)
- **Bilingual**: Spanish (es) and Valencian (va) with in-page language toggle

## Development

Open `index.html` in a browser. No server needed. To test with a local server:

```
python3 -m http.server 8000
```

## Normative Source

The admission rules come from **Orden 8/2026** (arts. 18–22 primarily), accessible via the `legis-cpmdem` MCP server at `/Users/miralles/Documents/GitHub/legis_cpmdem/`. Key concepts:

- **4 priority levels** (art. 18): by education type (elementary/professional) and age threshold (12/18 years)
- **Prelación within each level** (art. 19): readmission → same-center exam → specialty change (EE only)
- **Ordering criteria** (art. 19.2): course desc → grade → youngest → public lottery
- **Two adjudication rounds** (arts. 20–21) plus extraordinary call and mid-course vacancies (art. 22)

## Design Constraints

- Clean minimalist: black/white/grey palette, accent color sparingly
- Responsive: must work on desktop, mobile, and projected screens (used in informational talks)
- Target audience: both administrative staff and families/applicants
- Language: all UI text and normative content in both `es` and `va`
