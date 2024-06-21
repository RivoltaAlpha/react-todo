import { useEffect, useReducer, Reducer } from "react";
import { Todo, Action } from "../../types/types";

const useLocalStorageReducer = (
  key: string,
  reducer: Reducer<Todo[], Action>,
  initialState: Todo[]
): [Todo[], React.Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
