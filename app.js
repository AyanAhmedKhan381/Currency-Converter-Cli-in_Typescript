#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// create a currency conversion rate list in a variable
const currency = {
    USD: 1,
    PKR: 277.30,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.61,
    SAR: 3.75,
    JPY: 153.28,
    CAD: 1.38,
    BHD: 0.38,
    AED: 3.67,
};
console.log(chalk.bold.bgRed("\n\tWelcome_To_Code_With_Ayan_Cli_Currency Conversion \t\n"));
// create a program to take a user input
let useranswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter Currency From",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR", "JPY", "CAD", "BHD", "AED",]
    },
    {
        name: "to",
        message: "Enter Currency to",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR", "SAR", "JPY", "CAD", "BHD", "AED",]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
// create dynamic variables
let currencyfrom = currency[useranswer.from];
let currencyto = currency[useranswer.to];
let inputamount = useranswer.amount;
// using dynamic values for conversion
let convert = inputamount / currencyfrom;
let total = convert * currencyto;
// print amount
console.log(chalk.bold.bgGreenBright(total));
console.log(chalk.blue.bold("\nThanks for Using Our Services"));
