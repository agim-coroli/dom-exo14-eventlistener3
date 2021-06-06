// 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let h1 = document.querySelector("h1")

let fonct = () => {
    h1.style.backgroundColor = "red"
    h1.style.color = "white"
}

h1.addEventListener("dblclick", fonct)


// 2. Au hover du h3, son texte rétrécit d'un caractère 
let h3 = document.querySelector("h3")

let fonct1 = () => {
    h3.textContent = h3.textContent.substr(0, h3.textContent.length-1)
}

h3.addEventListener("mouseover", fonct1)




// 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let p = document.querySelector("p")

let fonct2 = () => {
    if (p.style.backgroundColor == "white" && p.style.color == "black") {
        p.style.backgroundColor = "blue";
        p.style.color = "gold";
    }
    else {
        p.style.backgroundColor = "white";
        p.style.color = "black";
    }
}

p.addEventListener("click", fonct2);