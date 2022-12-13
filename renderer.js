document.addEventListener("DOMContentLoaded", () => {
    let lbl = document.createElement("label");

    lbl.innerText = "Created in Renderer.js!";
    
    document.querySelector("body").appendChild(lbl);
});