import React,{useEffect} from "react";

/*

1.
In React, managing state is a fundemantal aspeact of building applications.
State is a way to store data that can change over time.
In this example, we are using the useState and useEffect hook to create a timer component.

2
the useState hook is to enable functional components in React to manage their own state.
the useState hook makes it possible to easily handle use inputs
and handle form inputs.
*/
export default () => {
 /* 
 3: Updating a useState variable and syntax
 */
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    function startTimer() {
        if(!isPaused){
        setTime((minutes * 60) + seconds);
        }
        setIsActive(true);
    }
    function resetTimer() {
        setIsActive(false);
        setTime(0);
        setMinutes(0);
        setSeconds(0);
    }
    function formatTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    function pauseTimer() {
        setIsActive(false);
        setIsPaused(true);  
    }

    /*
      4: The useEffect hook and syntax

      The useEffect hook in React is used to handle "side effects" 
      or code you want to run when changes are made in functional components

      useEffect is used to run code after the component has been rendered

      The useEffect hook takes two arguments: a callback function and an array of dependencies

      the denpendencies array is used to specify the variables that the useEffect hook should watch for changes
    */
    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000); // This represents the interval of 1 second
        }
        return () => clearInterval(interval); // This represents the cleanup function that React will call when the component unmounts
    },[isActive]);

    function startShortCut(event) {
        setTime(parseInt(event.target.id));
        setIsActive(true);
    }

    return (
        <div>
          <div>
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
              className="input-field"
            />
            <button className="start-button" onClick={isActive ? pauseTimer : startTimer} > {isActive ? 'Pause' : 'Start'}</button>
            <button className="reset-button" onClick={resetTimer}>Reset</button>
            <button id="300" className="shortcut-button" onClick={startShortCut}>Start 5 min</button>
            <button id="600" className="shortcut-button" onClick={startShortCut}>Start 10 min</button>
            <button id="900"className="shortcut-button"  onClick={startShortCut}>Start 15 min</button>
          </div>
          <div className="timer">Time Remaining: {formatTime(time)}</div>
        </div>
      );
}