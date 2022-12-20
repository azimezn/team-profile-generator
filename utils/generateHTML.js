
function generateHTML(data) {


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
                <div class="col-sm-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">${data.managerName}<br>Manager</h2>
                            <ul class="card-text">
                                <li>${data.managerID}</li>
                                <li>${data.managerEmail}</li>
                                <li>${data.managerNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <script src="./index.js"></script>
        </body>
        
        </html>
    `


    return htmlInfo
}

module.exports = generateHTML;