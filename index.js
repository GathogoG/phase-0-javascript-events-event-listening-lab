function addingEventListener() {
  const input = document.getElementById('button');
  if (input) {
    input.addEventListener('click', function() {
      // Your event handling code goes here
    });
  } else {
    console.error("Element with id 'button' not found.");
  }
}