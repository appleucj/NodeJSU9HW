// SSH
// ucjsurface
// var client_id = "3032bfb26cf38dbe3790"
// client_secret = '7bb2a6e8e3ebe9c410bb2e723b01ccdb0ea7e01e'
var pdf = require('html-pdf');
var http = require('http');
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
        // console.log(answers);
        // answers.username;
        axios.get(`https://api.github.com/users/${answers.username}`)
            .then(function (response) {
                console.log(response.data);
                fs.readFile("index.html", "utf8", function (err, data) {
                    //console.log(data);
                    //    data = data.replace("{{ name }}", response.data.name).replace("{{ public-repo }}", response.data.public_repos);
                    let html = data.replace("{{ name }}", response.data.name).replace("{{ public-repos }}", response.data.public_repos).replace("{{ followers }}", response.data.followers).replace("{{ image }}", response.data.avatar_url).replace("{{ following }}", response.data.following).replace("{{ stars }}", response.data.starred_url)
                    //console.log(name);
                    fs.writeFile("text.html", html, function (err) {
                        if (err) {
                            console.log(err);

                        }
                        pdf.create(html).toFile("./text.pdf", function (err, res) {
                            console.log(res.filename);
                        });
                        // data = data.replace("{{ name }}")
                    })

                });
            })


    })
    .catch(function (error) {
        // console.log(error);
    })
// $(".FL").on("click", function)


// This is you read files
// fs.readFile(this is the file you want to read, text encoding (utf8), callbackfunction(error, content of the file you're reading))
// fs.readFile("index.html", "utf8", function (err, data) {
//     console.log(data);

//     fs.writeFile("test.pdf", data, function (err) {

//     })
// });