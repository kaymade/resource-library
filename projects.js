const projectGrid = document.getElementById("project-grid");
const projectSearchInput = document.getElementById("project-search");
const difficultyFilter = document.getElementById("difficulty-filter");
const techFilter = document.getElementById("tech-filter");
const typeFilter = document.getElementById("type-filter");
const timeFilter = document.getElementById("time-filter");
const clearProjectFiltersButton = document.getElementById("clear-project-filters");
const projectCount = document.getElementById("project-count");
const projectEmptyState = document.getElementById("project-empty-state");
const showMoreProjectsButton = document.getElementById("show-more-projects");
const projectModal = document.getElementById("project-modal");
const projectModalContent = document.getElementById("project-modal-content");
const projectModalCloseButton = document.getElementById("project-modal-close");
const initialVisibleProjects = 12;
const projectsPerLoad = 6;

const projectGuideLinks = {
    "Mood Tracker": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    "Resource Card Gallery": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
    "Portfolio Case Study Page": "https://www.frontendmentor.io/articles/how-to-write-a-good-front-end-project-case-study-DqxfUEK5c5",
    "Weather Dashboard": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    "Habit Checklist": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
    "React Component Library": "https://react.dev/learn/thinking-in-react",
    "Python Packaging Project": "https://packaging.python.org/tutorials/packaging-projects/",
    "Small Python Project Collection": "https://inventwithpython.com/bigbookpython/",
    "Real Python Project Builds": "https://realpython.com/tutorials/projects/",
    "Data-Focused Python Projects": "https://www.dataquest.io/blog/python-projects-for-beginners/",
    "pygame Starter Game": "https://www.pygame.org/docs/tut/newbieguide.html",
    "Pygame Zero Mini Game": "https://pygame-zero.readthedocs.io/en/latest/introduction.html",
    "React Tic-Tac-Toe": "https://react.dev/learn/tutorial-tic-tac-toe",
    "Thinking in React Practice Build": "https://react.dev/learn/thinking-in-react",
    "Frontend Mentor React Builds": "https://www.frontendmentor.io/use-cases/beginner-react-projects",
    "React Practice Challenges": "https://reactpractice.dev/",
    "React Supermarket App": "https://react-tutorial.app/",
    "Beginner React Project Set": "https://www.coursera.org/articles/react-projects-for-beginners"
};

let visibleProjectCount = initialVisibleProjects;
let currentFilteredProjects = projectsData;
let activeProjectCard = null;

function formatProjectLabel(text) {
    return text
        .replaceAll("-", " ")
        .replace(/\b\w/g, function(letter) {
            return letter.toUpperCase();
        });
}

function createProjectCard(project) {
    const article = document.createElement("article");
    article.classList.add("project-card");
    article.setAttribute("tabindex", "0");
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `Open ${project.title} project details`);
    article.dataset.projectTitle = project.title;

    const techHTML = project.tech
        .map(function(techItem) {
            return `<span class="project-tech-pill">${formatProjectLabel(techItem)}</span>`;
        })
        .join("");

    const skillsHTML = project.skills
        .map(function(skill) {
            return `
                <span>
                    <i class="fa-solid fa-code"></i>
                    ${skill}
                </span>
            `;
        })
        .join("");

    const stretchGoalsHTML = project.stretchGoals
        .map(function(goal) {
            return `<li>${goal}</li>`;
        })
        .join("");

    article.innerHTML = `
        <div class="project-card-top">
            <div class="project-tech-pills">
                ${techHTML}
            </div>

            <span class="project-difficulty">${formatProjectLabel(project.difficulty)}</span>
        </div>

        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-card-details">
            <span>
                <i class="fa-solid fa-layer-group"></i>
                ${formatProjectLabel(project.type)}
            </span>

            <span>
                <i class="fa-regular fa-clock"></i>
                ${formatProjectLabel(project.time)}
            </span>
        </div>

        <div class="project-skill-list">
            ${skillsHTML}
        </div>

        <div class="project-stretch-goals">
            <h4>Stretch Goals</h4>
            <ul>
                ${stretchGoalsHTML}
            </ul>
        </div>

        <span class="project-card-open">
            View Steps
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </span>
    `;

    return article;
}

function projectMatchesSearch(project, searchTerm) {
    const searchableText = `
        ${project.title}
        ${project.difficulty}
        ${project.tech.join(" ")}
        ${project.type}
        ${project.time}
        ${project.skills.join(" ")}
        ${project.tags.join(" ")}
        ${project.description}
        ${project.stretchGoals.join(" ")}
    `.toLowerCase();

    return searchableText.includes(searchTerm);
}

function getProjectSteps(project) {
    const primarySkills = project.skills.slice(0, 3).join(", ");

    return [
        `Open the project guide and skim the expected outcome for ${project.title}.`,
        "Write down the smallest version you can build first.",
        `Create the main structure and focus on ${primarySkills}.`,
        "Test the core interaction before adding extra features.",
        "Add one stretch goal only after the base project works."
    ];
}

function createListItems(items) {
    return items
        .map(function(item) {
            return `<li>${item}</li>`;
        })
        .join("");
}

