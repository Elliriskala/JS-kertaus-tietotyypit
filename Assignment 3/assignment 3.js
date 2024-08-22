/* 3. Write a program that prompts the user to enter the lengths of three sides of a triangle and determines the type of triangle based on the side lengths. The program should classify the triangle as equilateral (all sides are equal), isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.
try to use &&, || and ! operators
3p
*/

'use strict';

const firstside = prompt('What is the lenght of the first side?')
const secondside = prompt('What is the lenght of the second side?')
const thirdside = prompt('What is the lenght of the third side?')

const result = document.querySelector('#triangle')

if (firstside == secondside && firstside == thirdside) {
  result.innerHTML = 'All sides are the same lenght, the triangle is an equilateral';
} else if (firstside != secondside && firstside != thirdside) {
    result.innerHTML = 'None of the sides are the same lenght, the triangle is a scalene';
} else {
    result.innerHTML = 'Two of the sides are the same lenght, the triangle is an isosceles';
}
