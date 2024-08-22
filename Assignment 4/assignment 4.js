/* 4. Write a program that prompts the user to enter their score for a course assessment and determines their grade based on the following grading scale:
Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
Print the result on the HTML document.
3p
*/

'use strict';

const score = prompt('Enter our score for a course assessment for a grade:')

const result = document.querySelector('#grade')

if (score > 0 && score < 40) {
  result.innerHTML = 'Your grade is 0'
}
else if (score >= 40 && score < 52) {
  result.innerHTML = 'Your grade is 1'
}
else if (score >= 52 && score < 64) {
  result.innerHTML = 'Your grade is 2'
}
else if (score >= 64 && score < 76) {
  result.innerHTML = 'Your grade is 3'
}
else if (score >= 76 && score < 88) {
  result.innerHTML = 'Your grade is 4'
}
else if (score >= 88 && score < 101) {
  result.innerHTML = 'Your grade is 5'
}
else {
  result.innerHTML = 'No grade'
}
