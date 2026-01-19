// let arrays = [5, 3, 2, 6, 4, 1, 7, 8];

// for (const element in arrays) {
//     console.log(arrays[element])
// }

// arrays.push(10);
// console.log(arrays);
// arrays.pop()
// console.log(arrays)

// console.log(arrays.includes(8));
// console.log(arrays.indexOf(18));
// console.log(arrays.lastIndexOf(18));

// arrays.sort((a, b) => {
//         return b-a;
// });
// console.log(arrays);

// let resault = arrays.map(
//     function(e){
//         if(e%2) return "le"
//         return 'chan'
//     }
// )
// console.log(arrays);
// console.log(resault);

// // let resault = arrays.map(element => element *2);

// resault = arrays.filter(function(e){
//     return !(e%2);
// })
// console.log(resault);

// resault = arrays.some(function(e){
//     return e>8;
// })

// //map - reduce
// resault = arrays.reduce(function(sum, e){
//     if(e%2){
//         return sum += e
//     } else return sum -= e
// })
// console.log(resault)

// let array = [1, 2, 3, 4, 5];
// //task 1
// let resaults = array.map(
//     function(e){
//         if(e%2) return "le"
//         return 'chan'
//     }
// )
// console.log(resaults)

// //task 2
// resaults = array.reduce(function(sum, e){
//     return sum *= e;
// })
// console.log(resaults)

// //task 3
// resaults = array.filter(function(e){
//     return !(e%2);
// })
// console.log(resaults);

// //task 4
// resaults = array.some(function(e){
//     return e%2;
// })
// console.log(resaults)

// //task 5
// resaults = array.every(function(e){
//     return e%3
// })
// console.log(resaults)

let student1 = {
    name : "An",
    familyName : "Hoang",
    age : 21,
    score : 10,
    birthday: {
        year : 2004,
        month : 8,
        day : 27
    },
    subjects : ['CSDL', 'KTLT', 'CSLT'],
    getFulName : function(){
        return this.familyName + " " + this.name
    }
}

let json = '{"name":"An","family":"Hoang","age":21,"score":10,"birthday":{"year":2004,"month":8,"day":27},"subjects":["CSDL","KTLT","CSLT"]}'


let Student = function(name, familyName, score, age){
    this.name = name;
    this.familyName = familyName;
    this.score = score;
    this.age = age;
    this.getFulName = function(){
        return `${familyName} ${name}`;
    }
}

let student2 = new Student ("Ân", "Hoàng", 10, 21);
let student3 = new Student ("Ân", "Hoàng", 9, 20);
let student4 = new Student ("Ân", "Hoàng", 8, 19);
// Student.prototype.mobile = "123456789";

let array = [];
array.push(student2);
array.push(student3);
array.push(student4);

let resault =  array.map(function(e){
    return {
        fulname : e.getFulName(),
        score : e.score
    }
})

console.log(resault)

resault =  array.filter(function(e){
    return e.age<2
})
console.log(resault)

resault =  array.every(function(e){
    return e.score >= 0
})
console.log(resault)

array.sort(
    CompareAgeAndScore(-1)
)
function CompareAgeAndScore (type){
    return function(a, b){
        if (a.age == b.age) return type*(a.score - b.score)
            return type*(a.age - b.age)
    }
}
console.log(array)
