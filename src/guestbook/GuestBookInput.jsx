export default function GuestBookInput({ ref, name, setName }) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        ref={ref}
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
    </>
  );
}
