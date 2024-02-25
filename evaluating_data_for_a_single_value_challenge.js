//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
const has300 = bowlingScores.includes(300);
console.log(`Has 300: ${has300}`);

//Challenge Question #2
//Are some of the scores under 150?
const under150 = bowlingScores.some(score => score < 150);
console.log(`has score under 150: ${under150}`);

//Challenge Question #3
//Is every score an even number?
const isEveryScoreEven = bowlingScores.every(score => score % 2 === 0);
console.log(`all scores are even: ${isEveryScoreEven}`);