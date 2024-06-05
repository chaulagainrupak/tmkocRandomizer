

//This was for testing purpose as i am new to making extentions!
// window.onload = function(){
//     window.open("https://google.com");
// }


function redirectToTMKOCSearch() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    const newURL = `https://www.youtube.com/results?search_query=tmkoc+${randomNumber}`;
    window.open(newURL, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomizer');
    if (button) {
        button.addEventListener('click', redirectToTMKOCSearch);
    }
});