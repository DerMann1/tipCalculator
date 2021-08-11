// Inputs
let billAmount = document.querySelector('#bill-amount');
let numberOfPeople = document.querySelector('#people');
let buttonCustom = document.querySelector('#custom-btn');

// Buttons
let button5 = document.querySelector('#five');
let button10 = document.querySelector('#ten');
let buttton15 = document.querySelector('#fifteen');
let button25 = document.querySelector('#twenty-five');
let button50 = document.querySelector('#fifty');

// Display
let tipPerPerson = document.querySelector('#tip-amount');
let totalPerPerson = document.querySelector('#total-amount');
let resetButton = document.querySelector('#reset');

//Icon
let userIcon = document.querySelector('.fa-user')

//variable to store the clicked button 
let clickedButton = null

// Calculations variables
// let bill = parseInt(billAmount.value);
// let tips = parseInt(buttonCustom.value);
// let peoples = parseInt(numberOfPeople.value);
// let totalCalculation = ((bill * (1 + tips / 100)) / peoples).toFixed(2);




// functions
let numberOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfButtons; i++)
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        if (this.classList.contains("tip-btn")) {
            let button = this.innerHTML;
            clickedButton = button.slice(0, 2)
            console.log(clickedButton);
        } else if (this.classList.contains("five-tip")) {
            let button = this.innerHTML;
            clickedButton = button.slice(0, 1)
            console.log(clickedButton);
        } else if (this.classList.contains("reset")) {
            billAmount.value = '';
            numberOfPeople.value = '';
            buttonCustom.value = '';
            totalPerPerson.innerHTML = '$0.00'
            tipPerPerson.innerHTML = '$0.00'
        } else console.log('none')
    })


console.log(totalPerPerson.innerHTML)





// Calculating the Total Value 
numberOfPeople.addEventListener('keyup', function() {
    if (billAmount.value.length == 0 || numberOfPeople.value.length == 0 || billAmount.value == 0) {
        totalPerPerson.innerHTML = '$0.00'
    } else if (numberOfPeople.value == 0) {
        totalPerPerson.innerHTML = '$0.00';
        this.classList.add('input-warning');
        setTimeout(() => numberOfPeople.classList.remove('input-warning'),
            3000);
    } else {
        if (buttonCustom.value.length == 0) {
            totalPerPerson.innerHTML = '$' + ((billAmount.value * (1 + clickedButton / 100)) / numberOfPeople.value).toFixed(2)
        } else {
            let customValue = parseInt(buttonCustom.value)
            totalPerPerson.innerHTML = '$' + (billAmount.value * ((1 + customValue / 100)) / numberOfPeople.value).toFixed(2)
        }

    };
});

// Calculating the Tip Value
numberOfPeople.addEventListener('keyup', function() {
    if (billAmount.value.length == 0 || numberOfPeople.value.length == 0 || billAmount.value == 0) {
        tipPerPerson.innerHTML = '$0.00'
    }
    //Create warning Message
    else if (numberOfPeople.value == 0) {
        tipPerPerson.innerHTML = '$0.00';
        let warningLabel = document.createElement('label');
        warningLabel.className = "warning";
        warningLabel.innerHTML = "Can not be zero";
        let labelDiv = document.querySelector('#for-label');
        labelDiv.insertBefore(warningLabel, numberOfPeople);
        setTimeout(() => document.querySelector('.warning').remove(),
            3000);
    } else {
        if (buttonCustom.value.length == 0) {
            tipPerPerson.innerHTML = '$' + ((billAmount.value * (clickedButton / 100)) / numberOfPeople.value).toFixed(2)
        } else {
            let customValue = parseInt(buttonCustom.value)
            tipPerPerson.innerHTML = '$' + ((billAmount.value * (customValue / 100)) / numberOfPeople.value).toFixed(2)
        }

    };
});




























// buttonSwitch(button)
// console.log(clickedButton)
// function buttonSwitch(buttonClicked) {
//     switch (buttonClicked) {
//         case "5%":
//             clickedButton = 15
//             break;

//         case "10%":
//             clickedButton = 10
//             break;

//         case "15%":
//             clickedButton = 15
//             break;

//         case "25%":
//             clickedButton = 25
//             break

//         case "50%":
//             clickedButton = 50
//             break;

//         default:
//             break;
//     }
// }