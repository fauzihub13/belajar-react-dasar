import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn JS",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn ReactJs",
      isCompleted: false,
    },
  ];

  const todos = data.map((todo) => <Todo key={todo.id} {...todo} />);

  return (
    <ul>
      {todos}
      {/* <Todo isCompleted={true} isDeleted={true} text="Learn HTML" />
      <Todo isCompleted={true} text="Learn CSS" />
      <Todo isCompleted={true} text="Learn JavaScript" />
      <Todo isCompleted={false} text="Learn ReactJs" /> */}
    </ul>
  );
}
