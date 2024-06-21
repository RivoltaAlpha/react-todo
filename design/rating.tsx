import { useReducer } from 'react'
import './App.scss'
import {Joke, initialState} from './reducer'
import { reducer } from './reducer'

 export const JokeRating = () => {
  const [jokes, dispatch] = useReducer(reducer, initialState);

  const updateRate = (id: number, rating: number) => {
    dispatch({ type: 'RATE_JOKE', payload: { id, rating } });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newJoke: Joke = {
      id: jokes.length + 1,
      joke: e.currentTarget[0].value,
      rate: 0,
    };
      dispatch({type:'ADD_JOKE', payload:newJoke});
      e.currentTarget.reset();
    };
    return (
      <div className="container">
        <h2>Jokes App</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Add a joke" />
          <button type="submit">Add Joke</button>
        </form>

        <div className="jokes">
          {jokes &&
            jokes
              .sort((a, b) => b.rate - a.rate)
              .map((joke) => (
                <div key={joke.id} className="joke">
                  <div className="joke-text">{joke.joke}</div>
                  <div className="text">{joke.rate}
                    <div className="joke-buttons">
                        <button onClick= {() => updateRate(joke.id,joke.rate +1)}>👍</button>
                        <button onClick= {() => updateRate(joke.id,joke.rate -1)}>👎</button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  };

export default JokeRating;
