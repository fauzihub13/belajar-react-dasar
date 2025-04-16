// let counter = 0;

export default function Row({id, text }) {
  // counter++;
  return (
    <tr>
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}
