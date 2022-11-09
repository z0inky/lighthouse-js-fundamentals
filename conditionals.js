const raining = false;
const cold = false;
const temperature = 16;

// if statement
if (raining) {
  console.log('Don\'t forget your umbrella!');
}

// if / else statement
if (cold) {
  console.log('Make sure you pick up a scarf!');
} else {
  console.log('Short sleeves are fine.');
}

// if / else if / else statement
if (temperature < 0) {
  console.log('Make sure you pick up a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!');