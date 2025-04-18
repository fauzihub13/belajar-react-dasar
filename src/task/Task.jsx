import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);

  function handleSubmit(item) {
    setItems((items) => {
      items.push(item);
    });
  }

  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} />
    </div>
  );
}
