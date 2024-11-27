// TASK:

// 1. Create a constant variable that retrieves the HTML element with ID inputData
// and log the variable to the console to verify correct retrieval.

// 2. Create a constant variable that retrieves the HTML element with ID submitData
// and log the variable to the console to verify correct retrieval.

// 3. Create a function with name displayData 
// and log a string saying "Im working" to the console

// 4. Use the variable submitData and add an event listener, listening for a click and activating the function displayData.

// 5. Add the method .value to retrieve the value from the input instead of the element itself.

// 6. Create a variable called inputDataValue that uses the variable inputData with the .value method.
// Add a log logging out the variable inputData inside of the function.

// 7. Create a constant variable called displayedData that retrieves the HTML element with the ID displayed data
// And log out the vaiable to verify that it is correct.

// 8. Create a constant variable called listData with the .createElement method inside the function.
// And log out the newly created variable to verify that it is made.

const inputData = document.querySelector("#inputData");
console.log(inputData);

const submitData = document.querySelector("#submitData");
console.log(submitData);

function displayData() {
    console.log("im working");

    const inputDataValue = inputData.value;
    console.log(inputDataValue);

    const displayedData = document.querySelector("#displayedData");
    console.log(displayedData);

    const listData.createElement
};

submitData.addEventListener("click", displayData);