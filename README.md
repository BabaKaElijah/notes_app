# 📝 Notes App

A simple and responsive Notes App built with **HTML**, **CSS**, and **JavaScript**. This app allows users to create, edit, and delete notes directly in the browser — with all changes automatically saved using `localStorage`.

## 🚀 Features

- ✅ Create unlimited editable notes
- ✅ Delete notes with a single click
- ✅ Changes are automatically saved to `localStorage`
- ✅ Notes persist even after refreshing or closing the browser
- ✅ Clean and minimal UI with responsive design

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript 
- `localStorage` API

## 📸 Screenshots

![Screenshot of Notes App](images/Capture.PNG)

## 🛠️ How It Works

1. Click the **"Create Note"** button to add a new editable note.
2. Start typing — your notes are automatically saved.
3. Click the 🗑️ delete icon to remove a note.
4. Your notes are stored in your browser’s `localStorage`.

## 🗒️ Notes App HTML Structure

This is the basic HTML structure for the Notes App, which includes a button to create notes and a container to display them dynamically.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes App</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to your CSS file -->
  </head>
  <body>
    <div class="container">
      <h1>
        <img src="images/notes.png" alt="Notes Icon"> Notes
      </h1>

      <!-- Button to create new notes -->
      <button class="btn">
        <img src="images/edit.png" alt="Edit Icon"> Create Notes
      </button>

      <!-- Container where notes will be dynamically added -->
      <div class="notes-container">
        <!-- Notes will appear here as editable paragraphs -->
      </div>
    </div>

    <!-- Link to your JavaScript file -->
    <script src="script.js"></script>
  </body>
</html>
```

## 📝 Notes App Logic (JavaScript)

This app allows users to create, edit, and delete simple notes directly in the browser. All notes are saved to `localStorage` to persist across page reloads.

```javascript
// Select elements from the DOM
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// Show saved notes when the page loads
window.addEventListener('load', showNotes);

// Add a new note when the "Create" button is clicked
createBtn.addEventListener('click', () => {
  createNote('');
});

// Function to create a new editable note box
function createNote(text = '') {
  let inputBox = document.createElement('p'); // Note content
  let img = document.createElement('img');    // Delete icon

  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true'); // Allow text editing
  inputBox.innerText = text;

  img.src = 'images/delete.png'; // Image path for the delete icon
  img.className = 'delete-icon';

  // Delete note on icon click
  img.addEventListener('click', () => {
    inputBox.remove();
    updateStorage(); // Save after deletion
  });

  // Save note whenever user types
  inputBox.addEventListener('input', () => {
    updateStorage();
  });

  // Attach delete icon to note and add it to the container
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  inputBox.focus(); // Automatically focus on new note
  updateStorage(); // Save newly added note
}

// Save all current notes to localStorage
function updateStorage() {
  const allNotes = document.querySelectorAll('.input-box');
  const notes = [];

  allNotes.forEach(note => {
    notes.push(note.innerText.trim()); // Exclude delete icon from text
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes from localStorage and display them
function showNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes'));

  if (savedNotes) {
    savedNotes.forEach(noteText => {
      createNote(noteText);
    });
  }
}
```

## 📂 Project Structure
```
notes-app/
│
├── index.html # Main HTML file
├── style.css # App styling
├── script.js # JavaScript logic
├── images/
│ └── delete.png # Delete icon used in each note
│ └── Capture.PNG 
```

## 📦 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/notes-app.git
   ```
2. Open index.html in your browser to run the app.

## 🔒 Storage Info
All notes are stored locally in your browser via localStorage. No data is sent to any server.
## 🙌 Credits
Developed by Ellias Sithole
