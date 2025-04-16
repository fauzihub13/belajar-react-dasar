function HelloWorld({ name, age = 12 }) {
  const style = {
    color: "red",
    fontSize: 99,
  };
  return (
    <>
      <h1 style={style}>
        Hallo {name.toUpperCase()}, umurku {age}
      </h1>
    </>
  );
}

export default HelloWorld;
