// Add button clicks for numbers and operators

// Define Special Keys

const specialKeys = ["AC", "DEL", "="];
var numberOfButtons = document.querySelectorAll(".btn").length;
let inputBox = document.querySelector("input");

for(let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;

        if(specialKeys.includes(buttonInnerHTML)) {
            functionKeys(buttonInnerHTML);
        }
        else {
            if(inputBox.value === "Error!") {
                inputBox.value = "";
            }
            inputBox.style.borderColor = "orange";
            inputBox.style.color = "white";

            inputBox.value += buttonInnerHTML;
        }
    });

}

// Separate function to handle special keys

function functionKeys(key) {
    switch (key) {
        
        case "AC" : 
        // Clear all input when "AC" is clicked
            inputBox.value = "";
            inputBox.style.borderColor = "orange";
            inputBox.style.color = "white";
        break;

        case "DEL" :
        // Delete last character when "DEL" is clicked
            let currentValue = inputBox.value;
            inputBox.value = currentValue.slice(0, -1);
        break;

        case "=" :
        // Evaluates the expression and shows the result or error
            let inputResult = inputBox.value;
            try {
                let evaluatedResult = eval(inputResult); 
                //The eval() method evaluates or executes an argument.
                inputBox.value = evaluatedResult;
            } 
            catch (error) {
                inputBox.value = "Error!"; 
                inputBox.style.borderColor = "red";
                inputBox.style.color = "red";
            }

        break;
    }
}