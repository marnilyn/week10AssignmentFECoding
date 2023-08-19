// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

let id = 0;

document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(3);//this will insert the new entries to the 3rd row of the table
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('item').value;
})//these are the values created

myForm.style.backgroundColor = 'grey'
myForm.style.color = 'white'
myForm.style.display = 'flex'
myForm.style.flexDirection = 'column'
