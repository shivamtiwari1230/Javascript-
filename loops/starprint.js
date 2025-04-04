function invertedMountain(n) {
    let mountain = ''; // Initialize an empty string to store the pattern

    // Loop to create the inverted mountain pattern
    for (let i = n; i >= 1; i--) {
        mountain += '*'.repeat(i) + '\n'; // Repeat '*' i times and add a newline
    }

    return mountain; // Return the final pattern
}
console.log(invertedMountain(5));



let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
}
