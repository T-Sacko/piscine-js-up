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
  
    if (e.key.match(/[a-z]/)) {
        let div = document.createElement('div')
        let randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`
    
        div.classList.add('note')
        div.style.backgroundColor = randomColor
        div.innerHTML = e.key.toUpperCase()
        document.body.appendChild(div)
      }
  }

export { compose };
