# AI Usage Report

## AI Tool Used

I used ChatGPT while working on Assignment 3.

## How I Used ChatGPT

I used ChatGPT to help me review the Assignment 3 requirements and develop the new functionality while building on my existing portfolio from Assignment 2.

The main AI-assisted task was the GitHub API integration. ChatGPT helped me understand how to retrieve public GitHub profile and repository information and how to connect the retrieved data to the existing website.

ChatGPT also helped me with:

- Planning the GitHub profile and repository section.
- Understanding how `fetch()`, `async`, and `await` are used to retrieve API data.
- Displaying repository information dynamically.
- Adding repository search and sorting functionality.
- Combining filtering and sorting so that both controls work together.
- Handling missing GitHub information such as empty descriptions.
- Adding loading, error, and retry behavior for API requests.
- Reviewing the GitHub section's layout and responsive design.
- Reviewing performance improvements such as lazy loading.
- Interpreting Lighthouse results.
- Reviewing the Assignment 3 requirements and documentation.

## Benefits and Challenges

AI helped me divide the new Assignment 3 requirements into smaller steps and understand how the different parts of the GitHub API integration worked together. It was especially useful for explaining the process of requesting data, storing repository information, filtering it, sorting it, and displaying the final results.

One challenge was deciding which suggested information and interface elements were most useful for my portfolio. I reviewed the suggested repository content and kept useful information such as the programming language, GitHub stars, and repository link. I later added the last updated date because it makes the “Recently updated” sorting option clearer to visitors.

I also adjusted the suggested visual design instead of using it exactly as provided. For example, I increased the width of the GitHub profile and repository controls and changed the alternating section backgrounds so that the GitHub and Skills and Interests sections were visually separated while remaining consistent with the rest of the portfolio.

During performance review, I checked the actual image sizes before making changes rather than compressing them unnecessarily. The images were already reasonably sized, so I kept them and used lazy loading to improve loading behavior.

## Learning Outcomes

Through this process, I learned how to:

- Use `fetch()` to request information from an external API.
- Use `async` and `await` to manage asynchronous operations.
- Check whether an API response was successful before processing it.
- Convert API responses into JavaScript objects using `.json()`.
- Store retrieved repository information in an array.
- Dynamically create repository cards using JavaScript.
- Filter repositories by their name or description.
- Sort repositories by name, creation date, or update date.
- Combine filtering and sorting in the same update process.
- Handle missing API data using fallback values.
- Use `try`, `catch`, and `finally` for API error handling.
- Provide loading, error, and retry feedback to users.
- Avoid unnecessary API requests by reusing previously retrieved data.
- Improve image loading using lazy loading.
- Use Chrome Lighthouse to evaluate website performance, accessibility, best practices, and SEO.

## Responsible Use and Modifications

I did not submit AI-generated code without reviewing it. I read the code, tested it, and asked for explanations when I did not understand something.

ChatGPT supported my learning and problem-solving, but I made the final decisions.

For the GitHub integration, I tested that profile and repository information loaded correctly, repository searches returned the expected results, and each sorting option changed the repository order correctly. I also tested search and sorting together.

I tested the error-handling behavior by temporarily using an invalid GitHub username. This allowed me to confirm that the error message appeared, the repository controls remained unavailable, and the retry option worked. I then restored my correct GitHub username and confirmed that the information loaded normally again.

I also reviewed the visual suggestions and adjusted the GitHub section to match the existing design rather than replacing the website's established styling.

For performance, I reviewed the project images and added lazy loading. I then tested the website using Chrome Lighthouse. The final test produced a Performance score of 99, Accessibility score of 100, Best Practices score of 96, and SEO score of 100.

## Usage Log

| **ID** | **Tool (model)** | **Date** | **Purpose** | **Files affected** | **What you changed and how you verified it** |
| ------ | ---------------- | -------- | ----------- | ------------------ | -------------------------------------------- |
| C01 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Provided step-by-step support for reviewing the Assignment 3 requirements, implementing the GitHub API feature, reviewing performance, and updating documentation. | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | I reviewed the suggestions and implemented only the changes that matched my existing portfolio and the assignment requirements. I tested the functionality in the browser and reviewed the final results. |
| A01 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Assisted with the GitHub API integration, including profile/repository loading, repository display, search, sorting, and error handling. | `index.html`, `js/script.js` | I integrated the functionality into my existing website, modified the presentation and displayed information, and tested loading, filtering, sorting, combined search/sort behavior, and API failure/retry behavior. |
| A02 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Suggested styling for the GitHub profile, controls, and repository cards. | `css/styles.css`, `index.html` | I adapted the styling to the existing design, increased the content width, adjusted alternating section backgrounds, and checked the result in light and dark modes. |
| A03 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Reviewed performance requirements and suggested appropriate optimizations and testing. | `index.html`, `docs/technical-documentation.md`, `README.md` | I reviewed the actual image sizes before changing them, added lazy loading, fixed form autocomplete information, and ran Lighthouse. The final Incognito test scored 99 Performance, 100 Accessibility, 96 Best Practices, and 100 SEO. |
| A04 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Assisted with updating the Assignment 3 README and technical documentation to describe the implemented functionality and testing. | `README.md`, `docs/technical-documentation.md` | I kept relevant content from Assignment 2, added the new Assignment 3 implementation details, and checked the documentation against the actual website and assignment requirements. |


## Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Zainab Aljarrash  
**Student ID:** 202347030  
**Date:** 2026-11-21 
**Signature:** Zainab Aljarrash
