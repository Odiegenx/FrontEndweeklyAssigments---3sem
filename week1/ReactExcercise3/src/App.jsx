import { useEffect, useState } from 'react'
import './App.css'
import SvgComponent from './assets/svgComponent'

function App() {
  const [toRender,setToRender] = useState(SvgComponent);
  const [currentCountyCode,setCountyCode] = useState(null);
  const [prevClickedElement, setPrevClickedElement] = useState(null);
  const [countryData,setCountyData] = useState('');

useEffect(() => {
  if(currentCountyCode && currentCountyCode !== "svg2"){
    // 1. Using fetch for data retrieval:
  fetch('https://restcountries.com/v3.1/alpha/'+currentCountyCode)
  .then(response => response.json())
  .then(data => {
    if (data) {
      setCountyData(data[0].name.common);
    }
  })
  .catch(error => {
    //console.error('Error fetching country data:', error);
    setCountyData("Not Found");
    return;
  });
}else if(currentCountyCode === "svg2"){
  setCountyData("Ocean");
}
},[currentCountyCode]);

  const handleSvgClick = (event) => {
    const clickedElement = event.target;
    console.log("You clicked on: " + clickedElement.id);
    setCountyCode(clickedElement.id)
    if(prevClickedElement){
      // 4. Managing Element Attributes:
      //prevClickedElement.style.fill = 'silver';
      prevClickedElement.setAttribute('fill','silver');
    }
    //clickedElement.style.fill = 'red';
    clickedElement.setAttribute('fill','red');
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
