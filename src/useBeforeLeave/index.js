import { useBeforeLeave } from "./useBeforeLeave";

function UseBeforeLeaveIndex() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <h1>useBeforeLeave</h1>;
}

export default UseBeforeLeaveIndex;
