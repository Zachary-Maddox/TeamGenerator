const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const fs = require("fs")

const buildTeam = require("./src/buildTeam");
const inquirer = require("inquirer");

const employeeArray = [];

const engineerQuestions = (employeeInfo) => {
  inquirer
      .prompt([
          {
              message: "What is your Engineer GITHUB username?",
              type: "input",
              name: "engineer",
          },
      ])
      .then((answers) => {
          const myEngineer = new Engineer(
              employeeInfo.employeeName,
              employeeInfo.employeeId,
              employeeInfo.employeeEmail,
              answers.engineer
          );
          employeeArray.push(myEngineer);
          initialQuestion();
      })
      .catch((error) => {
          if (error.isTtyError) {
          } else {
          }
      });
};

const managerQuestions = (employeeInfo) => {
    inquirer
        .prompt([
            {
                message: "What is the managers Office Number?",
                type: "input",
                name: "manager",
            },
        ])
        .then((answers) => {
            const myManager = new Manager(
                employeeInfo.employeeName,
                employeeInfo.employeeId,
                employeeInfo.employeeEmail,
                answers.manager
            );
            employeeArray.push(myManager);
            initialQuestion();
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
};

const internQuestions = (employeeInfo) => {
    inquirer
        .prompt([
            {
                message: "What School are you attending?",
                type: "input",
                name: "intern",
            },
        ])
        .then((answers) => {
            const myIntern = new Intern(
                employeeInfo.employeeName,
                employeeInfo.employeeId,
                employeeInfo.employeeEmail,
                answers.intern
            );
            employeeArray.push(myIntern);
            initialQuestion();
            
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
};

const teamQuestions = () => {
    inquirer
        .prompt([
            {
                message: "What employee do you want to add?",
                type: "list",
                name: "employeeChoice",
                choices: ["Intern", "Manager", "Engineer"],
            },
            {
                message: "What is your employees Name?",
                type: "input",
                name: "employeeName",
            },
            {
                messsage: "What is your employees ID?",
                type: "input",
                name: "employeeId",
            },
            {
                message: "What is your employees Email?",
                type: "input",
                name: "employeeEmail",
            },
        ])
        .then((answers) => {
            if (answers.employeeChoice === "Intern") {
                internQuestions(answers);
            } else if (answers.employeeChoice === "Manager") {
                managerQuestions(answers);
            }else{
              engineerQuestions(answers);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
};

const initialQuestion = () => {
    inquirer
        .prompt([
            {
                message: "Would you like to add an Employee?",
                type: "confirm",
                name: "continue",
            },
        ])
        .then((answers) => {
            if (answers.continue) {
                teamQuestions();
            } else {
              const htmlTemplate = buildTeam(employeeArray);
              fs.writeFileSync("./dist/index.html",htmlTemplate);
        }})
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
};

initialQuestion();
