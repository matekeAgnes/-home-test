function input() {
    const program = prompt("Please enter your program of study");
    const fullNames = prompt("Please enter your full names");
    const studentNumber = prompt("Enter your student number");
    const yearEntry = prompt("Please enter your year entry");

    
    document.getElementById("program").innerText = program;
    document.getElementById("fullNames").innerText = fullNames;
    document.getElementById("studentNumber").innerText = studentNumber;
    document.getElementById("yearEntry").innerText = yearEntry;
}


input();
