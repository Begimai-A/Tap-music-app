"use strict";

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound'),
        pads = document.querySelectorAll('.pads div'), // to select all the divs under the 'pads' class
        visual = document.querySelector('.visual'),
        colors = [
            '#52f3a5',
            '#f39688',
            '#80b6e9',
            '#f742f7',
            '#89fb78',
            '#f9fb78'
        ];
    let color = ['pink', 'yellow', 'orange', 'red', 'green', 'purple', 'gray'];
    // sound function
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0; // to reset
            sounds[index].play();
            // let randomColors = color[Math.floor(Math.random() * color.length)];
            // pad.style.background = randomColors;
            pad.style.opacity = 0.5;

            createBubbles(index);
        });

        // pad.addEventListener('mousemove', () => {
        //     pad.style.opacity = 0.5;

        // });

    });

    const createBubbles = (index) => {
        const bubbles = document.createElement('div');
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 1s ease';
        bubbles.addEventListener('animationend', () => {
            visual.removeChild(this);
        });
    };


});