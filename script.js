// script.js

// Function to handle button click
function handleClick() {
    alert("Button was clicked!");
}

// Function to add a new fruit to the list
function addFruit() {
    const fruitInput = document.getElementById("fruitInput");
    const fruitList = document.getElementById("fruitList");
    
    if (fruitInput.value.trim() !== "") {
        const newFruit = document.createElement("li");
        newFruit.textContent = fruitInput.value;
        fruitList.appendChild(newFruit);
        fruitInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a fruit name.");
    }
}

// Add event listener to the buttons
document.getElementById("myButton").addEventListener("click", handleClick);
document.getElementById("addFruitButton").addEventListener("click", addFruit);