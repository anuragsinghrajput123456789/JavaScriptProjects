
let string = "";
let memory = 0; // To store the memory value

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string); // Evaluate the expression
        document.querySelector("input").value = string;
      } catch {
        document.querySelector("input").value = "Error"; // Handle invalid expressions
        string = "";
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "M+") {
      // Add current value to memory
      memory += parseFloat(string || "0");
      console.log(`Memory: ${memory}`);
    } else if (e.target.innerHTML == "M-") {
      // Subtract current value from memory
      memory -= parseFloat(string || "0");
      console.log(`Memory: ${memory}`);
    } else if (e.target.innerHTML == "MR") {
      // Recall memory value
      string = memory.toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "√") {
      // Square root
      string = Math.sqrt(parseFloat(string || "0")).toString();
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "^") {
      // Add a power operator for further evaluation
      string += "**";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
