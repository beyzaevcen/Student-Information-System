//For calling my function when i open window

window.onload = function () {
    const studentsList = getStudentList();
    const lecturesList = getLecturesList();
    listStudents();

};

//For save local storage my lectue and students
const saveStudentListToLocalStorage = (studentsList) => {
    localStorage.setItem('students', JSON.stringify(studentsList));
}
const saveLectureListToLocalStorage = (lecturesList) => {
    localStorage.setItem('lectures', JSON.stringify(lecturesList));
}

//İf i have a list a call that if i dont have a list a created
const getStudentList = () => {
    let studentsList = JSON.parse(localStorage.getItem('students'));
    if (!studentsList) {
        studentsList = [{
            studentId: '1',
            firstName: 'Beyza',
            lastName: 'Evcen',
            gpa: 3.75,
            lectures: [{
                lectureName: 'Web',
                midterm: 68.72,
                final: 72.48,
                result: 50,
                letterGrade: 'AA',
            },],
        },
        {
            studentId: '2',
            firstName: 'Ezel',
            lastName: 'Karadirek',
            gpa: 2.75,
            lectures: [{
                lectureName: 'Web',
                midterm: 68.72,
                final: 72.48,
                result: 50,
                letterGrade: 'AA',
            },],
        },
        {
            studentId: '3',
            firstName: 'Zehra',
            lastName: 'Bütün',
            gpa: 3.1,
            lectures: [{
                lectureName: 'Mobile',
                midterm: 68.72,
                final: 72.48,
                result: 50,
                letterGrade: 'FF',
            },],

        },
        {
            studentId: '4',
            firstName: 'John',
            lastName: 'Doe',
            gpa: 3.5,
            lectures: [
                {
                    lectureName: 'Web',
                    midterm: 75.0,
                    final: 80.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        },
        {
            studentId: '5',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        },
        {
            studentId: '6',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '7',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '8',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '9',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '10',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '11',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '12',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '13',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '14',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '15',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '16',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '17',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '18',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '19',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '20',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '21',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '22',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '23',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '24',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '25',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '26',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '27',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '28',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '29',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '30',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '31',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '32',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '33',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '34',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '35',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '36',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '37',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '38',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '39',
            firstName: 'Alice',
            lastName: 'Smith',
            gpa: 3.2,
            lectures: [
                {
                    lectureName: 'Mobile',
                    midterm: 70.0,
                    final: 78.0,
                    result: 60.0,
                    letterGrade: 'BB',
                },
            ],
        },
        {
            studentId: '39',
            firstName: 'Catherine',
            lastName: 'Brown',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Web',
                    midterm: 68.0,
                    final: 76.0,
                    result: 58.0,
                    letterGrade: 'BC',
                },
            ],
        },
        {
            studentId: '40',
            firstName: 'Bob',
            lastName: 'Johnson',
            gpa: 3.4,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 72.0,
                    final: 75.0,
                    result: 68.0,
                    letterGrade: 'AB',
                },
            ],
        },
        {
            studentId: '41',
            firstName: 'Michael',
            lastName: 'Williams',
            gpa: 3.3,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 78.0,
                    final: 82.0,
                    result: 75.0,
                    letterGrade: 'AA',
                },
            ],
        },
        {
            studentId: '42',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '42',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '43',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '44',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '45',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '46',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '47',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '48',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '49',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '50',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '51',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '52',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '53',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '54',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '55',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '56',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '57',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        }, {
            studentId: '58',
            firstName: 'Emily',
            lastName: 'Anderson',
            gpa: 3.1,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 70.0,
                    final: 75.0,
                    result: 65.0,
                    letterGrade: 'BB',
                },
            ],
        },

        {
            studentId: '59',
            firstName: 'Daniel',
            lastName: 'Miller',
            gpa: 3.5,
            lectures: [
                {
                    lectureName: 'Decentralized',
                    midterm: 85.0,
                    final: 88.0,
                    result: 80.0,
                    letterGrade: 'AA',
                },
            ],
        },
        {
            studentId: '60',
            firstName: 'Daniel',
            lastName: 'Miller',
            gpa: 3.5,
            lectures: [
                {
                    lectureName: 'Web',
                    midterm: 85.0,
                    final: 88.0,
                    result: 80.0,
                    letterGrade: 'AA',
                },
            ],
        },

        ];

        // Save to local storage
        saveStudentListToLocalStorage(studentsList);

    }

    return studentsList;
}

const getLecturesStudentList = (lectureName) => {
    let studentsList = getStudentList();
    let lecturesStudentList = [];
    studentsList.forEach(student => {
        student.lectures.forEach(lecture => {
            if (lecture.lectureName == lectureName) {
                lecturesStudentList.push(student);
            }

        })
    });
    return lecturesStudentList;
}


