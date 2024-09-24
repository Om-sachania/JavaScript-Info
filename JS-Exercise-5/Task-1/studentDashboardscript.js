let courseTable = document.getElementById('courseTable');
let assignCourseArray = JSON.parse(localStorage.getItem('course'));
console.log(assignCourseArray);

for (const obj of assignCourseArray) {
    let displayCourse = obj;

    let courseRow = courseTable.insertRow();
    let courseId = courseRow.insertCell(0);
    let courseName = courseRow.insertCell(1);

    let courseIdInput = document.createElement('input');
    let courseNameInput = document.createElement('input');

    courseIdInput.setAttribute("type","text");
    courseIdInput.setAttribute("value",`${displayCourse.id}`);
    courseIdInput.setAttribute("disabled","");
    courseIdInput.classList.add('courseId');

    courseNameInput.setAttribute("type","text");
    courseNameInput.setAttribute("value",`${displayCourse.name}`);
    courseNameInput.setAttribute("disabled","");
    courseNameInput.classList.add('courseName');

    courseId.append(courseIdInput);
    courseName.append(courseNameInput);
}
