let clickCounter = 0;

document.getElementById('clickable-image').addEventListener('click', () => {
    clickCounter++;
    document.getElementById('click-counter').textContent = clickCounter;
});
