const mainContainer = document.querySelector('.main-element');
const thanksElement = document.querySelector('.thanks-element')

const submitButton = document.getElementById('huge-button-1');
const rateAgainbutton = document.getElementById('huge-button-2');

const rating = document.querySelector('#opinion-result');
const rates = document.querySelectorAll('#btn');

submitButton.addEventListener('click', function() {
    mainContainer.classList.add('hidden');
    thanksElement.classList.remove('hidden');
})

rateAgainbutton.addEventListener('click', function() {
    mainContainer.classList.remove('hidden');
    thanksElement.classList.add('hidden');
})

rates.forEach((rate) => {
    rate.addEventListener('click', function() {
        rating.textContent = rate.textContent;
    })
})