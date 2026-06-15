const resourceGrid = document.getElementById("resource-grid");
const searchInput = document.getElementById("resource-search");
const categoryFilter = document.getElementById("category-filter");
const levelFilter = document.getElementById("level-filter");
const typeFilter = document.getElementById("type-filter");
const clearFiltersButton = document.getElementById("clear-filters");
const resourceCount = document.getElementById("resource-count");
const emptyState = document.getElementById("resource-empty-state");
const showMoreButton = document.getElementById("show-more-resources");
const initialVisibleResources = 12;
const resourcesPerLoad = 6;

let visibleResourceCount = initialVisibleResources;
let currentFilteredResources = resourcesData;

function formatLabel(text) {
    return String(text)
        .replaceAll("-", " ")
        .replace(/\b\w/g, function(letter) {
            return letter.toUpperCase();
        });
}

function formatLabels(value) {
    if (Array.isArray(value)) {
        return value.map(formatLabel).join(", ");
    }

    return formatLabel(value);
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

            <span class="resource-level">${formatLabels(resource.level)}</span>
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

function resourceMatchesSearch(resource, searchTerm) {
    const searchableText = `
        ${resource.title}
        ${resource.categories.join(" ")}
        ${Array.isArray(resource.level) ? resource.level.join(" ") : resource.level}
        ${resource.type}
        ${resource.description}
        ${resource.tags.join(" ")}
    `.toLowerCase();

    return searchableText.includes(searchTerm);
}

function filterResources() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;
    const selectedType = typeFilter.value;

    const filteredResources = resourcesData.filter(function(resource) {
        const matchesSearch = resourceMatchesSearch(resource, searchTerm);
        const matchesCategory = selectedCategory === "all" || resource.categories.includes(selectedCategory);
        const matchesLevel = selectedLevel === "all" || getResourceLevels(resource).includes(selectedLevel);
        const matchesType = selectedType === "all" || resource.type === selectedType;

        return matchesSearch && matchesCategory && matchesLevel && matchesType;
    });

    visibleResourceCount = initialVisibleResources;
    renderResources(filteredResources);
}

function renderResources(resources) {
    resourceGrid.innerHTML = "";
    currentFilteredResources = resources;

    resources.slice(0, visibleResourceCount).forEach(function(resource) {
        const card = createResourceCard(resource);
        resourceGrid.appendChild(card);
    });

    updateResourceCount(resources.length, Math.min(visibleResourceCount, resources.length));
    updateEmptyState(resources.length);
    updateShowMoreButton(resources.length);
}

function getResourceLevels(resource) {
    if (Array.isArray(resource.level)) {
        return resource.level;
    }

    return [resource.level];
}

function updateResourceCount(totalCount, visibleCount) {
    if (totalCount === 1) {
        resourceCount.textContent = "Showing 1 resource";
    } else if (totalCount > visibleCount) {
        resourceCount.textContent = `Showing ${visibleCount} of ${totalCount} resources`;
    } else {
        resourceCount.textContent = `Showing ${totalCount} resources`;
    }
}

function updateEmptyState(count) {
    if (count === 0) {
        emptyState.classList.add("is-visible");
    } else {
        emptyState.classList.remove("is-visible");
    }
}

function updateShowMoreButton(totalCount) {
    if (totalCount > visibleResourceCount) {
        showMoreButton.classList.add("is-visible");
    } else {
        showMoreButton.classList.remove("is-visible");
    }
}

function showMoreResources() {
    visibleResourceCount += resourcesPerLoad;
    renderResources(currentFilteredResources);
}

function clearFilters() {
    searchInput.value = "";
    categoryFilter.value = "all";
    levelFilter.value = "all";
    typeFilter.value = "all";

    filterResources();
}

searchInput.addEventListener("input", filterResources);
categoryFilter.addEventListener("change", filterResources);
levelFilter.addEventListener("change", filterResources);
typeFilter.addEventListener("change", filterResources);
clearFiltersButton.addEventListener("click", clearFilters);
showMoreButton.addEventListener("click", showMoreResources);

renderResources(resourcesData);
