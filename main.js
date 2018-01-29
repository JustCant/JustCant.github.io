//Variables
const acc = document.getElementsByClassName('accordion');
const primary = document.getElementById('primary');
const secondary = document.getElementById('secondary');
const tertiary = document.getElementById('tertiary');
const arrow = document.getElementById('arrow');
const galleryProj = document.getElementById('galleryProj');
let i;

function secondaryOpacity() {
    secondary.style.opacity = 1;
}

function tertiaryOpacity() {
    tertiary.style.opacity = 1;
    arrow.style.opacity = 1;
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}

window.addEventListener('load', function() {
    primary.style.opacity = 1;
    setTimeout(secondaryOpacity, 2000);   
    setTimeout(tertiaryOpacity, 4000);
});