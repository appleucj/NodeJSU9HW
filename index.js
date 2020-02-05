// SSH
// ucjsurface
var client_id = "b2:11:18:03:71:a6:fd:da:a1:ac:07:af:0d:4a:04:a6"
client_secret = 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'


var inquirer = require('inquirer');
const electron = require('electron');
const axios = require('axios');
var fs = require('fs');
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

        // answers.username;
        axios.get(`https://api.github.com/users/${answers.username}`)
            .then(function (response) {
                console.log(response.data);
                fs.readFile("index.html", "utf8", function (err, data) {
                    // console.log(data);
                    data = data.replace("{{ name }}", response.data.name).replace("{{ public-repo }}", response.data.public_repos);

                    fs.writeFile("test.html", data, function (err) {

                    })
                });

            })
            .catch(function (error) {
                console.log(error);
            })

    })

// This is you read files
// fs.readFile(this is the file you want to read, text encoding (utf8), callbackfunction(error, content of the file you're reading))
// fs.readFile("index.html", "utf8", function (err, data) {
//     console.log(data);

//     fs.writeFile("test.pdf", data, function (err) {

//     })
// });