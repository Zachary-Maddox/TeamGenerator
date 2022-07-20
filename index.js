const Intern = require("./lib/Intern")

const buildTeam = require("./src/buildTeam")
const inquirer = require("inquirer")

const employeeArray = []; 


const internQuestions = (employeeInfo) => {
  inquirer
  .prompt([{
    message:"What School are you attending?",
    type:"input",
    name:"intern"
  }
    
  ])
  .then((answers) => {
  const myIntern = new Intern(employeeInfo.employeeName,employeeInfo.employeeId,employeeInfo.employeeEmail,answers.intern);
  employeeArray.push(myIntern)
  console.log(employeeArray)
  
  })
  .catch((error) => {
    if (error.isTtyError) {
    
    } else {
    
    }
  });
}

const teamQuestions = () => {
  inquirer
  .prompt([{
    message:"What employee do you want to add?",
    type:"list",
    name:"employeeChoice",
    choices: ["Intern","Manager","Engineer"]
  },{
    message:"What is your employees Name?",
    type:"input",
    name:"employeeName"
  },{
    messsage:"What is your employees ID?",
    type:"input",
    name:"employeeId"
  },{
    message:"What is your employees Email?",
    type:"input",
    name:"employeeEmail"
  }
  
  ])
  .then((answers) => {
  if(answers.employeeChoice === "Intern" ){
    internQuestions(answers);
  


  }
  })
  .catch((error) => {
    if (error.isTtyError) {
    
    } else {
    
    }
  });
}

const initialQuestion = () => {
  inquirer
  .prompt([{
    message:"Would you like to add an Employee?",
    type:"confirm",
    name:"continue"
  }
    
  ])
  .then((answers) => {
  if(answers.continue){
teamQuestions();
  }else{


  }
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
    
    }
  });
}

initialQuestion();