import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {

    const head = document.querySelector('head')
    const style = document.createElement('style')

    colors.forEach(color => {
        style.innerHTML += `.${color}{\n  background: ${color};\n\n`
    });

    head.appendChild(style)


}

function generateColdShades() {
    colors.forEach(color => {
        const name = color.toLowerCase();
        if (name.includes('aqua') || name.includes('blue') || name.includes('turquoise') || name.includes('green') || name.includes('cyan') || name.includes('navy') || name.includes('purple')) {
        const div = document.createElement('div')
        div.className(color)
        div.textContent(color)
        body.appendChild(div);
        }
    })
}

function choseShade(shade) {

    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.className!=shade) {
            div.classList.replace(classList[0],shade)   
        }
    })

}