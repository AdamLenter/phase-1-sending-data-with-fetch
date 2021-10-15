function submitData(firstName, email) {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName, 
            "email": email
        })
      };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(body => addNewContact(body))
    .catch(function (error){
        console.log(error)
        alert("Unauthorized Access")
        document.body.append(error.message)
    })
}


function addNewContact(newUser) {
    document.body.append(newUser.id)
}

submitData("Name", "name@name.com");
