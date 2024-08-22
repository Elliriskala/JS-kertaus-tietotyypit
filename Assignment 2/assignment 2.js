/* 2. Write a program that calculates the distance between two points on a 2D plane and displays the result in an HTML document. The program should prompt the user for the coordinates of two points (x, y) and then calculate the Euclidean distance between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)

In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer promts if you use string methods like split().
3p
*/

'use strict';

const x1 = prompt('Provide the x-coordinate:')
const y1 = prompt('Provide the y-coordinate:')

const x2 = prompt('Provide the destinations x-coordinate:')
const y2 = prompt('Provide the destinations y-coordinate:')

const result = document.querySelector('#distance')
const distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

result.innerHTML = `${distance}`

