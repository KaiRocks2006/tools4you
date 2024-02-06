function calculatorClick() {
    // Replace 'subpage.html' with the actual URL of your subpage
    window.location.href = 'calculators.html';
  }  

document.getElementById('button1').addEventListener('click', function() {
    handleButtonClick('button1');
});

document.getElementById('button2').addEventListener('click', function() {
    navigateToCalculator('addition');
});

function handleButtonClick(buttonId) {
    // Add your logic here for each button click
    console.log(`Button ${buttonId} clicked`);
    // You can perform actions or navigate based on the button clicked
}

function navigateToCalculator(operation) {
    // Define the URLs for each calculator operation
    const calculatorURLs = {
        addition: 'addition-calculator.html',
        // Add URLs for subtraction, multiplication, and division as needed
    };

    // Use window.location.href to navigate to the appropriate calculator
    if (calculatorURLs.hasOwnProperty(operation)) {
        window.location.href = calculatorURLs[operation];
    }
}