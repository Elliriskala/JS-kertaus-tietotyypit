/* 1. Write a program that prompts the user for a temperature in Celsius and converts it to Fahrenheit and Kelvin. The program should then display the converted temperatures in an HTML document.
Calculate the temperature in Fahrenheit by using the formula: F = (C * 9/5) + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.
2p
*/

'use strict';

const temperature = prompt('What is the temperature in Celcius?')
const result = document.querySelector('#fahrenheit')
const F = (temperature * (9/5) + 32)
result.innerHTML = `${F}`
