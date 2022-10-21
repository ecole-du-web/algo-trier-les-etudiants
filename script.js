// function sortedStudents(arr) {

//   console.log(arr[0].grades.reduce((acc,cur) => acc + cur) / arr[0].grades.length);

//   return arr.sort((a,b) => {
//       return (
//         b.grades.reduce((acc,cur) => acc + cur) / b.grades.length -
//         a.grades.reduce((acc,cur) => acc + cur) / a.grades.length 
//       )
//   })
// }

const sortedStudents = arr => arr.sort((a,b) => (
    (b.grades.reduce((acc,cur) => acc + cur) / b.grades.length) -
    (a.grades.reduce((acc,cur) => acc + cur) / a.grades.length)
))



/* Énoncé */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets ont été triés par ordre décroissant en fonction de la moyenne de chaque élève.
*/

/* Test à passer */ 

console.log(
  sortedStudents([
    { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
    { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
    { name: "Ana", grades: [11,14,3,14,12,14] },
    { name: "Sara", grades: [10,12,14,15,14,19] },
  ])
);

/* Returns */

/* 
[
  { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
  { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
  { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
  { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
]
*/