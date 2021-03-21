let usersData = [
    {
        Username: "alee",
        Email: "alee@gmail.com",
        Role: "admin",
    },

    {
        Username: "jennie",
        Email: "jenniebp@gmail.com",
        Role: "user",
    },

    {
        Username: "elsa",
        Email: "elsa@disney.com",
        Role: "user",
    },
];

function showData(index) {
    let rows = ""

    for (let i = 0; i < usersData.length; i++) {
        if (i == index) {
            let row = `
        <tr>
        <td> ${i + 1} </td>
        <td> <input type="text" value="${usersData[i].Username}" id="finalUsername"> </td>
        <td> <input type="text" value="${usersData[i].Email}" id="finalEmail"> </td>
        <td> <select id="finalRole">
        <option value="user"> user </option>
        <option value="admin"> admin </option> </select> </td>
        <td> <button onclick="saveData(${i})"> SAVE </button>
        <button onclick="cancelData()"> CANCEL </button> </td>
        </tr>
        `
            rows += row
        } else {
            let row = `
            <tr>
            <td> ${i + 1} </td>
            <td> ${usersData[i].Username} </td>
            <td> ${usersData[i].Email} </td>
            <td> ${usersData[i].Role} </td>
            <td> <button onclick="editData(${i})"> EDIT </button>
            <button onclick="deleteData(${i})"> DELETE </button> </td>
            </tr>
            `
            rows += row
        }

    }
    document.getElementById("res").innerHTML = rows
}
showData()

function addData() {
    let nameuser = document.getElementById("inputUsername").value
    let emaill = document.getElementById("inputEmail").value
    let rolee = document.getElementById("inputRole").value

    let newData = {
        Username: nameuser,
        Email: emaill,
        Role: rolee,
    }

    usersData.push(newData)
    showData()
}

function deleteData(index) {
    usersData.splice(index, 1)
    showData()
}

function editData(index) {
    showData(index)
}

function cancelData() {
    showData()
}

function saveData(index) {
    let newUsername = document.getElementById("finalUsername").value
    let newEmail = document.getElementById("finalEmail").value
    let newRole = document.getElementById("finalRole").value

    usersData[index] = {
        Username: newUsername,
        Email: newEmail,
        Role: newRole,
    };
    showData()
}