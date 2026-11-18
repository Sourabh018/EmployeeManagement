function addEmployee() {

    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;

    if (name === "" || department === "") {
        alert("Please enter employee details");
        return;
    }

    let table = document.getElementById("employeeList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = department;

    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
}