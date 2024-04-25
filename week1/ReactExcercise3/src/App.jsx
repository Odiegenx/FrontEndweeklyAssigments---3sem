import { useEffect, useState } from 'react'
import './App.css'
import SvgComponent from './assets/svgComponent'

function App() {
  const [toRender,setToRender] = useState(SvgComponent);
  const [currentCountyCode,setCountyCode] = useState('');
  const [prevClickedElement, setPrevClickedElement] = useState(null);
  const [countryData,setCountyData] = useState('');

useEffect(() => {
  fetch('https://restcountries.com/v3.1/alpha/'+currentCountyCode)
  .then(response => response.json())
  .then(data => {
    if (data) {
      setCountyData(data[0].name.common);
    }
  })
  .catch(error => {
    console.error('Error fetching country data:', error);
  });
},[currentCountyCode]);

  const handleSvgClick = (event) => {
    const clickedElement = event.target;
    console.log("You clicked on: " + clickedElement.id);
    setCountyCode(clickedElement.id)
    if(prevClickedElement){
      prevClickedElement.style.fill = 'silver';
    }
    clickedElement.style.fill = 'red';
    setPrevClickedElement(clickedElement);
  };

  return (
    <>
     <SvgComponent onClick={handleSvgClick}/>
     <h1>
    {countryData}
     </h1>
    </>
  )
}

export default App
