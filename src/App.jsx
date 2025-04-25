import "./App.css";
import AlertButton from "./button/AlertButton";
import MyButton from "./button/MyButton";
import Toolbar from "./button/Toolbar";
import Counter from "./form/Counter";
import SayHelloForm from "./form/SayHelloForm";
import SearchForm from "./form/SearchForm";
import { Container } from "./hello-world/Container";
import HelloWorld from "./hello-world/HelloWorld";
import ParagraphWelcome from "./hello-world/ParagraphWelcome";
import Table from "./row/Table";
import TodoList from "./todolist/TodoList";

function App() {
  const props = {
    greetings: "Andi Ananda",
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
        <Toolbar
          onClick={(e) => {
            e.stopPropagation();
            alert("You click toolbar");
          }}
        />

        <SearchForm />
        <SayHelloForm />
        <Counter />
      </Container>
    </>
  );
}

export default App;
