# Zainab Aljarrash – Personal Portfolio

A responsive personal portfolio website created for SWE363 Assignment 3. The website introduces me, presents my projects and interests, provides a contact form and professional contact links, and displays live information from my GitHub profile.

This version builds on my previous portfolio by adding GitHub API integration, repository search and sorting, improved error handling, and performance enhancements.

## Features

- Responsive layout for desktop, tablet, and mobile devices.
- Live project search that filters projects while the user types.
- Project count and a clear message when no projects match.
- Contact form validation with error and confirmation messages.
- Light and dark themes.
- Theme preference saved using `localStorage`.
- Greeting based on the current time.
- Smooth animations, transitions, and hover effects.
- Automatic copyright year.
- University email and LinkedIn links.
- Live GitHub profile information retrieved using the GitHub API.
- Dynamic display of public GitHub repositories.
- Repository search by name or description.
- Repository sorting by recently updated, name, or creation date.
- User-friendly loading and error messages for GitHub data.
- Retry option if GitHub information cannot be loaded.
- Lazy loading for project images to improve page-loading performance.

## Dynamic Functionality

The project search reads the text entered by the user and compares it with the content of each project card. Matching projects remain visible, while other projects are hidden. The result count also updates automatically.

The contact form checks that the name and message are not empty and that the email has a valid format. It displays helpful messages when the input is invalid and a confirmation when the form is completed correctly.

The GitHub section uses the GitHub API to retrieve my public profile and repository information. Visitors can search repositories by name or description and sort the results by the most recently updated, alphabetically by name, or by creation date. Filtering and sorting work together so that the selected sorting option is applied to the current search results.

The website also handles GitHub API loading and failure states. If the information cannot be retrieved, a user-friendly error message and retry option are displayed.

## Technologies Used

- HTML5 for page structure.
- CSS3 for styling, responsive design, themes, and animation.
- JavaScript for search, validation, API integration, sorting, dynamic text, and theme storage.
- GitHub REST API for retrieving live profile and repository information.
- Git and GitHub for version control.
- Chrome Lighthouse for performance and quality testing.

## Project Structure

```text
202347030-ZainabAljarrash-assignment3/
├── assets/
│   └── images/
│       ├── networking-assistant.jpg  # Image for the Networking Assistant project
│       └── seraj-project.jpg         # Image for the Seraj project
├── css/
│   └── styles.css                    # Layout, themes, responsive design, and animations
├── docs/
│   ├── ai-usage-report.md            # Explanation of how AI assisted the project
│   └── technical-documentation.md    # Details about the technical implementation
├── js/
│   └── script.js                     # Search, validation, GitHub API, sorting, theme, greeting, and year functions
├── .gitignore                        # Files and folders Git should ignore
├── index.html                        # Main structure and content of the portfolio
└── README.md                         # Project description, features, and setup instructions
```

## How to Run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Make sure an internet connection is available to load the live GitHub information.

No installation, package manager, or backend is required.

## How to Use

- Use the navigation links to move between sections.
- Type in the project search box to filter the project cards.
- Use the theme button to switch between light and dark modes. The selected theme is remembered when the page is revisited.
- Search the GitHub repositories by name or description.
- Use the repository sorting menu to arrange repositories by recent update, name, or creation date.
- Select **View Repository** to open a repository on GitHub.
- Complete the contact form to test its validation and feedback.

Note: The contact form is a demonstration and does not send data to a server. The GitHub section requires an internet connection because its information is retrieved from the GitHub API.

## Performance

The website was reviewed and tested for loading performance and efficiency. Project images use lazy loading so that images lower on the page do not need to load immediately when the website opens.

The image file sizes and dimensions were reviewed to determine whether additional resizing or compression was necessary. The JavaScript also reuses the GitHub repository data after it is retrieved instead of making a new API request whenever the visitor searches or changes the sorting option.

The final website was tested with Chrome Lighthouse. The results were:

- Performance: **99**
- Accessibility: **100**
- Best Practices: **96**
- SEO: **100**

## AI Use

I used ChatGPT as a supporting tool during Assignment 3 for code development, debugging, and review. It assisted me with implementing and refining the GitHub API integration, including retrieving profile and repository data, handling API errors, and developing the repository search and sorting functionality. I also used it to review UI/UX decisions, performance improvements, and documentation requirements.

I reviewed and modified the suggested solutions to fit the structure and design of my existing portfolio. I tested the implemented functionality in the browser and used Chrome Lighthouse to evaluate the final website's performance, accessibility, best practices, and SEO.

More details are available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Documentation

- [AI Usage Report](docs/ai-usage-report.md)
- [Technical Documentation](docs/technical-documentation.md)
