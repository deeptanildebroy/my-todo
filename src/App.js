import { useState } from "react";
function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: todo,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }),
      
    };
    if (todo.length !== 0) {
      setTodoList((prevTodos) => [...prevTodos, task]); //Add the todo in the existing todoList Array
      setTodo("");
    }
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTodoList(todoList.map((task) => {
        if(task.id === id){
            return {...task,completed:true}
        }
        else
        return task;
    }));
  }

  return (
    <div style={{margin: "auto", textAlign: "center" , overflow: "hidden"}}>

        <h1>TODO APP</h1>
      <input
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "16px",
          width: "70%",
        }}
        value={todo}
        placeholder="Write Your Task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        style={{
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={addTask}
      >
        Add
      </button>
      <div style={{ marginTop: "20px" }}>
        {todoList.map((task) => ( task.completed === true ? <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px",
              color:task.completed === false ? "black" : "white",
              backgroundColor: task.completed === false ? "white":"black",
            }}
          >
            <h1 style={{ margin: "0" }}>{task.taskName}</h1>
            <p
              style={{
                margin: "2",
              }}
            >
              {task.time}
            </p>
            <p
              style={{
                margin: "2",
              }}
            >
              {task.date}
            </p>
            <button
              style={{
                padding: "8px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "5px",
              }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>:
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px",
              color:task.completed === false ? "black" : "white",
              backgroundColor: task.completed === false ? "white":"red",
            }}
          >
            <h1 style={{ margin: "0" }}>{task.taskName}</h1>
            <p
              style={{
                margin: "2",
              }}
            >
              {task.time}
            </p>
            <p
              style={{
                margin: "2",
              }}
            >
              {task.date}
            </p>
            <button
              style={{
                padding: "8px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "5px",
              }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
            <button
              style={{
                padding: "8px",
                fontSize: "14px",
                cursor: "pointer",
                marginLeft: "5px",
              }}
              onClick={() => toggleTask(task.id)}
            >
                Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
