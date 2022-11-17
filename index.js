const students = localStorage.getItem('students') ?
    JSON.parse(localStorage.getItem('students')) : []

let editMode = false
let indexToEdit = undefined


function submitForm() {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const village = document.getElementById('village').value

    const obj = {name: name, phone: phone, village: village } /* ES5 */
    // const obj = { name, phone, village } ES6

    if (editMode) {
        students[indexToEdit] = obj
    } else {
        students.push(obj)
    }


    localStorage.setItem('students', JSON.stringify(students))
    displayData(students)
    reset()
}

function editStudent(i) {
    editMode = true
    indexToEdit = i
    const student = students[i]

    document.getElementById('name').value = student.name
    document.getElementById('phone').value = student.phone
    document.getElementById('village').value = student.village
}


function reset() {
    editMode = false

    document.getElementById('name').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('village').value = ''
}

function displayData(data) {

    let el = '<div>'
    data.forEach((item, index) => {
        el += `<p>
            ${item.name} - 
            ${item.phone} - 
            ${item.village} <br />
            <button type="button" onclick="editStudent(${index})">Edit</button>
    </p>`
    })
    el += '</div>'
    document.getElementById('data').innerHTML = el
}

displayData(students)



// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i, 2*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr);










