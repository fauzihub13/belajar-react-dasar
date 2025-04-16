import "./css/HelloWorld.css";

function ParagraphWelcome({ greetings }) {
  return (
    <>
      <p className="title">{greetings}</p>
    </>
  );
}

export default ParagraphWelcome;
