# Megha Institutions: College Management System

React front end with an Express API and MongoDB-backed account registration and sign-in.

## Run it
1. Install Node.js and run `npm install`.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` to your MongoDB connection string.
   For a local MongoDB server, the example URI uses `mongodb://127.0.0.1:27017/megha_institutions`.
3. Run `npm run dev`. The Vite app is at http://localhost:5173 and the API is at http://localhost:3000.
4. Run `npm run build` to create the production front end in `/dist`.

The API stores account names, emails, roles and IDs in MongoDB. Passwords are hashed
with bcrypt before storage. Do not commit `.env`; configure `MONGODB_URI` in your
deployment environment as well.

## Pages (hash routes)
login, signup (shown first) · home, portals, about, contact, dashboard (after sign-in)
faq, terms, privacy (open to everyone)

## Where to edit
- data.js: portal modules, dashboard sample data, FAQ, Terms, Privacy, contact details
- *Page.jsx: one file per page
- main.css: all styling
- `server.js` and `models/User.js`: API and MongoDB account model.
