
//Listing all the repositories

function requestUserRepos(username){

    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos?per_page=8`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);

    // When request is received
    // Process it here
    xhr.onload = function () {

        // Parse API data into JSON
        const data = JSON.parse(this.response);
      
      
        // Loop over each object in data array
        for (let i in data) {

            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');

            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');

            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')

            // Create the html markup for each li
            li.innerHTML = (`
                <p><a href="${data[i].html_url}" target="_blank"><div><strong>${data[i].name} </strong> (${data[i].language})</a></p>
            `);
         
          

            // Append each li to the ul
            ul.appendChild(li);

        }

    }

    // Send the request to the server
    xhr.send();

}
requestUserRepos('Curious-Yu');
