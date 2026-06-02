const resourceGrid = document.getElementById("resource-grid");
const searchInput = document.getElementById("resource-search");
const categoryFilter = document.getElementById("category-filter");
const levelFilter = document.getElementById("level-filter");
const typeFilter = document.getElementById("type-filter");
const clearFiltersButton = document.getElementById("clear-filters");
const resourceCount = document.getElementById("resource-count");
const emptyState = document.getElementById("resource-empty-state");

function formatLabel(text) {
    if (Array.isArray(text)) {
        return text
            .map(function(item) {
                return formatLabel(item);
            })
            .join(", ");
    }

    return text
        .replaceAll("-", " ")
        .replace(/\b\w/g, function(letter) {
            return letter.toUpperCase();
        });
}

function createResourceCard(resource) {
    const article = document.createElement("article");
    article.classList.add("resource-card");

    const categoriesHTML = resource.categories
        .map(function(category) {
            return `<span class="resource-pill">${formatLabel(category)}</span>`;
        })
        .join("");

    const tagsHTML = resource.tags
        .map(function(tag) {
            return `
                <span>
                    <i class="fa-solid fa-tag"></i>
                    ${tag}
                </span>
            `;
        })
        .join("");

    article.innerHTML = `
        <div class="resource-card-top">
            <div class="resource-category-pills">
                ${categoriesHTML}
            </div>

            <span class="resource-level">${formatLabel(resource.level)}</span>
        </div>

        <h3>${resource.title}</h3>
        <p>${resource.description}</p>

        <div class="resource-card-meta">
            <span>
                <i class="fa-solid fa-layer-group"></i>
                ${formatLabel(resource.type)}
            </span>
            ${tagsHTML}
        </div>

        <a href="${resource.link}" class="resource-card-link" target="_blank" rel="noopener noreferrer">
            Visit Resource
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    `;

    return article;
}

function getResourceLevelText(resource) {
    if (Array.isArray(resource.level)) {
        return resource.level.join(" ");
    }

    return resource.level;
}

function resourceMatchesSearch(resource, searchTerm) {
    const searchableText = `
        ${resource.title}
        ${resource.categories.join(" ")}
        ${getResourceLevelText(resource)}
        ${resource.type}
        ${resource.description}
        ${resource.tags.join(" ")}
    `.toLowerCase();

    return searchableText.includes(searchTerm);
}

function resourceMatchesLevel(resource, selectedLevel) {
    if (selectedLevel === "all") {
        return true;
    }

    if (Array.isArray(resource.level)) {
        return resource.level.includes(selectedLevel);
    }

    return resource.level === selectedLevel;
}

function filterResources() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;
    const selectedType = typeFilter.value;

    const filteredResources = resourcesData.filter(function(resource) {
        const matchesSearch = resourceMatchesSearch(resource, searchTerm);
        const matchesCategory = selectedCategory === "all" || resource.categories.includes(selectedCategory);
        const matchesLevel = resourceMatchesLevel(resource, selectedLevel);
        const matchesType = selectedType === "all" || resource.type === selectedType;

        return matchesSearch && matchesCategory && matchesLevel && matchesType;
    });

    renderResources(filteredResources);
}

function renderResources(resources) {
    resourceGrid.innerHTML = "";

    resources.forEach(function(resource) {
        const card = createResourceCard(resource);
        resourceGrid.appendChild(card);
    });

    updateResourceCount(resources.length);
    updateEmptyState(resources.length);
}

function updateResourceCount(count) {
    if (count === 1) {
        resourceCount.textContent = "Showing 1 resource";
    } else {
        resourceCount.textContent = `Showing ${count} resources`;
    }
}

function updateEmptyState(count) {
    if (count === 0) {
        emptyState.classList.add("is-visible");
    } else {
        emptyState.classList.remove("is-visible");
    }
}

function clearFilters() {
    searchInput.value = "";
    categoryFilter.value = "all";
    levelFilter.value = "all";
    typeFilter.value = "all";

    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, "", cleanUrl);

    filterResources();
}

function applyFiltersFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);

    const category = urlParams.get("category");
    const level = urlParams.get("level");
    const type = urlParams.get("type");
    const search = urlParams.get("search");

    if (category && categoryFilter.querySelector(`option[value="${category}"]`)) {
        categoryFilter.value = category;
    }

    if (level && levelFilter.querySelector(`option[value="${level}"]`)) {
        levelFilter.value = level;
    }

    if (type && typeFilter.querySelector(`option[value="${type}"]`)) {
        typeFilter.value = type;
    }

    if (search) {
        searchInput.value = search;
    }
}

searchInput.addEventListener("input", filterResources);
categoryFilter.addEventListener("change", filterResources);
levelFilter.addEventListener("change", filterResources);
typeFilter.addEventListener("change", filterResources);
clearFiltersButton.addEventListener("click", clearFilters);

applyFiltersFromUrl();
filterResources();
