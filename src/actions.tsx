import todoReducer from "./reducer";
import useLocalStorageReducer from "./components/storage/local-storage";
import Header from "./components/header/header";
import Wrapper from "./components/wrapper/wrapper";
import Body from "./components/body/body";

const TheApp = () => {
  const [todos, dispatch] = useLocalStorageReducer("todos", todoReducer, []);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const completeTodo = (id: number) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const updateTodo = (id: number, text: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };

  return (
    <Wrapper>
      <Header addTodo={addTodo} />
      <Body
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </Wrapper>
  );
};

export default TheApp;