function openProjectModal(project, card) {
    activeProjectCard = card;

    const stepsHTML = createListItems(getProjectSteps(project));
    const stretchGoalsHTML = createListItems(project.stretchGoals);
    const guideLink = projectGuideLinks[project.title] || "resources.html";

    projectModalContent.innerHTML = `
        <div class="project-modal-header">
            <div>
                <p class="greeting">PROJECT STEPS</p>
                <h2 id="project-modal-title">${project.title}</h2>
            </div>

            <span class="project-difficulty">${formatProjectLabel(project.difficulty)}</span>
        </div>

        <p class="project-modal-description">${project.description}</p>

        <div class="project-modal-meta">
            <span>
                <i class="fa-solid fa-layer-group"></i>
                ${formatProjectLabel(project.type)}
            </span>
            <span>
                <i class="fa-regular fa-clock"></i>
                ${formatProjectLabel(project.time)}
            </span>
        </div>

        <div class="project-modal-section">
            <h3>Steps</h3>
            <ol>
                ${stepsHTML}
            </ol>
        </div>

        <div class="project-modal-section">
            <h3>Stretch Goals</h3>
            <ul>
                ${stretchGoalsHTML}
            </ul>
        </div>

        <a href="${guideLink}" class="project-guide-link" target="_blank" rel="noopener noreferrer">
            Open Project Guide
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    `;

    projectModal.classList.add("is-visible");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    projectModalCloseButton.focus();
}

function closeProjectModal() {
    projectModal.classList.remove("is-visible");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    projectModalContent.innerHTML = "";

    if (activeProjectCard) {
        activeProjectCard.focus();
    }

    activeProjectCard = null;
}

function handleProjectCardClick(event) {
    const card = event.target.closest(".project-card");

    if (!card) {
        return;
    }

    const project = projectsData.find(function(projectItem) {
        return projectItem.title === card.dataset.projectTitle;
    });

    if (project) {
        openProjectModal(project, card);
    }
}

function handleProjectCardKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") {
        return;
    }

    const card = event.target.closest(".project-card");

    if (!card) {
        return;
    }

    event.preventDefault();

    const project = projectsData.find(function(projectItem) {
        return projectItem.title === card.dataset.projectTitle;
    });

    if (project) {
        openProjectModal(project, card);
    }
}

function handleModalKeydown(event) {
    if (event.key === "Escape" && projectModal.classList.contains("is-visible")) {
        closeProjectModal();
    }
}

function filterProjects() {
    const searchTerm = projectSearchInput.value.toLowerCase().trim();
    const selectedDifficulty = difficultyFilter.value;
    const selectedTech = techFilter.value;
    const selectedType = typeFilter.value;
    const selectedTime = timeFilter.value;

    const filteredProjects = projectsData.filter(function(project) {
        const matchesSearch = projectMatchesSearch(project, searchTerm);
        const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
        const matchesTech = selectedTech === "all" || project.tech.includes(selectedTech);
        const matchesType = selectedType === "all" || project.type === selectedType;
        const matchesTime = selectedTime === "all" || project.time === selectedTime;

        return matchesSearch && matchesDifficulty && matchesTech && matchesType && matchesTime;
    });

    visibleProjectCount = initialVisibleProjects;
    renderProjects(filteredProjects);
}

function renderProjects(projects) {
    projectGrid.innerHTML = "";
    currentFilteredProjects = projects;

    projects.slice(0, visibleProjectCount).forEach(function(project) {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });

    updateProjectCount(projects.length, Math.min(visibleProjectCount, projects.length));
    updateProjectEmptyState(projects.length);
    updateShowMoreProjectsButton(projects.length);
}

function updateProjectCount(totalCount, visibleCount) {
    if (totalCount === 1) {
        projectCount.textContent = "Showing 1 project idea";
    } else if (totalCount > visibleCount) {
        projectCount.textContent = `Showing ${visibleCount} of ${totalCount} project ideas`;
    } else {
        projectCount.textContent = `Showing ${totalCount} project ideas`;
    }
}

function updateProjectEmptyState(count) {
    if (count === 0) {
        projectEmptyState.classList.add("is-visible");
    } else {
        projectEmptyState.classList.remove("is-visible");
    }
}

function updateShowMoreProjectsButton(totalCount) {
    if (totalCount > visibleProjectCount) {
        showMoreProjectsButton.classList.add("is-visible");
    } else {
        showMoreProjectsButton.classList.remove("is-visible");
    }
}

function showMoreProjects() {
    visibleProjectCount += projectsPerLoad;
    renderProjects(currentFilteredProjects);
}

function clearProjectFilters() {
    projectSearchInput.value = "";
    difficultyFilter.value = "all";
    techFilter.value = "all";
    typeFilter.value = "all";
    timeFilter.value = "all";

    filterProjects();
}

projectSearchInput.addEventListener("input", filterProjects);
difficultyFilter.addEventListener("change", filterProjects);
techFilter.addEventListener("change", filterProjects);
typeFilter.addEventListener("change", filterProjects);
timeFilter.addEventListener("change", filterProjects);
clearProjectFiltersButton.addEventListener("click", clearProjectFilters);
showMoreProjectsButton.addEventListener("click", showMoreProjects);
projectGrid.addEventListener("click", handleProjectCardClick);
projectGrid.addEventListener("keydown", handleProjectCardKeydown);
projectModalCloseButton.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", function(event) {
    if (event.target.hasAttribute("data-close-project-modal")) {
        closeProjectModal();
    }
});
document.addEventListener("keydown", handleModalKeydown);

renderProjects(projectsData);
