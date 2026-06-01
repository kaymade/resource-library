const projectGrid = document.getElementById("project-grid");
const projectSearchInput = document.getElementById("project-search");
const difficultyFilter = document.getElementById("difficulty-filter");
const techFilter = document.getElementById("tech-filter");
const typeFilter = document.getElementById("type-filter");
const timeFilter = document.getElementById("time-filter");
const clearProjectFiltersButton = document.getElementById("clear-project-filters");
const projectCount = document.getElementById("project-count");
const projectEmptyState = document.getElementById("project-empty-state");

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

    renderProjects(filteredProjects);
}

function renderProjects(projects) {
    projectGrid.innerHTML = "";

    projects.forEach(function(project) {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });

    updateProjectCount(projects.length);
    updateProjectEmptyState(projects.length);
}

function updateProjectCount(count) {
    if (count === 1) {
        projectCount.textContent = "Showing 1 project idea";
    } else {
        projectCount.textContent = `Showing ${count} project ideas`;
    }
}

function updateProjectEmptyState(count) {
    if (count === 0) {
        projectEmptyState.classList.add("is-visible");
    } else {
        projectEmptyState.classList.remove("is-visible");
    }
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

renderProjects(projectsData);