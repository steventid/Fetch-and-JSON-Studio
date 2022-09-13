// TODO: add code here
window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            json.sort(function(b, a){return a.hoursInSpace - b.hoursInSpace});
            let html = "";
            for(a of json) {
                let green = "";
                if (a.active) {
                    green = 'class="active"';
                }
                html += `<div class="astronaut">
                <div class="bio">
                   <h3>${a.firstName} ${a.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${a.hoursInSpace}</li>
                      <li ${green}>Active: ${a.active}</li>
                      <li>Skills: ${a.skills.join(', ')}</li>
                   </ul>
                </div>
                <img class="avatar" src="${a.picture}">
             </div>`
            
            };
            document.getElementById("main").innerHTML = `Astronauts: ${json.length}`;
            document.getElementById("container").innerHTML = html;
        });
    });
});