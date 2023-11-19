// Get references to HTML elements
let noteList = document.getElementById("noteList");
let newNote = document.getElementById("newNote");

// Function to add a new note
function addNote() {
    // Check if the input is empty
    if (newNote.value.trim() === "") {
        alert("Please enter a note.");
        return;
    }

    // Create a new list item for the note
    let noteItem = document.createElement("li");

    // Get the current date
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    // Set the inner HTML of the note item
    noteItem.innerHTML = `
        <span>${newNote.value}</span>
        <span class="date">${formattedDate}</span>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
    `;

    // Add the new note to the list
    noteList.appendChild(noteItem);

    // Clear the input field
    newNote.value = "";
}

// Function to edit a note
function editNote(button) {
    // Get the parent node (list item) of the button
    let noteItem = button.parentNode;

    // Get the span containing the note text
    let noteText = noteItem.querySelector("span");

    // Prompt the user to edit the note text
    let newText = prompt("Edit note:", noteText.textContent);

    // Update the note text if the user entered a new text
    if (newText !== null) {
        noteText.textContent = newText;
    }
}

// Function to delete a note
function deleteNote(button) {
    // Get the parent node (list item) of the button and remove it from the list
    let noteItem = button.parentNode;
    noteList.removeChild(noteItem);
}
