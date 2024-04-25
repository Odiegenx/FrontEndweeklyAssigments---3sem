const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
document.getElementById("ul").innerHTML = createCarTable(cars);

const button = document.getElementById("1");
button.addEventListener("click", filterByPrice);

function filterByPrice(event){
    event.preventDefault();
    console.log('Hej');
    const priceInput = document.getElementById("price");
    const price = parseInt(priceInput.value);
    const carList = cars.filter( car => car.price <= price);
    document.getElementById("ul").innerHTML = createCarTable(carList);
}

function createCarTable(cars) {
  
    let html = '<table>';
    html += '<tr>';
    for (const key in cars[0]) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>';
    cars.forEach(car => {
        html += '<tr>';
        for (const key in car) {
            html += `<td>${car[key]}</td>`;
        }
        html += '</tr>';
    });
    html += '</table>';
    return html;
}
