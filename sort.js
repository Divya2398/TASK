
console.log("STUDENT DETAIL")
const student=["diya","priya","radha","krishnan","swetha"]
console.log("Student name according to alabet")
student.sort()
console.log(student)
  

//numerical sort
const mark=[50,60,80,40,90]
console.log("mark in ascending order")
mark.sort(function(a, b){return a - b});
console.log(mark)
console.log("mark in decending order")
mark.sort(function(a,b){return b - a});
console.log(mark)

//object array sort
console.log("object array sort")
const cars = [
    {name:"Divya", age:23},
    {name:"Swetha", age:22},
    {name:"priya", age:17}
  ]; 
  cars.sort(function(a, b){return a.year - b.year});
  console.log(cars)

