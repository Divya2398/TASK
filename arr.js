console.log("STUDENT DETAIL")
const student=["diya","priya","radha","krishnan"]
console.log("weather it is an array:" + Array.isArray(student))//to check weather the variable is array.
for(i=0;i<student.length;i++)
{
    console.log("Name:" + student[i])
}
console.log("name list")
console.log(Array.isArray(student))
student[0]="swetha";//to change the array element
console.log(student)
student.push("kala");//to insert element in last position//push
console.log(student)
console.log(student.pop())//to delete last element and returns deleted element
console.log("name list after poping:" )
console.log(student)
student.shift();//shift and unshift method
console.log(student)
student.unshift("harni");
console.log(student)
const student1=["venkat" ,"chandra","rajiv"]
const newstudent= student.concat(student1)
console.log(  newstudent)
