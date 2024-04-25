import React, { useState, useEffect } from 'react';

function JokeComponent() {
   
    const [joke, setJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');

    function getJokes(){
        getJoke();
        getTheDadJoke();
    }

    function getJoke(){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    }

    function getTheDadJoke(){
        fetch('https://icanhazdadjoke.com/',{
            headers:{
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setDadJoke(data.joke))
            .catch(error => console.error('Error fetching joke:', error));
    }
   
    useEffect(() => {
        let timerId = setInterval(() => getJokes(), 10000);
        return () => {
            clearInterval(timerId); 
        };
    }, []);

    return (
        <div>
            <p>{joke}</p>
            <p>{dadJoke}</p>
            <button onClick={getJokes}>Get New Jokes</button>
        </div>
    );
}

export default JokeComponent;
