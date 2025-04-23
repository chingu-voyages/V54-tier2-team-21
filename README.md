# 5TAR.ai ⭐
![logo-with-text-192@ light3x](https://github.com/user-attachments/assets/99dcca95-cb5f-4a90-8175-ad835cedfc79)


# 🔗 [Live preview](https://5starai.netlify.app/)

# Mobile V 1.0
![hero section](https://github.com/user-attachments/assets/a983de40-104d-49f6-9ae4-661e9855ccd7)

---

## Table of Contents

- [About Project](#about-project)
- [Features](#features)
- [How it works](#how-it-works)
- [Technologies & Dependencies used](#technologies--dependencies-used)
- [Prerequisites](#prerequisites)
- [Clone & Run locally](#clone--run-locally)
- [Team](#team)
- [Special Thanks](#special-thanks)

---

## About Project

5 Star AI is a mobile web app designed to help on-the-go users to build high quality prompts using a structured methodology: the Pentagram.

Our product will empower users to craft more effective, 5-star quality prompts and improve Gemini results.

---

## Features

- **Dictate your prompt:** Use your microphone to enter prompts so you can do it on the go

- **Create an account:** Create an account with us and view previous prompts or export the to pdf

---

## How it works

Use the pentagram methodology to build better prompts. Combine data for your Persona, Context, Task, Output and Contraint to build a better
prompt to send to the Gemini API. It will them display a formatted response from Gemini. You have the option of using audio dictation
for filling out these fields.

Log in to save prompts and view all of your previous prompts and export them to pdf.

---

## Technologies & Dependencies used

- **React:** for all the logic, many React features were used: components, useState, useEffect, functions...

- **Typescript:** for implementing types and catching bugs earlier.

- **React Hook Form:** for controlling form updates and reducing unnecessary renders.

- **Zod:** for creating validation schema.

- **React Icons:** for all the icons in the app.

- **React Router:** for all routing needs.

- **React Speech Recognition:** for audio dictation.

- **MUI:** for all styling, custom classes...

- **Django** for handling server-side logic, routing, database interaction

- **Django Rest Framework** for building RESTful API

- **PostgreSQL** for storing user data, prompts

- **SimpleJWT** for authentication using JSON Web Tokens

<br>

**dependencies:**

- "@emotion/react": "^11.14.0",
- "@emotion/styled": "^11.14.0",
- "@google/generative-ai": "^0.24.0",
- "@hookform/resolvers": "^4.1.3",
- "@mui/icons-material": "^6.4.8",
- "@mui/material": "^6.4.7",
- "@testing-library/jest-dom": "^6.6.3",
- "@testing-library/react": "^16.2.0",
- "@testing-library/user-event": "^14.6.1",
- "happy-dom": "^17.4.4",
- "react": "^19.0.0",
- "react-dom": "^19.0.0",
- "react-hook-form": "^7.54.2",
- "react-router-dom": "^7.5.0",
- "react-speech-recognition": "^4.0.0",
- "showdown": "^2.1.0",
- "zod": "^3.24.2"

**devDependencies:**

- "@eslint/js": "^9.21.0",
- "@types/react": "^19.0.10",
- "@types/react-dom": "^19.0.4",
- "@types/react-speech-recognition": "^3.9.6",
- "@types/showdown": "^2.0.6",
- "@vitejs/plugin-react": "^4.3.4",
- "eslint": "^9.21.0",
- "eslint-plugin-react-hooks": "^5.1.0",
- "eslint-plugin-react-refresh": "^0.4.19",
- "globals": "^15.15.0",
- "prettier": "3.5.3",
- "typescript": "~5.7.2",
- "typescript-eslint": "^8.24.1",
- "vite": "^6.2.0",
- "vitest": "^3.0.9"

**Backend dependencies:**

- asgiref==3.8.1
- Brotli==1.1.0
- certifi==2025.1.31
- cffi==1.17.1
- chardet==5.2.0
- charset-normalizer==3.4.1
- cssselect2==0.8.0
- Django==5.1.7
- django-cors-headers==4.7.0
- djangorestframework==3.15.2
- djangorestframework_simplejwt==5.5.0
- fonttools==4.57.0
- gunicorn==23.0.0
- idna==3.10
- packaging==24.2
- pillow==11.1.0
- psycopg2-binary==2.9.10
- pycparser==2.22
- pydyf==0.11.0
- PyJWT==2.9.0
- pyphen==0.17.2
- python-dotenv==1.1.0
- reportlab==4.3.1
- requests==2.32.3
- sqlparse==0.5.3
- tinycss2==1.4.0
- tinyhtml5==2.0.0
- urllib3==2.3.0
- weasyprint==65.0
- webencodings==0.5.1
- zopfli==0.2.3.post1

---

## Prerequisites

Ensure you have the following installed on your system:

    Node.js v18.00.0
    npm or yarn

---

## Clone & Run locally

Notice: For running this app locally, you will need .env keys to connect to the APIs which only the dev team of this project has

1. **Clone the Repository:**

    - On the GitHub repo page, click the green "Code" button.

    - Copy the HTTPS URL.

2. **Open the Terminal:**

    - Open the terminal by typing "cmd" in your desktop's start menu, **OR**

    - Right-click on the desktop and select "Git Bash Here" (if you have Git Bash installed), **OR**

    - Open Visual Studio Code's terminal by clicking "Terminal" -> "New Terminal" inside the editor.

3. **Navigate to Your Project Location:**

    - In the terminal, navigate to your desired location (e.g., desktop) using the command: `cd desktop`. Adjust the path if your project is located elsewhere.

    - Ensure that your terminal's address is inside the project folder.

4. **Clone the Repository:**

    - Run the command: `git clone /link/`. Replace `/link/` with the HTTPS URL from step 1.

5. **Enter the Project Directory:**

    - Navigate into the cloned repository by typing: `cd /folder-name/`. Replace `/folder-name/` with the name of the cloned folder.

6. **Install Dependencies:**

    - Run the command: `npm install` to install all the necessary dependencies.

7. **Start the Project:**

    - Run the command: `npm run dev` or `yarn dev` to start the project. You will need to manually open the browser address at [localhost:5173/](http://localhost:5173/)

---

## Backend Setup

1. **Clone the Repository:**

    - Open your terminal and run: `git clone https://github.com/chingu-voyages/v54-tier2-team-21-be`

2. **Navigate to the Backend Directory:**

    - Run the command: `cd v54-tier2-team-21-be`

3. **Create environment and install Dependencies:**

    - Run the command to create a virtual environment: `python3 -m venv env`
  
    - Activate the virtual environment:
       - On macOs/Linux: `source env/bin/activate`
       - On Windows: `env\script\activate`
  
    - Navigate to the ai_backend directory: `cd ai_backend`
  
    - Install dependencies: `pip install -r  requirements.txt`

4. **Create .env and fill in the data**

   - Create .env file in the root of the ai_backend folder.
  
   - Add the following configuration to you .env file:
<pre><code class="language-env">SECRET_KEY=your-secret-key
DEBUG=1
ALLOWED_HOSTS=localhost,127.0.0.1

DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_HOST=your-database-host
DB_PORT=5432

API_KEY=your-api-key-for-geminiAPI

EMAIL_HOST_USER=your-email-user
EMAIL_HOST_PASSWORD=your-email-password
EMAIL_HOST=your-email-host</code></pre>


   Replace placeholders values with your actual data

6. **Run migrations and start the server**
   - Run the database migrations: `python manage.py migrate`
  
   - Start the development server: `python manage.py runserver`

---

## Team 👨‍💻 👨‍💻

Voyage 54 - team 21. April 2025

- Mark O'Brien - FE Developer: [GitHub](https://github.com/thenotoriousob)
- Andreea Tohatan - Scrum Master: [GitHub](https://github.com/Andreea-A-T) / [LinkedIn](https://linkedin.com/in/andreea-anamaria-tohatan/)
- Niamh Brown - FE Developer: [GitHub](https://github.com/NiamhBrown) / [LinkedIn](https://www.linkedin.com/in/niamh-brown1/)
- Yusuf Mohsen - Product Designer: [GitHub](https://github.com/yusufmohsiin) / [LinkedIn](https://www.linkedin.com/in/yusuf-mohsiin/)
- Denys Melnyk - BE Developer: [GitHub](https://github.com/TheDrakl) / [LinkedIn](https://www.linkedin.com/in/denys-melnyk7/)
- Estelle Couture - Product Owner: [GitHub](https://github.com/Escargotte) / [LinkedIn](https://www.linkedin.com/in/estelle-couture-41422b47/)
- Adil Rahman - FE Developer: [GitHub](https://github.com/adil-rahman1) / [LinkedIn](https://www.linkedin.com/in/adil-rahman1/)
- Tibam Gisele - Scrum Master: [GitHub](https://github.com/Gisele-1) / [LinkedIn](https://www.linkedin.com/in/tibam-gisele-684781129)

---

### Special Thanks

We as a whole team would like to thank Chingu platform and community for this opportunity to learn, improve and collaborate. Thank you Chingu !

Chingu is a platform that helps developers and other people in tech related roles practice in-demand skills and accelerate their learning through collaboration and project-building.

Learn more about Chingu platform at https://www.chingu.io/

---
