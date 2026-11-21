document.addEventListener("DOMContentLoaded", function () {
    // Display a greeting based on the current time.
    const greetingElement = document.querySelector("#greeting");
    const currentHour = new Date().getHours();

    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent =
                "Good morning! Welcome to my portfolio.";
        } else if (currentHour < 18) {
            greetingElement.textContent =
                "Good afternoon! Welcome to my portfolio.";
        } else {
            greetingElement.textContent =
                "Good evening! Welcome to my portfolio.";
        }
    }

    // Automatically display the current year.
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Validate the demonstration contact form and provide feedback.
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm && formStatus) {
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");
        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const messageError = document.querySelector("#message-error");

        function showError(input, errorElement, message) {
            input.setAttribute("aria-invalid", "true");
            errorElement.textContent = message;
        }

        function clearError(input, errorElement) {
            input.removeAttribute("aria-invalid");
            errorElement.textContent = "";
        }

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let formIsValid = true;

            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(messageInput, messageError);

            formStatus.textContent = "";
            formStatus.className = "form-status";

            const visitorName = nameInput.value.trim();
            const visitorEmail = emailInput.value.trim();
            const visitorMessage = messageInput.value.trim();

            if (visitorName === "") {
                showError(
                    nameInput,
                    nameError,
                    "Please enter your name."
                );
                formIsValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(visitorEmail)) {
                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
                );
                formIsValid = false;
            }

            if (visitorMessage === "") {
                showError(
                    messageInput,
                    messageError,
                    "Please enter a message."
                );
                formIsValid = false;
            }

            if (!formIsValid) {
                formStatus.textContent =
                    "Please correct the highlighted fields.";
                formStatus.classList.add("error");

                contactForm
                    .querySelector('[aria-invalid="true"]')
                    .focus();

                return;
            }

            formStatus.textContent =
                `Thank you, ${visitorName}! The form was completed successfully.`;

            formStatus.classList.add("success");
            contactForm.reset();
        });
    }

    // Filter the project cards using the visitor's search.
    const projectSearch = document.querySelector("#project-search");
    const projectCards = document.querySelectorAll(".project-card");
    const searchStatus = document.querySelector("#project-search-status");
    const noProjectsMessage = document.querySelector("#no-projects-message");

    if (projectSearch && searchStatus && noProjectsMessage && projectCards.length > 0) {
        function filterProjects() {
            const searchText = projectSearch.value.trim().toLowerCase();
            let visibleProjects = 0;

            projectCards.forEach(function (card) {
                const projectInformation =
                    card.textContent.toLowerCase();

                const matchesSearch =
                    projectInformation.includes(searchText);

                card.hidden = !matchesSearch;

                if (matchesSearch) {
                    visibleProjects++;
                }
            });

            if (searchText === "") {
                searchStatus.textContent =
                    `Showing all ${projectCards.length} projects.`;
            } else if (visibleProjects === 1) {
                searchStatus.textContent = "1 project found.";
            } else {
                searchStatus.textContent =
                    `${visibleProjects} projects found.`;
            }

            noProjectsMessage.hidden = visibleProjects !== 0;
        }

        projectSearch.addEventListener("input", filterProjects);

        // Display the correct project count when the page first loads.
        filterProjects();
    }
    
    // Switch between light and dark themes.
    const themeToggle = document.querySelector("#theme-toggle");
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    if (themeToggle) {
        function updateThemeButton() {
            const darkModeIsActive =
                document.body.classList.contains("dark-theme");

            themeToggle.textContent =
                darkModeIsActive ? "Light mode" : "Dark mode";

            themeToggle.setAttribute(
                "aria-pressed",
                darkModeIsActive.toString()
            );
        }

        updateThemeButton();

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");

            const darkModeIsActive =
                document.body.classList.contains("dark-theme");

            localStorage.setItem(
                "portfolio-theme",
                darkModeIsActive ? "dark" : "light"
            );

            updateThemeButton();
        });
    }
});
// GitHub repositories
const githubUsername = "ZainabAlJarrash";

