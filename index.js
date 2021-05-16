// Add your code here
function submitData(name, email) {
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
    
    return fetch("http://localhost:3000/users", msg)
    .then(responce => responce.json())
    .then(resp => {
        document.body.innerHTML = resp.id
    })
    
    .catch(error => {
      // const body = document.querySelector("body")
      // body.innerText = error.message
      document.body.innerHTML = error.message
    })
}