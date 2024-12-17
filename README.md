# Fay Appointment Booking with Insurance Verification

## Overview

This project is a simplified full-stack web application that simulates a basic appointment booking process with a rudimentary insurance verification feature. I built this application specifically while applying for the Software Engineer position at Fay, as their job description emphasizes building a "digital private practice for medical professionals that powers high quality care while handling complex payments and insurance billing behind the scenes."

While this is a simplified example, it demonstrates my understanding of core concepts relevant to Fay's work, including:

*   Interaction with patient and insurance data.
*   Building user interfaces for healthcare applications.
*   Developing systems that could potentially integrate with insurance providers.

## My Motivation

Fay's mission to make healthcare more accessible by simplifying the interaction between patients, providers, and insurance companies resonated deeply with me. I was particularly drawn to the challenge of building a platform that handles the complexities of insurance billing, allowing medical professionals to focus on providing care.

In the job description, Fay mentioned they are looking for someone "willing to learn whatever it takes to get the job done." This project was my way of demonstrating that proactive attitude. I researched some basic concepts related to insurance verification and built this application to showcase my ability to quickly grasp new concepts and apply them in a practical setting.

## Technologies Used

*   **Frontend:**
    *   **React:** I chose React for the frontend because of its component-based architecture, which makes it efficient for building user interfaces. It's also a highly in-demand skill in the industry, and its popularity suggests that Fay might be using it or considering it for their own technology stack.
    *   **JavaScript (ES6+):** I used modern JavaScript syntax and features to write clean and maintainable code.
    *   **HTML & CSS:** For structuring and styling the user interface. I kept the styling minimal to focus on functionality, but I'm comfortable using CSS frameworks like Tailwind CSS or component libraries like Material UI for more polished UIs.

*   **Backend:**
    *   **Node.js:** I chose Node.js for the backend because it allows me to use JavaScript for both the frontend and backend, creating a unified development experience.
    *   **Express.js:** I used Express as a framework for building the API. Express simplifies the process of creating routes, handling requests, and sending responses.

*   **Other:**
    *   **npm:** Used for managing project dependencies.
    *   **Git:** Used for version control.

## Features

*   **Appointment Booking Form:**
    *   Collects basic patient information (name, date, time, reason for visit).
    *   Allows selection of an insurance provider from a predefined list.

*   **Basic Insurance Verification:**
    *   Simulates a very basic insurance check. When a user selects an insurance provider, the application indicates whether that provider is "in-network" or "out-of-network" based on a hardcoded list.
    *   **Note:** This is a highly simplified representation of insurance verification. In a real-world scenario, this would involve integrating with external APIs or databases to get real-time insurance information.

*   **API Endpoints:**
    *   `/api/check-insurance`:  Accepts a POST request with the provider name and returns whether the provider is in-network.
    *   `/api/book-appointment`: Accepts a POST request with the appointment details. (Currently, it just logs the data to the console. In a real application, this would save the data to a database).
