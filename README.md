# Syntax Studio Resource Library

A searchable, filterable library of coding resources, project ideas, and community tools built for Syntax Studio.

[View the live site](https://kaymade.github.io/resource-library/)

The Resource Library was created to give developers one organized place to find learning material, discover project ideas, and share useful resources with the community.

## Features

- Search resources by title, description, category, level, type, or tag
- Combine category, difficulty, and resource-type filters
- Incrementally load larger result sets with a "Show More" interface
- Browse curated project ideas
- Submit resources and project suggestions for review
- Dedicated community information and onboarding pages
- Responsive layouts for desktop, tablet, and mobile
- Semantic labels, navigation landmarks, and accessible form controls

## How It Works

Resource information is stored as structured JavaScript data and rendered dynamically in the browser.

The filtering system searches multiple properties of each resource and combines text search with category, level, and resource-type filters. Results update immediately as users change their search or filter selections.

Community submissions are collected separately through a review form before resources are manually added to the public library.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- Formspree
- Font Awesome

No framework or build step is required.

## Project Structure

```text
resource-library/
├── index.html
├── resources.html
├── resources.js
├── resources-data.js
├── projects.html
├── projects.js
├── projects-data.js
├── community.html
├── submit.html
├── privacy.html
├── styles.css
└── images/
```

## Resource Filtering

The resource browser supports:

- text search
- category filtering
- skill-level filtering
- resource-type filtering
- combined filter criteria
- empty-result states
- visible result counts
- incremental result loading

## Community Submissions

Visitors can suggest resources or project ideas through the submission form.

Submissions are reviewed before being added to the public resource data so the library remains curated rather than accepting unmoderated content directly into the site.

## Responsive Design

The interface includes dedicated responsive layouts for smaller desktop, tablet, and mobile viewports, including adaptive grids, navigation, cards, community sections, and page spacing.

## About Syntax Studio

Syntax Studio is a developer community centered around learning, building projects, sharing resources, and helping programmers grow alongside one another.
