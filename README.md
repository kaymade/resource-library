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
├── styles.css
└── images/
