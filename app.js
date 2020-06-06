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

const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);
