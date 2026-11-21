# AI Usage Report

## AI Tool Used

I used ChatGPT while working on Assignment 2.

## How I Used ChatGPT

I used ChatGPT to help me choose interactive features that were suitable for my portfolio. After reviewing the assignment requirements, I selected a live project-search feature because it responds to user input and helps visitors find projects.

ChatGPT also helped me with:

- Planning the project-search feature.
- Explaining how JavaScript filters the project cards.
- Adding a result count and a message when no projects are found.
- Improving the contact form with validation and feedback.
- Suggesting accessibility improvements.
- Explaining some concepts as a revision before I started the tasks.

## Benefits and Challenges

AI helped me divide the assignment into smaller steps that could be implemented more easily. It also helped me understand how to check the structure of a valid email and allow users to search for specific project information.

One challenge was that the generated suggestions did not always match my project. The first validation suggestion required at least two characters for a name and at least ten characters for a message. I decided that these restrictions were unnecessary because a person may use a one-character name or send a short valid message.

I changed the validation so that the name and message only need to be nonempty. The email must still follow a valid email format.

## Learning Outcomes

Through this process, I learned how to:

- Use an `input` event listener to respond while a user types.
- Compare search text with project-card content.
- Show and hide elements using JavaScript.
- Update a result count dynamically.
- Validate form input and display helpful errors.
- Use `aria-live` and `aria-invalid` for accessibility.
- Save and restore a theme using `localStorage`.
- Respect reduced-motion accessibility preferences.

## Responsible Use and Modifications

I did not submit AI-generated code without reviewing it. I read the code, tested it, and asked for explanations when I did not understand something.

ChatGPT supported my learning and problem-solving, but I made the final decisions.

I tested the project-search feature using matching and nonmatching words. I also tested the form with empty fields, an invalid email, and valid input.

## Usage Log

| **ID** | **Tool (model)** | **Date** | **Purpose** | **Files affected** | **What you changed and how you verified it** |
| ------ | ---------------- | -------- | ----------- | ------------------ | -------------------------------------------- |
| C01 | ChatGPT 6 | 2026-10-18–2026-10-24 | Provided step-by-step guidance for planning, implementing, documenting, and reviewing Assignment 2. | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | I reviewed the suggestions, selected the parts that matched the assignment, changed unsuitable suggestions, and tested the final website. |
| A01 | ChatGPT 6 | 2026-10-18 | Suggested live project search as the main interactive feature and explained how it would meet the requirements. | `index.html`, `css/styles.css`, `js/script.js` | I integrated the feature into my existing portfolio and tested matching searches, nonmatching searches, the result count, and the empty-state message. |
| A02 | ChatGPT 6 | 2026-10-18 | Suggested contact-form validation and feedback. | `index.html`, `css/styles.css`, `js/script.js` | I removed the suggested minimum of two characters for names and ten characters for messages because I considered them unnecessary. I then tested empty, invalid, and valid input. |
| A03 | ChatGPT 6 | 2026-10-18 | Helped revise the README, technical documentation, and AI-use wording. | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | I adapted the wording to match my project, corrected the duplicated Project Structure heading, and checked that the documentation accurately described my code. |
| A04 | ChatGPT 6 | 2026-10-18 | Reviewed the final project for accessibility, formatting, and requirement coverage. | `index.html`, `js/script.js`, `README.md` | I added accessibility improvements, cleaned the formatting, retested the features, and confirmed that the required functionality worked. |
| A05 | ChatGPT 6 | 2026-10-24 | Explained the new AI declaration, evidence, and commit-credit requirements. | `docs/ai-usage-report.md`, AI Evidence ZIP | I compared the guidance with the instructor’s exact instructions and organized the report and evidence accordingly. |


## Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Zainab Aljarrash  
**Student ID:** 202347030  
**Date:** 2026-10-24  
**Signature:** Zainab Aljarrash
