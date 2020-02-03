// SSH
// ucjsurface
var client_id = "b2:11:18:03:71:a6:fd:da:a1:ac:07:af:0d:4a:04:a6"
client_secret = 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'


var inquirer = require('inquirer');
var questions = [
    {
        type: "input",
        name: "username",
        message: "what is your github username"
    },
    {
        type: "input",
        name: "color",
        message: "what is your fav color"
    }]

inquirer
    .prompt(questions)
    .then(answers => {
        axios.get (`https://api.github.com/users/${username}?client_id=${
            client_id
          }&client_secret=${client_secret}`)
            .then(function (response) {
                console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
            
    })