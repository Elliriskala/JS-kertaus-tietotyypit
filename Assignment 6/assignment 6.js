/* Write a program that prompts the user to enter a positive integer and generates a multiplication table up to that number using a for loop. The multiplication table displays the product of each pair of numbers from 1 to the entered number.
Your program should follow these steps:

Write JavaScript code that prompts the user to enter a positive integer using the prompt() function. Store the user's input in a variable.
Convert the user's input from a string to a number.
Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.
Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document.

Hints:

Define a variable to hold the user's input.
Use nested for loops to generate the multiplication table.
Calculate the product of the current row and column values inside the nested loops.
Display each product in a formatted way to create the multiplication table on the HTML document.
6p.
*/

'use strict';

const input = prompt('Enter a positive integer:');
const num = parseInt(input, 10);

const integer = document.querySelector('#num');
integer.insertAdjacentHTML('beforeend', num);

const target = document.querySelector('#target');

let multiplication;
for (let i=1; i<=num; i++) {
  let row = '<tr>';
  for (let j=1; j<=num; j++) {
    multiplication = i * j;
    row += `<td>${multiplication}</td>`;
  }
  row += '</tr>';
  target.insertAdjacentHTML('beforeend', row);
}

