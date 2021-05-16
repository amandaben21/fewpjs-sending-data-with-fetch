// Add your code here
function submitData(name, email) {          //makes a POST request to /users with a name and email
    let msg = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify({
            name,
            email
        })
    };
    
    return fetch("http://localhost:3000/users", msg)  //handles the POST request response, retrieves the new id value and appends it to the DOM
    .then(responce => responce.json())
    .then(resp => {
        document.body.innerHTML = resp.id
    })
    
    .catch(error => {   //handles a failed POST request using catch, appends the error message to the DOM
      // const body = document.querySelector("body")
      // body.innerText = error.message
      document.body.innerHTML = error.message
    })
}