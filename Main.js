// This is to select all the element  with the class 'color-button'
const buttons = document.querySelectorAll('.color-button');

// Thi is to Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //This is to Get the second class name of the clicked button (0,1)
        const color = button.classList[1];

        // This is to Change the background color based on the button's class
        if (color === 'red') {
            document.body.style.backgroundColor = 'red';
        } else if (color === 'lightgreen') {
            document.body.style.backgroundColor = 'lightgreen';
        } else if (color === 'lightblue') {
            document.body.style.backgroundColor = 'lightblue';
        } else if (color === 'olive') {
            document.body.style.backgroundColor = 'olive';
        } else if (color === 'grey') {
            document.body.style.backgroundColor = 'grey';
        } else if (color === 'yellow') {
            document.body.style.backgroundColor = 'yellow';
        } else if (color === 'pink') {
            document.body.style.backgroundColor = 'pink';
        } else if (color === 'purple') {
            document.body.style.backgroundColor = 'purple';
        } else if (color === 'lavender') {
            document.body.style.backgroundColor = 'lavender';
        } else if (color === 'white') {
            document.body.style.backgroundColor = 'white';
        } else if (color === 'black') {
            document.body.style.backgroundColor = 'black';
        }
    });
});