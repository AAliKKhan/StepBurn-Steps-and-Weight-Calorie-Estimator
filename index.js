import inquirer from "inquirer";
const calorieCounter = await inquirer.prompt([{
        "name": "STEPS",
        "type": "number",
        "message": "Enter number of steps you have walked"
    },
    {
        "name": "WEIGHT",
        "type": "number",
        "message": "Enter your weight in pounds"
    }
]);
const stepsPermile = 2500;
const caloriesPpoundPmile = 0.57;
let caloriesBurned = calorieCounter.STEPS / stepsPermile * calorieCounter.WEIGHT * caloriesPpoundPmile;
console.log(`You have burned ${caloriesBurned.toFixed(1)} calories`);