//for checking if  srtudent exist
const isStudentExist = (studentId) => {
    let students = getStudentList()
    for (let i = 0; i < students.length; i++) {
        if (students[i].studentId == studentId) {
            return false
        }
    }
    return true
}




// display lecture List
const listStudents = () => {


    let students = getStudentList()
    document.getElementById('mainTable').innerHTML =
        `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Student Id</th>
        <th>GPA</th>
        <th>Delete Student</th>
      </tr> ` +
        Object.values(students)
            .map(
                (student, index) => `
      <tr id="row">
        <td >${student.firstName}</td>
        <td >${student.lastName}</td>
        <td>${student.studentId}</td>
        <td>${student.gpa}</td>
        <td class="flex-row-wrapper gap-1"><button class="thirdButton" style="background-color:#bd6137" onClick="deleteStudent(${index})" id="deleteStudent">x</button></td>
      </tr>`
            )
            .join('')
}

const listLecturesStudents = (lectureName) => {
    let lecturesStudents = getLecturesStudentList(lectureName)
    document.getElementById('mainTable').innerHTML =
        `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Student Id</th>
        <th>Midterm</th>
        <th>Final</th>
        <th>Result</th>
        <th>Letter Grade</th>
        <th>GPA</th>
        <th>Delete</th>
      </tr> ` +
        Object.values(lecturesStudents)
            .map(
                (student1, index) => `
      <tr id="row">
        <td >${student1.firstName}</td>
        <td >${student1.lastName}</td>
        <td>${student1.studentId}</td>
        <td>${student1.lectures[0].final}</td>
        <td>${student1.lectures[0].midterm}</td>
        <td>${student1.lectures[0].result}</td>
        <td>${student1.lectures[0].letterGrade}</td>
        <td>${student1.gpa}</td>
        <td class="flex-row-wrapper gap-1"><button class="thirdButton" style="background-color:#DC2626" onClick="deleteStudent(${index})" id="deleteStudent">x</button></td>
      </tr>`
            )
            .join('')
}

//if i dont have any lecture list i creted if i have in local syorage i parse
const getLecturesList = () => {
    let lecturesList = JSON.parse(localStorage.getItem('lectures'))
    if (!lecturesList) {
        // initial lecture List
        lecturesList = [{
            lectureName: 'Web',
            teacherName: 'Bekir Taner Dinçer',
            pointScale: 7,
            numberOfStudent: 3,
            numberOfFailedStudent: 1,
        },
        {
            lectureName: 'Decentralized',
            teacherName: 'Enis Karaarslan',
            pointScale: 7,
            numberOfStudent: 0,
            numberOfFailedStudent: 0,
        },
        {
            lectureName: 'Mobile',
            teacherName: 'Özgür Kılıç',
            pointScale: 7,
            numberOfStudent: 13,
            numberOfFailedStudent: 4,
        },
        ]
    }
    saveLectureListToLocalStorage(lecturesList);
    return lecturesList
}


const listLecturesName = () => {
    let lectures = getLecturesList()
    const dropdown = document.getElementById("myDropdown");
    lectures.forEach(lecture => {
        const option = document.createElement("option");
        option.value = lecture; // Set the value attribute (optional)
        option.text = lecture.lectureName; // Set the text content of the option
        dropdown.add(option);

        // Event listener to show the selected option
        dropdown.addEventListener("change", function () {
            const selectedOption = dropdown.options[dropdown.selectedIndex].text;
            if (selectedOption == "Choose Lecture") {
                listStudents();

            } else {
                listLecturesStudents(selectedOption);



            }

        });
    });
}

// Call the function to populate the links and dropdown
listLecturesName();

const listLectures = () => {


    let lectures = getLecturesList()
    document.getElementById('mainTable').innerHTML =
        `<tr>
        <th>Lecture</th>
        <th>Teacher</th>
        <th>Point Scale</th>
        <th>Student Number</th>
        <th>Failed Student Number</th>
        <th>Action</th>
      </tr>` +
        Object.values(lectures)
            .map(
                (lectures, index) => `
      <tr>
        <td><button id="lec" data-lecture-name=${lectures.lectureName} onClick="addStudentToLecture(event)">${lectures.lectureName}</button></td>
        <td>${lectures.teacherName}</td>
        <td>${lectures.pointScale}</td>
        <td>${lectures.numberOfStudent}</td>
        <td>${lectures.numberOfFailedStudent}</td>
        <td class="flex-row-wrapper gap-1"><button class="thirdButton" style="background-color:#bd6137" onClick="deleteLecture(${index})" id="deleteStudent">x</button></td>
      </tr>`
            )
            .join('')
}


