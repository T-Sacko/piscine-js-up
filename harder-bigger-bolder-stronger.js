export function generateLetters() {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < 120; i++) {
        // create div element
        const letterdiv = document.createElement('div')
        // get random number from uppercase alphabet
        const letter = alphabet[Math.floor(Math.random() * 26)]
        // add letter to the div
        letterdiv.textContent = letter
        // det font size dynamically
        letterdiv.style.fontSize = `${11 + i}px`
        // set font weight dynamically
        letterdiv.style.fontWeight = i < 40 ? '300' : (i < 80 ? '400' : '600');
        // add div to html body
        document.body.appendChild(letterdiv);
    }
}

