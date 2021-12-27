import "./App.css";
import AddTodo from "./Components/todo/AddTodo";
import TopNav from "./Components/nav/TopNav";
import TodoList from "./Components/todo/TodoList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 m-auto pt-3">
          <TopNav />
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
