document.addEventListener("keydown", function (event) {
    compose(event);
});

function compose(e) {
    if (e === undefined) {
      return;
    }
    
    if (e.key === "Escape") {
      document.querySelectorAll('.note').forEach(note => note.remove())
      return;
    }
  
    if (e.key === "Backspace") {
      const notes = document.querySelectorAll('.note')
      if (notes.length > 0) {
        notes[notes.length - 1].remove()
      }
      return;
    }
  
    const keyChar = e.key.toLowerCase();
  
    // Check if the key is a lowercase letter
    if (keyChar.charCodeAt(0) >= 97 && keyChar.charCodeAt(0) <= 122) {
      const div = document.createElement('div');
      div.classList.add('note');
      div.innerHTML = keyChar;
      div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
      document.body.appendChild(div);
    }
  }

export { compose };
