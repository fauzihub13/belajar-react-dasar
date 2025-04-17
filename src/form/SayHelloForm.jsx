export default function SayHelloForm() {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }
  return (
    <div>
      <form action="">
        <input id="input_name" type="text" />
        <button onClick={handleClick}>Say hello</button>
        <h1 id="text_hello">Hello world</h1>
      </form>
    </div>
  );
}
