const buttonAdd = document.querySelector("#add-btn");
const buttonDelete = document.querySelector("#clear-btn");
const name = document.querySelector("#name-input");
const group = document.querySelector("#group-input");
const error = document.querySelector(".error");
const tbody = document.getElementById('data-table').getElementsByTagName("tbody")[0];

buttonAdd.addEventListener("click", addRow);
tbody.addEventListener("click", deleteRow);
buttonDelete.addEventListener("click", deleteTable);

function addRow(){
    if(name.value.trim() === "" || group.value.trim() === ""){
        error.style.display = "block";
    }
    else{
        error.style.display = "none";
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const groupCell = document.createElement("td");
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        nameCell.textContent = name.value;
        groupCell.textContent = group.value;
        deleteButton.textContent = 'X'
        deleteButton.classList.add("delete-btn");
        deleteCell.appendChild(deleteButton);
        tableRow.appendChild(nameCell);
        tableRow.appendChild(groupCell);
        tableRow.appendChild(deleteCell);
        tbody.appendChild(tableRow);
    }
    name.value = "";
    group.value = "";
}

function deleteRow(event) {
    const row = event.target.closest("tr");
    row.remove();
}

function deleteTable(){
    tbody.innerHTML = '';
}