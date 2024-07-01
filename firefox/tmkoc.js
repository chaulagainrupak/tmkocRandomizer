function saveInputValues() {
    const startValue = document.getElementById('start').value;
    const endValue = document.getElementById('end').value;
    localStorage.setItem('startValue', startValue);
    localStorage.setItem('endValue', endValue);
}

function loadInputValues() {
    const startValue = localStorage.getItem('startValue');
    const endValue = localStorage.getItem('endValue');
    if (startValue !== null) {
        document.getElementById('start').value = startValue;
    }
    if (endValue !== null) {
        document.getElementById('end').value = endValue;
    }
}

function redirectToTMKOCSearch() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);

    // Input validation
    if (isNaN(start) || isNaN(end) || start > end) {
        alert("Please enter valid start and end values.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    const newURL = `https://www.youtube.com/results?search_query=tmkoc+${randomNumber}`;
    window.open(newURL, '_blank');
    const audio = new Audio('aePapaJi.mp3');
    audio.play();
}

document.addEventListener('DOMContentLoaded', () => {
    loadInputValues(); // Load saved values when the page loads

    const button = document.getElementById('randomizer');
    if (button) {
        button.addEventListener('click', redirectToTMKOCSearch);
    }

    // Add event listeners to save input values on change
    document.getElementById('start').addEventListener('input', saveInputValues);
    document.getElementById('end').addEventListener('input', saveInputValues);
});
