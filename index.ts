import inquirer from "inquirer";

const calorieCounter = await inquirer.prompt([
  {
    name: "STEPS",
    type: "number",
    message: "Enter number of steps you have walked",
  },
  {
    name: "WEIGHT",
    type: "number",
    message: "Enter your weight in pounds",
  },
]);

const stepsPermile: number = 2500;
const caloriesPpoundPmile: number = 0.57;

let caloriesBurned: number =
  (calorieCounter.STEPS / stepsPermile) *
  calorieCounter.WEIGHT *
  caloriesPpoundPmile;

console.log(`You have burned ${caloriesBurned.toFixed(1)} calories`);
