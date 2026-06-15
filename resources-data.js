const resourcesData = [
    {
        title: "MDN Web Docs",
        categories: ["html-css", "javascript", "design-accessibility"],
        level: "beginner",
        type: "docs",
        tags: ["html", "css", "javascript", "accessibility", "web docs", "reference", "browser apis", "free"],
        description: "A trusted reference for HTML, CSS, JavaScript, accessibility, browser APIs, and web development fundamentals.",
        link: "https://developer.mozilla.org/"
    },
    {
        title: "freeCodeCamp",
        categories: ["html-css", "javascript", "python", "react", "backend", "databases", "career-portfolio"],
        level: "beginner",
        type: "course",
        tags: ["html", "css", "javascript", "python", "react", "backend", "databases", "certifications", "projects", "practice", "free"],
        description: "A free learning platform with coding lessons, certifications, projects, and practice paths across multiple programming topics.",
        link: "https://www.freecodecamp.org/"
    },
    {
        title: "Boot.dev",
        categories: ["javascript", "python", "backend", "computer-science", "career"],
        level: ["beginner", "intermediate"],
        type: "course",
        tags: ["backend", "projects", "guided-learning", "computer-science", "portfolio", "paid", "free-intro-available"],
        description: "Structured curriculum focused on backend development and programming.",
        link: "https://www.boot.dev"
    },
    {
        title: "The Odin Project",
        categories: ["html-css", "javascript", "react", "git/github", "full-stack"],
        level: ["beginner", "intermediate"],
        type: "course",
        tags: ["projects", "curriculum", "full-stack", "portfolio", "self-taught", "free"],
        description: "Open-source full-stack web development curriculum built around real projects.",
        link: "https://www.theodinproject.com/"
    },
{
    title: "JavaScript.info",
    categories: ["javascript", "dom", "web-development"],
    level: ["beginner", "intermediate"],
    type: "tutorial",
    tags: ["fundamentals", "dom", "objects", "async", "browser"],
    description: "Comprehensive JavaScript tutorial covering beginner through advanced topics.",
    link: "https://javascript.info"
},
{
    title: "React Learn",
    categories: ["react", "javascript", "web-development"],
    level: "beginner",
    type: "docs",
    tags: ["react", "official", "components", "state", "props", "free"],
    description: "Official React learning docs covering components, props, state, events, lists, and core React concepts.",
    link: "https://react.dev/learn"
},
{
    title: "React Reference",
    categories: ["react", "javascript"],
    level: ["intermediate", "advanced"],
    type: "reference",
    tags: ["react", "official", "hooks", "api", "reference", "free"],
    description: "Official reference documentation for React APIs, Hooks, components, and DOM features.",
    link: "https://react.dev/reference/react"
},
{
    title: "React Tic-Tac-Toe Tutorial",
    categories: ["react", "javascript", "game"],
    level: "beginner",
    type: "game",
    tags: ["react", "official", "game", "state", "components", "tutorial", "free"],
    description: "Official hands-on React tutorial that teaches state and components by building a tic-tac-toe game.",
    link: "https://react.dev/learn/tutorial-tic-tac-toe"
},
{
    title: "Thinking in React",
    categories: ["react", "javascript"],
    level: ["beginner", "intermediate"],
    type: "guide",
    tags: ["react", "official", "components", "state", "ui-planning", "free"],
    description: "Official React guide for breaking interfaces into components and deciding where state should live.",
    link: "https://react.dev/learn/thinking-in-react"
},
{
    title: "Using TypeScript with React",
    categories: ["react", "javascript"],
    level: ["intermediate", "advanced"],
    type: "guide",
    tags: ["react", "typescript", "official", "types", "free"],
    description: "Official React guide for using TypeScript with components, Hooks, and common React patterns.",
    link: "https://react.dev/learn/typescript"
},
{
    title: "Next.js Docs",
    categories: ["react", "javascript", "backend", "full-stack"],
    level: ["beginner", "intermediate", "advanced"],
    type: "docs",
    tags: ["nextjs", "react", "official", "app-router", "full-stack", "free"],
    description: "Official Next.js documentation for building React applications with routing, rendering, data fetching, and deployment features.",
    link: "https://nextjs.org/docs"
},
{
    title: "Learn Next.js",
    categories: ["react", "javascript", "backend", "full-stack"],
    level: ["beginner", "intermediate"],
    type: "course",
    tags: ["nextjs", "react", "official", "course", "app-router", "free"],
    description: "Official interactive Next.js learning path that teaches core framework features through guided lessons.",
    link: "https://nextjs.org/learn"
},
{
    title: "Next.js App Router Course",
    categories: ["react", "javascript", "backend", "full-stack", "projects"],
    level: ["intermediate", "advanced"],
    type: "project",
    tags: ["nextjs", "official", "app-router", "dashboard", "full-stack", "project", "free"],
    description: "Official project-based course for learning the Next.js App Router by building a full-stack dashboard application.",
    link: "https://nextjs.org/learn/dashboard-app"
},
{
    title: "React Foundations by Next.js",
    categories: ["react", "javascript"],
    level: "beginner",
    type: "course",
    tags: ["react", "nextjs", "official", "foundations", "beginner", "free"],
    description: "Official beginner-friendly course from Next.js that introduces JavaScript, React, and the path into Next.js.",
    link: "https://nextjs.org/learn/react-foundations"
},
{
    title: "Next.js Pages Router Course",
    categories: ["react", "javascript", "full-stack", "projects"],
    level: ["beginner", "intermediate"],
    type: "project",
    tags: ["nextjs", "official", "pages-router", "blog", "project", "free"],
    description: "Official Next.js course for learning the Pages Router by creating a simple blog application.",
    link: "https://nextjs.org/learn/pages-router"
},
{
    title: "W3Schools",
    categories: ["html-css", "javascript", "python", "sql"],
    level: "beginner",
    type: "tutorial",
    tags: ["html", "css", "javascript", "python", "sql", "examples", "syntax", "basics", "quick-reference", "free"],
    description: "Beginner-friendly tutorials and examples covering common programming topics.",
    link: "https://www.w3schools.com/"
},
{
    title: "Python Docs",
    categories: ["python", "developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "docs",
    tags: ["python", "official", "reference", "standard-library", "free"],
    description: "Official Python documentation covering setup, language features, the standard library, tutorials, and HOWTO guides.",
    link: "https://docs.python.org/"
},
{
    title: "The Python Tutorial",
    categories: ["python"],
    level: "beginner",
    type: "tutorial",
    tags: ["python", "official", "fundamentals", "syntax", "beginner", "free"],
    description: "Official Python tutorial introducing the language's core syntax, data structures, modules, input and output, and errors.",
    link: "https://docs.python.org/3/tutorial/index.html"
},
{
    title: "Python Standard Library",
    categories: ["python"],
    level: ["intermediate", "advanced"],
    type: "reference",
    tags: ["python", "official", "standard-library", "modules", "reference", "free"],
    description: "Official reference for Python's built-in functions, modules, and standard library tools.",
    link: "https://docs.python.org/3/library/index.html"
},
{
    title: "Python Language Reference",
    categories: ["python", "computer-science"],
    level: ["intermediate", "advanced"],
    type: "reference",
    tags: ["python", "official", "syntax", "semantics", "advanced", "free"],
    description: "Official reference for Python's syntax and core language semantics.",
    link: "https://docs.python.org/3/reference/index.html"
},
{
    title: "Python HOWTOs",
    categories: ["python"],
    level: ["intermediate", "advanced"],
    type: "guide",
    tags: ["python", "official", "how-to", "asyncio", "argparse", "free"],
    description: "Official in-depth guides for specific Python topics such as asyncio, argparse, descriptors, enums, and functional programming.",
    link: "https://docs.python.org/3/howto/index.html"
},
{
    title: "Python Packaging User Guide",
    categories: ["python", "developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "guide",
    tags: ["python", "packaging", "pypa", "official", "packages", "free"],
    description: "Official PyPA guide for installing, packaging, distributing, and managing Python project dependencies.",
    link: "https://packaging.python.org/"
},
{
    title: "Packaging Python Projects",
    categories: ["python", "developer-tools", "projects"],
    level: ["beginner", "intermediate"],
    type: "tutorial",
    tags: ["python", "packaging", "pypi", "official", "projects", "free"],
    description: "Official PyPA tutorial that walks through packaging a simple Python project for distribution.",
    link: "https://packaging.python.org/tutorials/packaging-projects/"
},
{
    title: "Python Turtle Graphics",
    categories: ["python", "game"],
    level: "beginner",
    type: "tutorial",
    tags: ["python", "official", "turtle", "graphics", "creative-coding", "free"],
    description: "Official Python tutorial and reference for turtle graphics, a beginner-friendly way to learn programming through drawing.",
    link: "https://docs.python.org/3/library/turtle.html"
},
{
    title: "pygame Docs",
    categories: ["python", "game"],
    level: ["beginner", "intermediate"],
    type: "docs",
    tags: ["python", "pygame", "game-development", "official", "free"],
    description: "Official pygame documentation with tutorials and API references for building games and multimedia applications in Python.",
    link: "https://www.pygame.org/docs/"
},
{
    title: "A Newbie Guide to pygame",
    categories: ["python", "game"],
    level: "beginner",
    type: "tutorial",
    tags: ["python", "pygame", "game-development", "beginner", "official", "free"],
    description: "Official pygame tutorial for new learners getting started with game programming concepts in Python.",
    link: "https://www.pygame.org/docs/tut/newbieguide.html"
},
{
    title: "Pygame Zero Docs",
    categories: ["python", "game"],
    level: "beginner",
    type: "docs",
    tags: ["python", "pygame-zero", "games", "education", "official", "free"],
    description: "Official Pygame Zero documentation for learning game programming with less setup and boilerplate.",
    link: "https://pygame-zero.readthedocs.io/"
},
{
    title: "Introduction to Pygame Zero",
    categories: ["python", "game"],
    level: "beginner",
    type: "tutorial",
    tags: ["python", "pygame-zero", "game-development", "education", "official", "free"],
    description: "Official introductory Pygame Zero tutorial covering sprites, input events, sounds, and simple game behavior.",
    link: "https://pygame-zero.readthedocs.io/en/latest/introduction.html"
},
{
    title: "Roadmap.sh",
    categories: ["frontend", "backend", "react", "python", "career-portfolio"],
    level: ["beginner", "intermediate", "advanced"],
    type: "roadmap",
    tags: ["roadmap", "learning-paths", "frontend", "backend", "career-planning", "free"],
    description: "Visual roadmaps showing technologies and skills needed for different development careers.",
    link: "https://roadmap.sh/"
},
{
    title: "Codewars",
    categories: ["javascript", "python", "algorithms", "problem-solving"],
    level: ["beginner", "intermediate", "advanced"],
    type: "practice",
    tags: ["challenges", "kata", "logic", "exercises", "problem-solving", "free"],
    description: "Coding challenge platform with exercises ranging from beginner to advanced.",
    link: "https://www.codewars.com/"
},
{
    title: "LeetCode",
    categories: ["javascript", "python", "algorithms", "data-structures"],
    level: ["intermediate", "advanced"],
    type: "practice",
    tags: ["interviews", "algorithms", "data-structures", "coding-challenges", "free", "paid"],
    description: "Coding practice platform focused on technical interviews and algorithm skills.",
    link: "https://leetcode.com/"
},
{
    title: "Exercism",
    categories: ["javascript", "python", "algorithms", "fundamentals"],
    level: ["beginner", "intermediate"],
    type: "practice",
    tags: ["exercises", "mentorship", "practice", "feedback", "languages", "free"],
    description: "Free coding exercises with optional mentor feedback.",
    link: "https://exercism.org/"
},
{
    title: "Frontend Mentor",
    categories: ["html-css", "javascript", "react", "ui-design", "projects"],
    level: ["beginner", "intermediate", "advanced"],
    type: "project",
    tags: ["frontend", "challenges", "portfolio", "practice", "design-files", "free", "paid"],
    description: "Real-world frontend projects built from professional design mockups.",
    link: "https://www.frontendmentor.io/"
},
{
    title: "CSSBattle",
    categories: ["html-css", "ui-design", "game"],
    level: ["beginner", "intermediate"],
    type: "game",
    tags: ["css", "layout", "creativity", "practice", "game", "challenge", "free"],
    description: "Visual CSS challenges designed to improve layout and styling skills.",
    link: "https://cssbattle.dev/"
},
{
    title: "Flexbox Froggy",
    categories: ["html-css", "game"],
    level: "beginner",
    type: "game",
    tags: ["css", "flexbox", "layout", "practice", "game", "free"],
    description: "A playful CSS game for practicing flexbox properties by moving frogs onto lily pads.",
    link: "https://flexboxfroggy.com/"
},
{
    title: "CSS Diner",
    categories: ["html-css", "game"],
    level: "beginner",
    type: "game",
    tags: ["css", "selectors", "html", "practice", "game", "free"],
    description: "An interactive game that helps learners practice CSS selectors through short visual challenges.",
    link: "https://flukeout.github.io/"
},
{
    title: "Grid Garden",
    categories: ["html-css", "game"],
    level: "beginner",
    type: "game",
    tags: ["css", "grid", "layout", "practice", "game", "free"],
    description: "A CSS Grid game where learners water a garden by writing grid layout properties.",
    link: "https://cssgridgarden.com/"
},
{
    title: "Frontend Practice",
    categories: ["html-css", "javascript", "projects"],
    level: ["beginner", "intermediate"],
    type: "project",
    tags: ["portfolio", "recreation", "frontend", "practice", "real-world", "free"],
    description: "Practice by recreating real websites and interfaces.",
    link: "https://www.frontendpractice.com/"
},
{
    title: "App Ideas Collection",
    categories: ["projects", "portfolio", "problem-solving"],
    level: ["beginner", "intermediate", "advanced"],
    type: "project-ideas",
    tags: ["project-ideas", "portfolio", "inspiration", "challenges", "free"],
    description: "Large collection of programming project ideas organized by difficulty.",
    link: "https://github.com/florinpop17/app-ideas"
},
{
    title: "DevProjects",
    categories: ["html-css", "javascript", "python", "projects"],
    level: ["beginner", "intermediate"],
    type: "project",
    tags: ["project-prompts", "portfolio", "challenges", "practice", "free"],
    description: "Coding project prompts designed to help developers build practical experience.",
    link: "https://www.codementor.io/projects"
},
{
    title: "CSS Tricks",
    categories: ["html-css", "ui-design", "web-development"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tutorial",
    tags: ["css", "layout", "flexbox", "grid", "articles", "free"],
    description: "In-depth articles and guides covering modern CSS techniques.",
    link: "https://css-tricks.com/"
},
{
    title: "Can I Use",
    categories: ["html-css", "javascript", "web-apis", "developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "reference",
    tags: ["browser-support", "compatibility", "css", "javascript", "web-apis", "free"],
    description: "Browser compatibility database for web technologies and APIs.",
    link: "https://caniuse.com/"
},
{
    title: "W3C Markup Validation Service",
    categories: ["html-css", "developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tool",
    tags: ["html", "validation", "markup", "debugging", "standards", "free"],
    description: "Official W3C tool for checking HTML and markup validity against web standards.",
    link: "https://validator.w3.org/"
},
{
    title: "WebAIM Contrast Checker",
    categories: ["design-accessibility", "developer-tools"],
    level: "beginner",
    type: "tool",
    tags: ["accessibility", "contrast", "color", "wcag", "ui-design", "free"],
    description: "A simple tool for testing color contrast ratios against accessibility guidelines.",
    link: "https://webaim.org/resources/contrastchecker/"
},
{
    title: "GitHub Skills",
    categories: ["git-github", "developer-tools"],
    level: "beginner",
    type: "course",
    tags: ["git", "github", "repositories", "commits", "branches", "free"],
    description: "Interactive lessons for learning GitHub and version control basics.",
    link: "https://skills.github.com/"
},
{
    title: "Learn Git Branching",
    categories: ["git-github", "developer-tools"],
    level: ["beginner", "intermediate"],
    type: "tutorial",
    tags: ["branches", "commits", "merging", "rebasing", "visualization", "free"],
    description: "Interactive Git tutorial focused on branching and repository management.",
    link: "https://learngitbranching.js.org/"
},
{
    title: "GitHub",
    categories: ["git-github", "developer-tools", "career-portfolio"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tool",
    tags: ["repositories", "collaboration", "portfolio", "open-source", "version-control", "free", "paid"],
    description: "Platform for hosting code, collaborating on projects, and building a portfolio.",
    link: "https://github.com/"
},
{
    title: "Visual Studio Code",
    categories: ["developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tool",
    tags: ["editor", "debugging", "extensions", "productivity", "free"],
    description: "Popular code editor used across web development and software engineering.",
    link: "https://code.visualstudio.com/"
},
{
    title: "CodePen",
    categories: ["html-css", "javascript", "developer-tools"],
    level: ["beginner", "intermediate"],
    type: "tool",
    tags: ["frontend", "demos", "experiments", "snippets", "free", "paid"],
    description: "Browser-based coding environment for HTML, CSS, and JavaScript experiments.",
    link: "https://codepen.io/"
},
{
    title: "JSON Formatter",
    categories: ["javascript", "developer-tools"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tool",
    tags: ["json", "formatter", "debugging", "api", "developer-tools", "free"],
    description: "Formats, validates, and helps inspect JSON data when working with APIs or configuration files.",
    link: "https://jsonformatter.org/"
},
{
    title: "Figma",
    categories: ["ui-design", "ux-design"],
    level: ["beginner", "intermediate", "advanced"],
    type: "tool",
    tags: ["wireframes", "prototypes", "interfaces", "collaboration", "free", "paid"],
    description: "Industry-standard design and prototyping platform for digital products.",
    link: "https://www.figma.com/"
},
{
    title: "Coolors",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "tool",
    tags: ["color-palettes", "branding", "ui-design", "free", "paid"],
    description: "Generate and explore color palettes for websites and applications.",
    link: "https://coolors.co/"
},
{
    title: "RGB Color Picker",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "tool",
    tags: ["color", "rgb", "hex", "ui-design", "web-design", "free"],
    description: "Pick and convert RGB, HEX, HSL, and other color values for web design work.",
    link: "https://rgbcolorpicker.com/"
},
{
    title: "Google Fonts",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "asset-library",
    tags: ["typography", "fonts", "web-design", "free"],
    description: "Free library of web fonts maintained by Google.",
    link: "https://fonts.google.com/"
},
{
    title: "Font Squirrel",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "asset-library",
    tags: ["typography", "fonts", "font-generator", "web-design", "free"],
    description: "Curated font library with webfont tools for finding and preparing fonts for websites.",
    link: "https://www.fontsquirrel.com/"
},
{
    title: "Font Awesome",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "asset-library",
    tags: ["icons", "ui-design", "web-development", "free", "paid"],
    description: "Popular icon library for websites, applications, and dashboards.",
    link: "https://fontawesome.com/"
},
{
    title: "Dev.to",
    categories: ["community", "career-portfolio"],
    level: ["beginner", "intermediate", "advanced"],
    type: "community",
    tags: ["articles", "tutorials", "networking", "developers", "free"],
    description: "Developer-focused community for learning, sharing, and publishing content.",
    link: "https://dev.to/"
},
{
    title: "Hashnode",
    categories: ["community", "career-portfolio"],
    level: ["beginner", "intermediate", "advanced"],
    type: "blogging",
    tags: ["blogging", "portfolio", "articles", "personal-brand", "free"],
    description: "Technical blogging platform for developers building a professional presence.",
    link: "https://hashnode.com/"
}
];
