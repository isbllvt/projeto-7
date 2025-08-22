import Header from "./components/Header";
import TodoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./styles/globalStyle.css";

function App() {
    return (
        <div>
            <Header />
            <TodoForm />
            <ToDoList />
        </div>
    );
}

export default App;