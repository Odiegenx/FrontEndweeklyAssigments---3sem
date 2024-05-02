import React,{useEffect} from "react";

export default () => {
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
    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    },[isActive, time]);

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
            />
            <button onClick={isActive ? pauseTimer : startTimer} > {isActive ? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
          <div>Time Remaining: {formatTime(time)}</div>
        </div>
      );
}