const projectsData = [
    {
        title: "Mood Tracker",
        difficulty: "beginner",
        tech: ["html-css", "javascript"],
        type: "dom-practice",
        time: "weekend",
        skills: ["forms", "arrays", "objects", "DOM", "events"],
        tags: ["mood", "tracker", "forms", "beginner", "ui practice"],
        description: "Build a small app where users can log their mood, choose an emoji, and view recent entries.",
        stretchGoals: [
            "save entries with localStorage",
            "add a filter by mood",
            "show a weekly mood summary"
        ]
    },
    {
        title: "Resource Card Gallery",
        difficulty: "beginner",
        tech: ["html-css", "javascript"],
        type: "mini-app",
        time: "quick-build",
        skills: ["arrays", "objects", "DOM", "cards", "filtering"],
        tags: ["resources", "cards", "gallery", "search", "filter"],
        description: "Build a searchable card gallery that displays a small collection of links, tools, or study resources.",
        stretchGoals: [
            "add category filters",
            "add a search bar",
            "show a no results message"
        ]
    },
    {
        title: "Portfolio Case Study Page",
        difficulty: "beginner",
        tech: ["html-css"],
        type: "portfolio-project",
        time: "multi-day",
        skills: ["semantic HTML", "layout", "responsive design", "visual hierarchy"],
        tags: ["portfolio", "case study", "layout", "css", "responsive"],
        description: "Design a polished case study page for one completed project with sections for goals, process, screenshots, and future improvements.",
        stretchGoals: [
            "add a project reflection section",
            "include a responsive image layout",
            "create reusable case study cards"
        ]
    },
    {
        title: "Weather Dashboard",
        difficulty: "intermediate",
        tech: ["html-css", "javascript", "api"],
        type: "api-project",
        time: "multi-day",
        skills: ["fetch", "API data", "DOM", "conditionals", "error handling"],
        tags: ["weather", "api", "dashboard", "fetch", "javascript"],
        description: "Build a dashboard where users can search for a city and view current weather details from an API.",
        stretchGoals: [
            "show a loading state",
            "handle invalid city searches",
            "save recent searches"
        ]
    },
    {
        title: "Habit Checklist",
        difficulty: "beginner",
        tech: ["html-css", "javascript"],
        type: "form-project",
        time: "weekend",
        skills: ["forms", "checkboxes", "DOM", "arrays", "localStorage"],
        tags: ["habits", "checklist", "daily tracker", "local storage"],
        description: "Create a habit checklist where users can mark daily tasks complete and reset them when needed.",
        stretchGoals: [
            "save checked habits with localStorage",
            "add custom habit creation",
            "show a completed percentage"
        ]
    },
    {
        title: "React Component Library",
        difficulty: "intermediate",
        tech: ["react", "javascript"],
        type: "portfolio-project",
        time: "larger-project",
        skills: ["components", "props", "state", "reusable UI", "responsive design"],
        tags: ["react", "components", "ui", "portfolio", "frontend"],
        description: "Build a small collection of reusable React components such as buttons, cards, alerts, badges, and nav elements.",
        stretchGoals: [
            "add light and dark variants",
            "create a preview page",
            "document each component"
        ]
    },
    {
        title: "Python Packaging Project",
        difficulty: "intermediate",
        tech: ["python"],
        type: "practice-projects",
        time: "multi-day",
        skills: ["packaging", "pyproject.toml", "modules", "documentation", "publishing"],
        tags: ["python", "official", "packaging", "pypa", "project tutorial"],
        description: "Practice with the official PyPA Packaging Python Projects tutorial by turning a small Python module into a package.",
        stretchGoals: [
            "write a clear README",
            "add project metadata",
            "prepare the package for distribution"
        ]
    },
    {
        title: "Small Python Project Collection",
        difficulty: "beginner",
        tech: ["python"],
        type: "practice-projects",
        time: "quick-build",
        skills: ["loops", "functions", "conditionals", "strings", "problem solving"],
        tags: ["python", "invent with python", "small projects", "games", "beginner"],
        description: "Use The Big Book of Small Python Projects as a source for bite-sized programs, games, art, and utility builds.",
        stretchGoals: [
            "rebuild one project without looking",
            "change the rules or output",
            "combine two small ideas into one app"
        ]
    },
    {
        title: "Real Python Project Builds",
        difficulty: "intermediate",
        tech: ["python"],
        type: "practice-projects",
        time: "multi-day",
        skills: ["project structure", "debugging", "files", "APIs", "automation"],
        tags: ["python", "real python", "guided projects", "portfolio", "practice"],
        description: "Choose a guided project from Real Python's project library to practice building complete Python programs.",
        stretchGoals: [
            "add tests for key functions",
            "write setup notes",
            "turn the project into a portfolio case study"
        ]
    },
    {
        title: "Data-Focused Python Projects",
        difficulty: "intermediate",
        tech: ["python", "databases"],
        type: "practice-projects",
        time: "multi-day",
        skills: ["data analysis", "files", "cleaning data", "charts", "notebooks"],
        tags: ["python", "dataquest", "data", "analysis", "projects"],
        description: "Use Dataquest's Python project ideas to practice data analysis, automation, and practical problem solving.",
        stretchGoals: [
            "summarize findings in plain language",
            "create one visualization",
            "publish the notebook or script on GitHub"
        ]
    },
    {
        title: "pygame Starter Game",
        difficulty: "beginner",
        tech: ["python"],
        type: "game",
        time: "weekend",
        skills: ["game loop", "events", "sprites", "collision", "keyboard input"],
        tags: ["python", "pygame", "official", "game development", "beginner"],
        description: "Follow the official pygame newbie guide to practice Python through a small interactive game.",
        stretchGoals: [
            "add scoring",
            "add sound effects",
            "create a start and game-over screen"
        ]
    },
    {
        title: "Pygame Zero Mini Game",
        difficulty: "beginner",
        tech: ["python"],
        type: "game",
        time: "weekend",
        skills: ["sprites", "events", "animation", "sound", "game state"],
        tags: ["python", "pygame zero", "official", "education", "games"],
        description: "Use the Pygame Zero introduction to build a beginner-friendly Python game with less setup.",
        stretchGoals: [
            "add multiple levels",
            "track lives or health",
            "create custom artwork"
        ]
    },
    {
        title: "React Tic-Tac-Toe",
        difficulty: "beginner",
        tech: ["react", "javascript"],
        type: "game",
        time: "weekend",
        skills: ["components", "props", "state", "events", "derived data"],
        tags: ["react", "official", "tic tac toe", "game", "state"],
        description: "Build the official React Tic-Tac-Toe tutorial project to practice components, state, and event handling.",
        stretchGoals: [
            "highlight the winning squares",
            "add move history labels",
            "style the board for mobile"
        ]
    },
    {
        title: "Thinking in React Practice Build",
        difficulty: "beginner",
        tech: ["react", "javascript"],
        type: "practice-projects",
        time: "weekend",
        skills: ["component planning", "state", "filtering", "search", "data flow"],
        tags: ["react", "official", "thinking in react", "components", "filters"],
        description: "Practice the official Thinking in React workflow by building a searchable product table from static data.",
        stretchGoals: [
            "add category filters",
            "extract reusable components",
            "add an empty state"
        ]
    },
    {
        title: "Frontend Mentor React Builds",
        difficulty: "intermediate",
        tech: ["html-css", "javascript", "react"],
        type: "portfolio-project",
        time: "multi-day",
        skills: ["components", "responsive design", "props", "state", "design matching"],
        tags: ["react", "frontend mentor", "portfolio", "ui", "practice"],
        description: "Use Frontend Mentor's React project collection to build realistic interfaces from design briefs.",
        stretchGoals: [
            "match the provided design closely",
            "add accessible focus states",
            "write a short project reflection"
        ]
    },
    {
        title: "React Practice Challenges",
        difficulty: "intermediate",
        tech: ["react", "javascript"],
        type: "practice-projects",
        time: "quick-build",
        skills: ["hooks", "components", "forms", "state", "composition"],
        tags: ["react", "react practice", "challenges", "exercises", "focused practice"],
        description: "Work through small focused challenges from React Practice to sharpen specific React skills.",
        stretchGoals: [
            "solve without checking the answer first",
            "refactor into smaller components",
            "write notes about the pattern used"
        ]
    },
    {
        title: "React Supermarket App",
        difficulty: "intermediate",
        tech: ["react", "javascript"],
        type: "mini-app",
        time: "larger-project",
        skills: ["components", "state", "lists", "forms", "cart logic"],
        tags: ["react", "react tutorial app", "shopping app", "cart", "project course"],
        description: "Use React Tutorial App as inspiration for a supermarket shopping app with products, cart state, and checkout-style interactions.",
        stretchGoals: [
            "add search and filters",
            "persist the cart",
            "show order totals and item counts"
        ]
    },
    {
        title: "Beginner React Project Set",
        difficulty: "beginner",
        tech: ["react", "javascript"],
        type: "practice-projects",
        time: "quick-build",
        skills: ["state", "events", "forms", "conditional rendering", "components"],
        tags: ["react", "coursera", "beginner projects", "to-do", "calculator"],
        description: "Review beginner React project ideas such as a to-do list, calculator, quiz, weather app, or simple tracker.",
        stretchGoals: [
            "build three small apps",
            "reuse one component across projects",
            "add localStorage to one project"
        ]
    }
];
