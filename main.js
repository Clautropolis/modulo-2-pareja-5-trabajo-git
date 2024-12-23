const face = document.querySelector (".js-face");
const head = document.querySelector (".js-head");



head.addEventListener ("mouseenter", ()=>{
    face.innerHTML = ";)";
});

head.addEventListener ("mouseleave", ()=>{
    face.innerHTML = ":)";
})