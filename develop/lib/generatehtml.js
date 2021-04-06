
function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class='text-center'>My Team</h1>
                </div>
            </div>
    
            <div class="container">
                <div class="row">
                    <div class="col-12 justify-content-center">
                    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${manager.name}</div>
                    <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.id}</li>
                                <li class="list-group-item">Email: <a href='mailto: ${manager.email}'></a></li>
                                <li class="list-group-item">Office Number: ${manager.office}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name}</div>
    <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email <a href='mailto: ${engineer.email}'></a></li>
                <li class="list-group-item">Github: <a href='https://github.com/${engineer.github}' target='_blank'></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name}</div>
    <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href='mailto: ${intern.email}'></a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
                    </div>
                </div>
    
    </body>
    
    </html>`
}


// module.exports = generateHtml;