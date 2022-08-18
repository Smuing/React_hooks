import { useInput } from "./useInput";

function UseInputIndex() {
  // const maxLen = (value) => value.length <= 10;
  const noAt = (value) => !value.includes("@");
  const name = useInput("Mr.", noAt);

  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInputIndex;
