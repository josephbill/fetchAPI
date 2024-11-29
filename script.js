document.addEventListener("DOMContentLoaded", function(){
    // api consumption i.e. working with json 
    const url = "http://127.0.0.1:8000/api/users/"
    const divList = document.getElementById("userlists")
    const ulusers = document.getElementById("listUsers")
    const requestoptions = {
        "method" : "GET",
        "Content-Type" : "application/json"
    }
    // the asynchronous 
    fetch(url,requestoptions).then(response => response.json()).then(data => {
        console.log(data)
        // use dom to map the data 
        data.forEach(element => {
            // create a list item 
            const listitem = document.createElement("li")
            listitem.textContent = `${element.id} - ${element.username}`
            ulusers.appendChild(listitem)
            console.log(element.tasks)
        });
        
    })
})