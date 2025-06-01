# 🧾 Multi-Step User Form & Dashboard - Next.js App

This is a modern web app built with **Next.js + TypeScript** that allows users to fill out a multi-step form and view all users (fetched from an API and locally added) on a searchable dashboard.

---

## ✨ Features

- ✅ Multi-step form using React Context (Step 1: Basic Info → Step 2: Address Info → Step 3: Confirm)
- ✅ Save form data to `localStorage`
- ✅ Final submitted user appears in the Dashboard
- ✅ Dashboard displays:
  - Users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
  - Locally added user
- ✅ Search by **name** or **city**
- ✅ Routing with Next.js (`/add-user`, `/dashboard`)
- ✅ Clean, responsive UI with Tailwind CSS
- ✅ Toast notifications with `react-hot-toast`

---

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Pages, Routing)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Context API](https://reactjs.org/docs/context.html)
- [react-hot-toast](https://react-hot-toast.com/)
- LocalStorage (for form data persistence)
- JSONPlaceholder API (mock user data)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/mamta-vyas/user-dashboard.git
cd user-dashboard
2. Install dependencies

npm install
# or
yarn

3. Start the development server
npm run dev
# or
yarn dev
App runs at: http://localhost:3000

🧭 Routes
Route	Description
/	Redirects to /dashboard/AddUserPage
/dashboard/AddUserPage	Multi-step user form
/dashboard	Displays users + search bar

📝 Form Fields
Step	Fields
Step 1	name, email, phone
Step 2	street, city, zip
Step 3	Confirmation before submit

Form state is managed via React Context and stored in localStorage.

🗂️ Project Structure

.
├── README.md
├── components
│   ├── Header.tsx
│   └── StepForm
│       ├── StepOne.tsx
│       ├── StepThree.tsx
│       └── StepTwo.tsx
├── context
│   └── FormContext.tsx
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   ├── dashboard
│   │   ├── AddUserPage.tsx
│   │   └── index.tsx
│   └── index.tsx
├── postcss.config.mjs
├── public
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── styles
│   ├── Home.module.css
│   ├── form.module.css
│   └── globals.css
├── tsconfig.json
└── utils
    ├── api.ts
    └── validation.ts

10 directories, 30 files

🔍 Search Functionality
The dashboard supports real-time search by:

Name

City

Matching is case-insensitive and works for both fetched and submitted users.

🔧 Utility Modules
utils/validation.ts → Handles reading/writing user data to localStorage

types/api.ts → Defines the User TypeScript interface

Dark mode toggle



💡 Future Enhancements
Form validation (using react-hook-form or zod)

Edit/delete users from dashboard

Backend API for permanent storage

Pagination on dashboard



🙌 Acknowledgements
JSONPlaceholder — for sample user data

Tailwind CSS — for styling

React Hot Toast — for toast notifications

🧑‍💻 Author
Made with ❤️ by Your Name