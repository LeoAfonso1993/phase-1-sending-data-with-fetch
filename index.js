// Add your code here
const p = document.createElement("p")

function submitData(userName, userEmail){
    const logInData = {
        name: userName,
        email: userEmail, 
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(logInData),
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then((object) => {
        console.log(object)
        p.textContent = `{id: ${object.id}, name: ${object.name}, email: ${object.email}}`
        document.body.appendChild(p)
    })
    .catch((error) => {
        p.textContent+= error.message
        document.body.appendChild(p)
    })
}


//submitData("Leo", "devpro.leo@gmail.com")