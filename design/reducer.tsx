export interface Joke {
    id: number;
    joke: string;
    rate: number;
  }

  
  export const initialState: Joke [] = [
    {
      id: 1,
      joke: "What do you call a very small valentine? A valen-tiny!",
      rate: 3,
    },
    {
      id: 2,
      joke: "What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!",
      rate: 2,
    },
    {
      id: 3,
      joke: 'A termite walks into the bar and says, "Where is the bar tender?"',
      rate: 1,
    },
    {
      id: 4,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      rate: 0,
    },
    {
      id: 5,
      joke: "Why was the math book sad? Because it had too many problems.",
      rate: 0,
    },
  ]  


type Functionalities =
  | { type: "ADD_JOKE"; payload:Joke  }
  | { type: "RATE_JOKE"; payload:{ id: number; rating: number } };


    // the usereducer function
    export const reducer =( state: Joke[], action:Functionalities): Joke [] => {
        switch (action.type) {
          case "ADD_JOKE":
            return [...state, action.payload];
          case "RATE_JOKE":
              return state.map((joke) =>  
                joke.id === action.payload.id ? { ...joke, rate: action.payload.rating } :joke

              
              );
              default:
                return state;
                }
      };