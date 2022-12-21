const { left } = require("inquirer/lib/utils/readline");

function generateHTML(teamMembers) {

    const htmlInfo =
    `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        </head>
        
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <section class="row row-cols-1 row-cols-md-3 g-4">
    `

    let managers = teamMembers.filter(Manager);
    let engineers = teamMembers.filter(Engineer);
    let interns = teamMembers.filter(Intern);

    for (let i = 0; i < managers.length; i++) {
        managers[i];
        `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${managers[i].managerName}<br>Manager</h2>
                <ul class="card-text">
                    <li>${managers[i].managerID}</li>
                    <li>${managers[i].managerEmail}</li>
                    <li>${managers[i].managerNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    for (let i = 0; i < engineers.length; i++) {
        engineers[i];
        `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${engineers[i].engineerName}<br>Manager</h2>
                <ul class="card-text">
                    <li>${engineers[i].engineerID}</li>
                    <li>${engineers[i].enngineerEmail}</li>
                    <li>${engineers[i].engineerGithub}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    for (let i = 0; i < interns.length; i++) {
        interns[i];
        `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${interns[i].engineerName}<br>Manager</h2>
                <ul class="card-text">
                    <li>${interns[i].engineerID}</li>
                    <li>${interns[i].enngineerEmail}</li>
                    <li>${interns[i].internSchool}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    `
    </section>
    <script src="./index.js"></script>
    </body>

    </html>
    `

    return htmlInfo
}

module.exports = generateHTML;