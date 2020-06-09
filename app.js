const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  // Nota: array para ejemplo de filter
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for(let i = 0; i < companies.length; i++){
  //   console.log(companies[i]);
  // }

  // Nota: forEach puede recibir como parámetros: iterator, index o 
  // el array completo
  // companies.forEach(function(company){
  //   console.log(company.name);
  // });

  // Nota: filter with for loop
  // Nota: Get 21 and older
  // const canDrink = []
  // for (let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21 ){
  //     canDrink.push(ages[i]);
  //   }
  // }

  // Nota: filter function
  // Nota: Get 21 and older
  // const canDrink = ages.filter(function(age){
  //   if(age >= 21){
  //     return true; 
  //   }
  // });
  // console.log(`Edad para canDrink: ${canDrink}`);

  // Nota: filter with arrow function
  // Nota: Get 21 and older
  // const canDrink = ages.filter(age => age >= 21)
  // console.log(`Edad para canDrink: ${canDrink}`);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


// Get 80's companies
// const eightiesCompanies = companies.filter(company => 
//   (company.start >= 1980 && company.start < 1990 ));
// console.log(eightiesCompanies);


// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(typeof(lastedTenYears));
// Nota: Muestra conversión de object lastedTenYears en array
// console.log(Object.entries(lastedTenYears));
// console.log(lastedTenYears);


// map 

// Create array of company names
// Nota: Ejemplo 1 de map
// const companyNames = companies.map(function(company){
//   return company.name;
// });
// console.log(companyNames);


// Nota: Ejemplo 2 de map
// const testMap = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);


// Nota: Ejemplo 3 de map usando arrow function
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);
 
// Nota: Ejemplo 3 maps encadenados
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);



//
// Sort Section
//

// Nota: Ejemplo 1 Sort puede tomar una función de comparación, como en éste caso
// Referencia:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Se ordenan compañías por fecha de start
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start){
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies);

// Nota: Ejemplo 2 sort. Arrow function and conditional ternary operator
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1 ));

// console.log(sortedCompanies);

// Nota: Ejemplo 3 sort ages
// OJO: Ordena por primer dígito. Muestra: [12, 13 ..., 44, 45, 5, 54]
// const sortAges = ages.sort()
// console.log(sortAges);


// Nota: Ejemplo 4 sort ages de números en modo menor a mayor. DE MAYOR  a menor se usa b - a
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);


//
// reduce Section
//

// Nota: Ejemplo 1 usando for, sin reduce(). Suma todas las edades
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// Nota: Ejemplo 2, usando reduce. Suma todas las edades
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// Nota: Ejemplo 3, usando reduce and arrow function. Suma todas las edades
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Nota: Ejemplo 4, Get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// Nota: Ejemplo 5, Get total years for all companies using arrow functino
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);



// 
// Ejemplo combinando Map, sort, filter, reduce
// 1°: Multiplica por 2 cada elemento de ages
// 2°: Crea un nuevo array con los elementos >= 40
// 3°: sort ordena los elementos de menor a mayor
// 4°: reduce para sumar los elementos
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a+b, 0);

console.log(combined);