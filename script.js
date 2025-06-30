const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

//Show saved notes on the page load
window.addEventListener('load', showNotes);

// Create new note when "Create" button is clicked
createBtn.addEventListener('click', () => {
  createNote('');
});

// Function to create a note box
function createNote(text = '') {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');

  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  inputBox.innerText = text;

  img.src = 'images/delete.png';
  img.className = 'delete-icon';

  // Delete note on image click
  img.addEventListener('click', () => {
    inputBox.remove();
    updateStorage();
  });

  // Save to storage when typing
  inputBox.addEventListener('input', () => {
    updateStorage();
  });

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  inputBox.focus();
  updateStorage(); // Save after creating
}

// Save all notes to localStorage
function updateStorage() {
  const allNotes = document.querySelectorAll('.input-box');
  const notes = [];

  allNotes.forEach(note => {
    // Remove the image from saved text
    notes.push(note.innerText.trim());
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}

// Load saved notes
function showNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes'));

  if (savedNotes) {
    savedNotes.forEach(noteText => {
      createNote(noteText);
    });
  }
}