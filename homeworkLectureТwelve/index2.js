var students = ["Gosho",
                "Tosho",
                "Pesho",
                "Ivan",
                "Alex",
                "Mila",
                "Mani",
                "Ivi",
                "Poli",
                "Koce",
                "Niki"];
var oddStudents = [];
var evenStudents = [];
for (var i = 0; i < students.length; i++){
    if ([i]%2 == 0){
        evenStudents.push(students[i]);
    }else{
        oddStudents.push(students[i]);
    }
}
console.log(evenStudents);
console.log(oddStudents);