document
    .getElementById('deletelecture')
    ?.addEventListener('click', deletelecture)
const deleteLecture = (index) => {
    let lectures = getLecturesList()
    lectures.splice(index, 1)
    localStorage.setItem('lectures', JSON.stringify(lectures))
    location.reload()
}

//Add new student to lecture
const addStudentToLecture = (event) => {
    event.preventDefault();
    let students = getStudentList()
    var modal = document.getElementById("addNewStudentToLectModal");
    var addSt = document.getElementById("addStudentForm");
    modal.style.display = 'block';

    const lectureName = event.target.getAttribute('data-lecture-name');



    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Event listener for form submission
    addSt.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        handleFormSubmission(event); // Call a separate function to handle the form submission
    });


    function handleFormSubmission(event) {
        const mark = calculateMark(
            event.target.midterm.value,
            event.target.final.value
        );

        const pointScale = whichPointScale(lectureName);
        const letterGrade = calculateLetterGrade(mark, pointScale);

        let newStudent = {
            studentId: event.target.studentId.value,
            firstName: event.target.fname.value,
            lastName: event.target.lname.value,
            gpa: (mark * 5) / 100,
            lectures: [
                {
                    lectureName: lectureName,
                    midterm: event.target.midterm.value,
                    final: event.target.final.value,
                    result: mark,
                    letterGrade: letterGrade,
                },
            ],
        };


        students.push(newStudent);
        localStorage.setItem('students', JSON.stringify(students));
        closeModal();
    }
};




const handleLectureStudentNumber = (lectureName) => {
    let lectures = getLecturesList()
    for (let i = 0; i < lectures.length; i++) {
        if (lectures[i].lectureName == lectureName) {
            lectures[i].numberOfStudent++
        }
    }
    localStorage.setItem('lectures', JSON.stringify(lectures))
}

const handleLectureFailedStudentNumber = (letterGrade, lectureName) => {
    if (letterGrade == 'FF') {
        let lectures = getLecturesList()
        for (let i = 0; i < lectures.length; i++) {
            if (lectures[i].lectureName == lectureName) {
                lectures[i].numberOfFailedStudent++
            }
        }
        localStorage.setItem('lectures', JSON.stringify(lectures))
    }
}
// students table started in initial render for home page table
listStudents()

//Add new student without lecture info

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector(".modal");
    var openFormModalButton = document.getElementById("OpenFormModal1");
    var closeModalButton = document.getElementById("close-modal");
    var studentForm = document.getElementById("studentForm");
    var mainTable = document.getElementById("mainTable");
    const studentsList = getStudentList();


    openFormModalButton.addEventListener("click", openModal);
    studentForm.addEventListener("submit", addStudent);
    // Event listener to close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Function to add a student to the local storage and update the table
    function addStudent(event) {
        event.preventDefault();

        // Get form values
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var studentId = document.getElementById("studentId").value;
        var gpa = document.getElementById("gpa").value;

        // Validate form values (add your own validation logic)
        if (!fname || !lname || !studentId || !gpa) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a student object
        var student = {
            studentId: studentId,
            firstName: fname,
            lastName: lname,
            gpa: gpa,
            lectures: []
        };
        if (isStudentExist(studentId)) {
            studentsList.push(student);

            // Save the updated studentsList to local storage
            localStorage.setItem('students', JSON.stringify(studentsList));
        } else {
            alert("A student with this id alreasy exist");
        }





        closeModal();
    }

    // Function to update the table with student data
    function updateTable() {

    }
    updateTable(getStudentList());
});


//Delete student
const deleteStudent = (index) => {
    const studentsList = getStudentList();
    studentsList.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(studentsList));
    location.reload(); // This will reload the entire page
}

document.getElementById('deleteStudent')?.addEventListener('click', () => {
    deleteStudent(INDEX_TO_DELETE);
});

//Add new lecture
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.querySelector("#modal-lecture");
    var openFormModalButtonLecture = document.getElementById("OpenFormModal2");
    var closeModalButton = document.getElementById("close-modal");
    var lectureForm = document.getElementById("lectureForm");
    var mainTable = document.getElementById("mainTable");
    const lecturesList = getLecturesList();


    openFormModalButtonLecture.addEventListener("click", openModal);
    lectureForm.addEventListener("submit", addLecture);

    // Event listener to close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Function to add a student to the local storage and update the table
    function addLecture(event) {
        event.preventDefault();

        // Get form values
        var leName = document.getElementById("lecture-name").value;
        var teName = document.getElementById("teacher-name").value;
        var pScale = document.getElementById("point-scale").value;

        // Validate form values (add your own validation logic)
        if (!lectureName || !teacherName || !pointScale) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a student object
        var lecture = {
            lectureName: leName,
            teacherName: teName,
            pointScale: pScale,
            numberOfStudent: 3,
            numberOfFailedStudent: 1,
        };

        lecturesList.push(lecture);

        // Save the updated studentsList to local storage
        localStorage.setItem('lectures', JSON.stringify(lecturesList));

        // Update the table with the new student data (you need to implement this part)


        // Close the modal


        closeModal();
    }

    // Function to update the table with student data
    function updateTable() {

    }
    updateTable(getLecturesList());


});