const githubProfile = document.querySelector("#github-profile");
const repositorySearch = document.querySelector("#repository-search");
const repositorySort = document.querySelector("#repository-sort");
const githubStatus = document.querySelector("#github-status");
const githubRetry = document.querySelector("#github-retry");
const repositoryGrid = document.querySelector("#github-repository-grid");

let repositories = [];

async function loadGitHubData() {
    githubStatus.textContent = "Loading GitHub information...";
    githubRetry.hidden = true;
    repositorySearch.disabled = true;
    repositorySort.disabled = true;
    repositoryGrid.setAttribute("aria-busy", "true");

    try {
        const profileResponse = await fetch(
            `https://api.github.com/users/${githubUsername}`
        );

        if (!profileResponse.ok) {
            throw new Error("Could not load GitHub profile.");
        }

        const profile = await profileResponse.json();

        githubProfile.innerHTML = `
            <img
                src="${profile.avatar_url}"
                alt="${profile.login}'s GitHub profile picture"
                class="github-avatar"
            >

            <div class="github-profile-info">
                <h3>${profile.name || profile.login}</h3>
                <p>@${profile.login}</p>
                <p>${profile.public_repos} public repositories</p>

                <a
                    href="${profile.html_url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View GitHub Profile
                </a>
            </div>
        `;

        const repositoriesResponse = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?per_page=100`
        );

        if (!repositoriesResponse.ok) {
            throw new Error("Could not load GitHub repositories.");
        }

        repositories = await repositoriesResponse.json();

        displayRepositories(repositories);

        repositorySearch.disabled = false;
        repositorySort.disabled = false;

        githubStatus.textContent =
            `${repositories.length} public repositories loaded.`;
    } catch (error) {
        githubStatus.textContent =
            "GitHub information could not be loaded. Please try again.";

        githubRetry.hidden = false;
        console.error(error);
    } finally {
        repositoryGrid.setAttribute("aria-busy", "false");
    }
}

function displayRepositories(repositoryList) {
    repositoryGrid.innerHTML = "";

    if (repositoryList.length === 0) {
        repositoryGrid.innerHTML = `
            <p class="no-results">
                No repositories match your search.
            </p>
        `;
        return;
    }

    repositoryList.forEach((repository) => {
        const card = document.createElement("article");
        card.classList.add("github-repository-card");

        card.innerHTML = `
            <h3>${repository.name}</h3>

            <p>
                ${repository.description || "No description available."}
            </p>

            <div class="repository-details">
    <span>
        ${repository.language || "Language not specified"}
    </span>
    <span>★ ${repository.stargazers_count}</span>
    <span>
        Updated ${new Date(repository.updated_at).toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        )}
    </span>
</div>

            <a
                href="${repository.html_url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Repository
            </a>
        `;

        repositoryGrid.appendChild(card);
    });
}

function updateRepositories() {
    const searchTerm = repositorySearch.value
        .trim()
        .toLowerCase();

    const filteredRepositories = repositories.filter((repository) => {
        const name = repository.name.toLowerCase();
        const description =
            (repository.description || "").toLowerCase();

        return (
            name.includes(searchTerm) ||
            description.includes(searchTerm)
        );
    });

    const sortedRepositories = [...filteredRepositories];

    if (repositorySort.value === "name") {
        sortedRepositories.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (repositorySort.value === "created") {
        sortedRepositories.sort(
            (a, b) =>
                new Date(b.created_at) - new Date(a.created_at)
        );
    } else {
        sortedRepositories.sort(
            (a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
        );
    }

    displayRepositories(sortedRepositories);
}

repositorySearch.addEventListener("input", updateRepositories);
repositorySort.addEventListener("change", updateRepositories);
githubRetry.addEventListener("click", loadGitHubData);

loadGitHubData();