export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
        {/* {isCompleted ? <del>{text}</del> : text} */}
      </li>
    );
  }
}
