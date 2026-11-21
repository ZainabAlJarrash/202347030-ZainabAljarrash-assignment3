# Technical Documentation

## Project Overview

This project is a responsive and interactive personal portfolio created using HTML, CSS, and JavaScript. It introduces me, presents my projects and interests, provides my contact information, and displays live information from my GitHub profile.

Assignment 3 builds on the previous portfolio by adding external API integration, repository filtering and sorting, API error handling, and performance improvements. The existing project search, form validation, saved theme preferences, responsive design, and accessibility features are also maintained.

## Technologies Used

- HTML5 for the website structure and content.
- CSS3 for styling, responsive layouts, themes, and animations.
- JavaScript for dynamic behavior, validation, API requests, filtering, and sorting.
- GitHub REST API for retrieving live profile and repository information.
- `localStorage` for saving the selected theme.
- Chrome Lighthouse for performance and quality testing.
- Git and GitHub for version control.
- Live Server for local testing.

## HTML Structure

The page uses semantic sections for navigation, the hero area, About Me, projects, GitHub activity, interests, contact information, and the footer.

The Projects section includes a search field, project cards, a search-status message, and an empty-state message.

The GitHub Activity section includes an area for profile information, a repository search field, sorting options, loading and error status messages, a retry button, and a grid for dynamically generated repository cards.

The Contact section includes university email and LinkedIn links. It also contains a demonstration form with name, email, and message fields.

## CSS Design

CSS variables control the main colors, backgrounds, borders, and shadows. The variables change when the `dark-theme` class is active.

CSS Grid is used for the project, GitHub repository, and interest cards, while Flexbox is used for navigation and alignment.

The GitHub profile, repository controls, and repository cards use the same design variables as the rest of the website so that the new section remains consistent with the existing portfolio design.

Media queries adapt the layout for tablets and mobile devices. Transitions and hover effects provide visual feedback. Project cards also use a short reveal animation when they appear after filtering.

Alternating section backgrounds are used to visually separate adjacent areas of the portfolio.

The `prefers-reduced-motion` media query disables animations for visitors who request reduced motion.

## JavaScript Features

### Project Search

An `input` event listener detects what the user types in the project-search field. JavaScript converts the search text and project content to lowercase before comparing them.

Matching project cards remain visible, while cards that do not match are hidden. JavaScript also updates the number of visible projects. If there are no matches, a friendly empty-state message appears.

### Contact-Form Validation

A `submit` event listener prevents the demonstration form from refreshing the page.

JavaScript checks that:

- The name is not empty.
- The email follows a valid email format.
- The message is not empty.

Invalid fields receive an error message and an `aria-invalid` attribute. Focus moves to the first invalid field. When all entries are valid, the form displays a confirmation message and clears the fields.

### Dark Mode

The theme button adds or removes the `dark-theme` class. The selected theme is stored in `localStorage`, allowing the website to restore the visitor’s preference after the page is refreshed.

### Time-Based Greeting

JavaScript uses the current hour to display a morning, afternoon, or evening greeting.

### Automatic Year

JavaScript gets the current year and displays it automatically in the footer.

### GitHub API Integration

The GitHub section retrieves live information from the GitHub REST API using JavaScript's `fetch()` function.

The `loadGitHubData()` function first requests my public GitHub profile. After receiving a successful response, the JSON data is used to display my profile image, username, number of public repositories, and a link to my GitHub profile.

A second request retrieves my public repositories. The repository data is stored in a JavaScript array so it can be searched and sorted locally without making another API request whenever the visitor changes the controls.

The code uses `async` and `await` to handle the API requests in a readable sequence. The response is checked before its JSON data is processed.

### Repository Display

The `displayRepositories()` function receives a repository list and creates a card for each repository.

Each card displays useful information such as the repository name, description, programming language, last updated date, and a link to the repository.

Some GitHub fields may be empty. Fallback text is used when information such as a repository description or programming language is unavailable.

If filtering produces no matching repositories, the website displays a clear no-results message instead of leaving the section empty.

### Repository Search and Sorting

The `updateRepositories()` function combines repository filtering and sorting.

First, the visitor's search text is converted to lowercase and compared with each repository's name and description. Only matching repositories are retained.

The filtered repositories are then copied and sorted according to the selected option:

- Recently updated.
- Name from A to Z.
- Newest created.

Combining both operations in one function means that searching and sorting work together. For example, a visitor can search for a repository and then change the sorting option without losing the current search.

The repository data is processed locally after the initial API request, avoiding unnecessary repeated requests to GitHub.

### API Error Handling

The GitHub API requests use `try`, `catch`, and `finally` to handle different outcomes.

While information is loading, the repository controls are disabled and the repository grid reports a busy state.

If an API request fails, the website displays a user-friendly error message and makes the **Try again** button available. Selecting this button runs the GitHub loading function again.

When the request succeeds, the search and sorting controls are enabled and the number of loaded public repositories is displayed.

## State Management

The website uses `localStorage` to remember the visitor's selected theme.

When the visitor changes between light and dark mode, JavaScript stores either `light` or `dark` under the `portfolio-theme` key. When the website is opened again, JavaScript reads the saved value and restores the appropriate theme.

This allows the interface to remain consistent across page refreshes instead of resetting the visitor's preference each time.


## Accessibility

- Form fields have connected labels.
- Contact form fields include appropriate autocomplete information.
- Error and status messages use `aria-live`.
- Invalid fields use `aria-invalid`.
- Keyboard focus styles are visible.
- The theme button reports whether dark mode is active.
- The GitHub repository grid reports when API information is loading.
- Reduced-motion preferences are respected.

## Performance Optimization

The website was reviewed for unnecessary loading and repeated processing.

Project images use the `loading="lazy"` attribute so images lower on the page do not need to load immediately when the website first opens.

The dimensions and file sizes of the project images were also reviewed. They were already suitable for the website, so additional compression or resizing was not necessary.

GitHub repository information is requested once and stored in a JavaScript array. Searching and sorting then operate on the stored data instead of sending a new API request after every user interaction.

The website was tested using Chrome Lighthouse. The final results were:

- Performance: **99**
- Accessibility: **100**
- Best Practices: **96**
- SEO: **100**

## Testing

I tested the website using Live Server, browser developer tools, and Chrome Lighthouse.

I checked:

- Navigation links.
- Project search with matching and nonmatching words.
- Project count and empty-state feedback.
- Empty, invalid, and valid contact-form submissions.
- Light and dark themes.
- Saved theme preference after refreshing.
- GitHub profile loading.
- GitHub repository loading.
- Repository searches with matching and nonmatching terms.
- Repository sorting by update date, name, and creation date.
- Combined repository searching and sorting.
- GitHub loading and status messages.
- API error handling and retry behavior.
- Desktop, tablet, and mobile layouts.
- Images, university email, LinkedIn, GitHub profile, and repository links.
- Lazy-loaded project images.
- Browser console for JavaScript errors.
- Website performance and accessibility using Chrome Lighthouse.

## Limitations

The contact form demonstrates validation and feedback but does not send or store messages because the project does not include a backend or external form service.

The GitHub section depends on the availability of the GitHub API and an internet connection. If the API is unavailable or a request fails, live GitHub information cannot be displayed until a successful request is made.

The portfolio uses GitHub's public API without authentication, so requests are also subject to GitHub's public API rate limits.