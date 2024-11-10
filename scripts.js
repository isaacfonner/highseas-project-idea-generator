alert("This site uses Puter.JS for AI functions, and you will be required to auth using puter. if you do not wish to do this, watch the demo video on the readme.")
var project = undefined
function generate(){
    var proj = document.createElement('p');
    proj.innerHTML = "Generating... Please wait 10-30 seconds"
    var cont = document.getElementById("container")
    cont.appendChild(proj);
    console.log("starting")
    const langs = document.getElementById("lang").value
    const hours = document.getElementById("hour").value
    const types = document.getElementById("type").value
    puter.ai.chat(`What project would you recommend a person who knows ${langs}, and likes to make ${types}, which can be make in ${hours} hours. Please make it unique, with no markdown, and make sure to not include any "*" in your prompt.`).then((results)=>{
        project = results
        console.log(project)
        proj.innerHTML=project
    });
}