const handleNewStudents = (event) => {
    let students = getStudentsList()
    let student = {
        studentId: event.target.studentId.value,
        fullName: event.target.fname.value,
        lectures: [],
    }
    if (isStudentExist(event.target.studentId.value)) {
        students.push(student)
        localStorage.setItem('students', JSON.stringify(students))
    } else {
        event.preventDefault()
        document.getElementById('errorMessage').style.display = 'block'
    }
}

const handleNewLectures = (event) => {
    event.preventDefault();
    let lectures = getLecturesList()
    let lecture = {
        lectureName: event.target.lectureName.value,
        teacherName: event.target.teacherName.value,
        pointScale: event.target.pointScale.value,
        numberOfFailedStudent: event.target.numberOfFailedStudent.value,
        numberOfStudent: event.target.numberOfStudent.value,
    }
    lectures.push(lecture)
    localStorage.setItem('lectures', JSON.stringify(lectures))
    listLectures()
    event.stopPropagation()
}

//handle form submits
document
    .getElementById('studentForm')
    .addEventListener('submit', handleNewStudents)
document
    .getElementById('lectureForm')
    .addEventListener('submit', handleNewLectures)



const whichPointScale = (title) => {
    let lectures = getLecturesList()
    for (let i = 0; i < lectures.length; i++) {
        if (lectures[i].lectureName == title) {
            return lectures[i].pointScale
        }
    }
}

const calculateGPA = () => {
    let gpa = null
    students.forEach((student) => {
        gpa = gpa + student.lectures.result;
    });
    return gpa;
}
const calculateMark = (midterm, final) => {
    return (midterm * 4) / 10 + (final * 6) / 10
}
const calculateLetterGrade = (result, pointScale) => {
    if (pointScale == '7') {
        if (100 >= result && result >= 93) {
            return 'AA'
        } else if (93 > result && result >= 86) {
            return 'BA'
        } else if (86 > result && result >= 79) {
            return 'BB'
        } else if (79 > result && result >= 72) {
            return 'CB'
        } else if (72 > result && result >= 65) {
            return 'CC'
        } else if (65 > result && result >= 58) {
            return 'DC'
        } else if (58 > result && result >= 51) {
            return 'DD'
        } else if (51 > result) {
            return 'FF'
        }
    } else {
        if (100 >= result >= 90) {
            return 'AA'
        } else if (90 > result >= 80) {
            return 'BA'
        } else if (80 > result >= 70) {
            return 'BB'
        } else if (70 > result >= 60) {
            return 'CB'
        } else if (60 > result >= 50) {
            return 'CC'
        } else if (50 > result >= 40) {
            return 'DC'
        } else if (40 > result >= 30) {
            return 'DD'
        } else if (30 > result) {
            return 'FF'
        }
    }
}

//Filter failed students
const filterFailedStudens = () => {
    const dropdown = document.getElementById("myDropdown")
    const lectureName = dropdown.options[dropdown.selectedIndex].text;
    let lecturesStudents = getLecturesStudentList(lectureName)
    document.getElementById('mainTable').innerHTML =
        `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Student Id</th>
        <th>Midterm</th>
        <th>Final</th>
        <th>Result</th>
        <th>Letter Grade</th>
        <th>GPA</th>
        <th>Delete</th>
      </tr> ` +
        lecturesStudents
            .filter((student) =>
                student.lectures.find(
                    (lect) => lect.lectureName == lectureName && lect.letterGrade == 'FF'
                )
            )
            .map((student, index) =>
                `<tr>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.studentId}</td>
                    <td>${student.lectures[0].final}</td>
                    <td>${student.lectures[0].midterm}</td>
                    <td>${student.lectures[0].result}</td>
                    <td>${student.lectures[0].letterGrade}</td>
                    <td>${student.gpa}</td>
                    <td class="flex-row-wrapper gap-1">
                        <button class="thirdButton" style="background-color:#DC2626" onClick="deleteStudent(${index})">x</button>
                    </td>
                </tr>`
            ).join('');
}


// event listener for student and lecture tables when clicked their navigation buttons

document.getElementById('openStudents').addEventListener('click', listStudents)
document.getElementById('openLectures').addEventListener('click', listLectures)
document.getElementById('showfailed').addEventListener('click', filterFailedStudens)

