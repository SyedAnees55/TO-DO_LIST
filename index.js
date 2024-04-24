#! /usr/bin/env node
import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'what fruits do yu like? Name them'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'And who likes which fruit? Also tell their names?',
            default: 'false'
        }
    ] //and this a list []
    );
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
} //this is a while loop
