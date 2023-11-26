console.log("hello world");

// Function to handle the deletion of an item
function handleDelete() {
  this.parentElement.remove();
}

// Select all delete buttons and add event listeners
var deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener('click', handleDelete);
});

// Select all edit buttons (for future functionality)
var editButtons = document.querySelectorAll('.edit-btn');
editButtons.forEach(function (editButton) {
  editButton.addEventListener('click', function () {
    // Add your edit functionality here when edit button is clicked
    console.log("Edit button clicked");
  });
});
