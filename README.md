# 📚 BookMood – Find Books Based on Your Mood

## 🌟 Overview

BookMood is a modern web application that helps users discover books based on their current mood. Instead of searching by title or author, users can explore curated book suggestions based on how they feel.

This project is built using the Open Library API and focuses on delivering a clean, interactive, and user-friendly experience.

---

## 🎯 Problem Statement

Many users struggle to decide what to read next. Traditional search-based systems require users to already know what they are looking for.

BookMood solves this by enabling **mood-based discovery**, making the process more intuitive and enjoyable.

---

## 💡 Features

* 🎭 Mood-based book discovery (Love, Fantasy, Horror, Motivation)
* 🔍 Search functionality for books
* ❤️ Add books to Wishlist
* 📱 Fully responsive design (mobile + desktop)
* ⏳ Loading states for better UX
* ❌ Error handling for failed API requests
* 😕 Empty state when no results found
* ⚡ Smooth UI interactions and hover effects

---

## 🛠️ Tech Stack

* React.js (Vite)
* JavaScript (ES6+)
* CSS (Custom styling)
* Axios (API requests)
* Open Library API

---

## 🔗 API Used

* https://openlibrary.org/search.json
* https://openlibrary.org/subjects/{subject}.json
* https://covers.openlibrary.org/b/id/{cover_id}-M.jpg

---

## 📂 Project Structure

```
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── BookCard.jsx
 │     ├── Loader.jsx
 │     ├── Error.jsx
 │   
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── Book.jsx
 │     ├── Wishlist.jsx
 │     └── Details.jsx
 │
 ├── services/
 │     └── api.js
 │
 ├── context/
 │     └── whislistcontext.jsx
        └── Themecontext.jsx
        
```

---

## 🚀 How It Works

1. User selects a mood from the homepage
2. Application fetches relevant books using Open Library API
3. Books are displayed in a clean card layout
4. Users can save books to their wishlist
5. Wishlist is stored using LocalStorage

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

* Mobile devices
* Tablets
* Desktop screens

---

## ⚠️ Edge Cases Handled

* Slow network → Loading spinner shown
* API failure → Error message with retry option
* No results → Empty state message displayed

---

## 🔥 Future Improvements

* Dark mode 🌙
* Infinite scroll
* User authentication
* Personalized recommendations

---

## 👩‍💻 Author

Silvi Maheshwari
Frontend Developer | React | JavaScript

---

## 🌐 Live Demo

(https://visionary-bavarois-edbbd3.netlify.app/)

---

## 📌 GitHub Repo

(👉 Add your repository link here)

---
