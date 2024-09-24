let table = document.getElementById('table');
let courseId = document.getElementById('CId');  
let courseName = document.getElementById('CName');
let addButton = document.getElementById('add');

let courseArray = [];
let assignCourseArray=[];

addButton.addEventListener('click',addCourse);

function clearInputFields() {
    courseId.value='';
    courseName.value='';
}

function checkData() {
    for (const elem of courseArray) {
        if(elem.id == courseId.value && elem.name == courseName.value){
            return true;
        }
        else{
            return false;
        }
    }
}

function addCourse() {
    courseId.value=courseId.value.trim();
    courseName.value=courseName.value.trim();

    if(!(courseId.value && courseName.value)){
        alert("Please fill details properly!!!");
        clearInputFields();
    }
    else{
        if (checkData()) {
            alert("Course already Added!!");
            clearInputFields();
        } else {
            let row = table.insertRow();
    
            let courseIdInputField = row.insertCell(0)
            let courseNameInputField= row.insertCell(1)
            let assignButton = row.insertCell(2)
            let deleteButton = row.insertCell(3)
    
            let courseIdInput = document.createElement('input');
            let courseNameInput = document.createElement('input');
            let assignBtnInput = document.createElement('input');
            let deleteBtnInput = document.createElement('input');

            courseIdInput.setAttribute("type","text");
            courseIdInput.setAttribute("value",`${courseId.value}`);
            courseIdInput.setAttribute("disabled","");
            courseIdInput.classList.add('courseId');

            courseNameInput.setAttribute("type","text");
            courseNameInput.setAttribute("value",`${courseName.value}`);
            courseNameInput.setAttribute("disabled","");
            courseNameInput.classList.add('courseName');

            assignBtnInput.setAttribute("type","button");
            assignBtnInput.setAttribute("value","Assign");
            assignBtnInput.classList.add('AssignBtn');
            assignBtnInput.onclick= ()=> assignCourse(course);

            deleteBtnInput.setAttribute("type","button");
            deleteBtnInput.setAttribute("value","Delete");
            deleteBtnInput.classList.add('DeleteBtn');
            deleteBtnInput.onclick= ()=> deleteCourse(row);

            courseIdInputField.append(courseIdInput);
            courseNameInputField.append(courseNameInput);

            assignButton.append(assignBtnInput);
            deleteButton.append(deleteBtnInput);

            let course ={
                id : courseId.value,
                name : courseName.value,
            }
            courseArray.push(course);

            clearInputFields();
        }
    }
}

function deleteCourse(row) {
    let tableBody = table.children[0];
    tableBody.removeChild(row);
    clearInputFields();

    let courseId = row.cells[0].firstElementChild.value;
    let courseName = row.cells[1].firstElementChild.value;

    for (const elem of courseArray) {
        if(elem.id == courseId && elem.name == courseName){
            let index = courseArray.indexOf(elem);
            courseArray.splice(index,1);
        }
    }   
    console.log(courseArray);
    localStorage.setItem('course',JSON.stringify(courseArray));
}

function assignCourse(course){
    if (assignCourseArray.includes(course)) {
        alert('course already assigned!!!');
    }
    else{
        assignCourseArray.push(course);
        localStorage.setItem('course',JSON.stringify(assignCourseArray));
    }
}