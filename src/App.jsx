import "./App.css";
import AlertButton from "./button/AlertButton";
import MyButton from "./button/MyButton";
import Toolbar from "./button/Toolbar";
import { Container } from "./hello-world/Container";
import HelloWorld from "./hello-world/HelloWorld";
import ParagraphWelcome from "./hello-world/ParagraphWelcome";
import Table from "./row/Table";
import TodoList from "./todolist/TodoList";

function App() {
  const props = {
    greetings: "Fatih mau najla",
    name: "Rayhan iri",
    age: 17,
  };

  return (
    <>
      <Container>
        <HelloWorld {...props} />
        <ParagraphWelcome {...props} />
        <TodoList />
        <Table />
        <AlertButton text="Tekan aku" message="Tombol di klik" />
        <MyButton text="Tekan aku juga" onSmash={() => alert("alert me kak")} />
        <Toolbar />
      </Container>
    </>
  );
}

export default App;
