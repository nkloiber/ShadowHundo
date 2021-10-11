//displays a message to the user
function getNumbers() {

    let startValue = 0;
    let endValue = 100;

    //get the numbers from the UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    //validate our numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if they are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //both numbers and integers

        //display the numbers from start value to end value
        let numbers = generateNumbers(startValue, endValue);

        displayNumbers(numbers)
    } else {
        //One or MORE are not integers
    }
}

//generate numbers from startvalue to endvalue
function generateNumbers(startValue, endValue) {

    //0,1,2,3,4...
    let numbers = [];

    //loop over the numbers until we reach the end value
    for (let index = startValue; index <= endValue; index++) {

        //add each number to the array
        numbers.push(index);
    }
    //returns the array of numbers
    return numbers;

}

//display the numbers to the page
function displayNumbers(numbers) {

    //0 first indiex value
    //99 last index value
    //length = 100

    // 0,1,2,3,4,5,6
    let startValue = numbers[0];
    let endIndex = numbers.length; //=100

    let tableBody = document.getElementById("results");
    //Clears out previous results
    tableBody.innerHTML = "";

    for (let index = 0; index < endIndex; index++) {

        let tableRow = "";
        //get the actual number
        let number = numbers[index];

        if (number % 2 == 0) {
            //the number is even
            tableRow = `<tr><td class="evenDisplay">${number}</td></tr>`;
        } else {
            //the number is odd
            tableRow = `<tr><td>${number}</td></tr>`;

        }


        tableBody.innerHTML += tableRow;
    }
}