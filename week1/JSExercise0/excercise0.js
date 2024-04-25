const nameArr = ["Lars","Jan","Peter","Bo","Frederik"];
const filterednameArr = nameArr.filter(x => x.length <= 3);
nameArr.forEach(name => console.log(name));
console.log("-------------------");
filterednameArr.forEach(name => console.log(name));
console.log("-------------------");
const arrUpper = nameArr.map(x => {
    return x.toUpperCase()});
arrUpper.forEach(name => console.log(name));

function createNameHtml(names){
    const mapped = names.map((name) => {
        return '<li>'+name+'</li>';
    })
    return '<ul>'+mapped.join('')+'</ul>'
}
console.log(createNameHtml(nameArr));

console.log("-----------------------");

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  const newCars = cars.filter( (x) =>{
    return x.year > 1999;
  })
  console.log(newCars);
  console.log('----------');
  
  const volvos = cars.filter( (x) => {
    return x.make === "Volvo";
  })
  console.log(volvos);
  console.log('----------');
  let price = 5000;
  const cheapCars = cars.filter(x => x.price < price);
  console.log(cheapCars);
  
  //INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );'

  
  console.log('--------------------');
  console.log(sqlCreate(newCars));
  console.log('--------------------');
  console.log(sqlCreate(volvos));
  console.log('--------------------');
  console.log(sqlCreate(cheapCars));
  console.log('--------------------');

  function sqlCreate(array){
    const sqlLine = array.map(car => {
        return `INSERT INTO Cars (id, year, make, model, price) VALUES (${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price});`;
    });
    return sqlLine.join('\n');
  }