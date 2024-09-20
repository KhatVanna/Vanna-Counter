let counter = 0;

const counterDisplay = document.getElementById('counter');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const cancelButton = document.getElementById('cancel');

// Update the display with animation
function updateDisplay(change) {
    counterDisplay.textContent = counter;
    
    // Animation class for visual change
    if (change === 'increase') {
        counterDisplay.classList.add('increase');
    } else if (change === 'decrease') {
        counterDisplay.classList.add('decrease');
    }
    
    setTimeout(() => {
        counterDisplay.classList.remove('increase', 'decrease');
    }, 300);
}

// Add function
addButton.addEventListener('click', () => {
    counter++;
    updateDisplay('increase');
});

// Subtract function
subtractButton.addEventListener('click', () => {
    counter--;
    updateDisplay('decrease');
});

// Cancel function to reset the counter
cancelButton.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});
