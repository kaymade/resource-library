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
    title: "W3Schools",
    categories: ["html-css", "javascript", "python", "sql"],
    level: "beginner",
    type: "tutorial",
    tags: ["html", "css", "javascript", "python", "sql", "examples", "syntax", "basics", "quick-reference", "free"],
    description: "Beginner-friendly tutorials and examples covering common programming topics.",
    link: "https://www.w3schools.com/"
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
    categories: ["html-css", "ui-design"],
    level: ["beginner", "intermediate"],
    type: "challenge",
    tags: ["css", "layout", "flexbox", "creativity", "practice", "free"],
    description: "Visual CSS challenges designed to improve layout and styling skills.",
    link: "https://cssbattle.dev/"
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
    title: "Google Fonts",
    categories: ["ui-design", "design-resources"],
    level: "beginner",
    type: "asset-library",
    tags: ["typography", "fonts", "web-design", "free"],
    description: "Free library of web fonts maintained by Google.",
    link: "https://fonts.google.com/"
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